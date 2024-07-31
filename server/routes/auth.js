const router = require("express").Router();
const bcrypt = require("bcryptjs"); //  Utilisé pour hacher les mots de passe.
const jwt = require("jsonwebtoken");  // Importation de jsonwebtoken pour la gestion des tokens (chaîne de caractères utilisée pour authentifier et autoriser des utilisateurs dans les systèmes informatiques).
const multer = require("multer"); // Permet de gérer les formulaires multiparties combinés avec des fichiers.

const User = require("../models/User");

/* Configuration Multer pour le téléchargement de fichier */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Dossier de destination pour les fichiers téléchargés
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  },
});

const upload = multer({ storage });

/* ENREGISTREMENT DE L'UTILISATEUR */
router.post("/register", upload.single("profileImage"), async (req, res) => {
  try {
    /* Récupérer les informations du formulaire */
    const { firstName, lastName, email, password } = req.body;

    const profileImage = req.file;

    if (!profileImage) {
      return res.status(400).send("No file uploaded");
    }

    
    const profileImagePath = profileImage.path;

    /* Vérifie si l'utilsateur existe */
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Utilisateur déjà incrit !" });
    }

    /* Mot de passe haché 
    Salt : chaîne de caractères aléatoires ajoutée au mot de passe avant le hachage
    */
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    /* Creation d'un nouvel utilisateur */
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profileImagePath,
    });

    /* Sauvegarde le nouvel utilisateur */
    await newUser.save();

    /* Confirmation de l'enregistement avec succès */
    res
      .status(200)
      .json({ message: "Utilisateur enregistré avec succès !", user: newUser });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Enregistrement échoué !", error: err.message });
  }
});

/* Connexion utilisateur */
router.post("/login", async (req, res) => {
  try {
    // Récupére l'email et le mot de passe depuis le corps de la requête
    const { email, password } = req.body

     // Cherche un utilisateur correspondant à l'email dans la base de données
    const user = await User.findOne({ email });
    if (!user) {
      // Si l'utilisateur n'existe pas, renvoyer une réponse avec un statut 409
      return res.status(409).json({ message: "l'utilisateur n'existe pas!" });
    }

     // Comparer le mot de passe fourni avec le mot de passe haché stocké
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        // Si les mots de passe ne correspondent pas, renvoie une réponse avec un statut 400
      return res.status(400).json({ message: "Mot de passe invalide!"})
    }
  
    // Création du token JWT avec l'id de l'utilisateur
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
     // Supprimer le mot de passe de l'objet utilisateur avant de l'envoyer
    delete user.password

    // Renvoie le token et les informations de l'utilisateur
    res.status(200).json({ token, user })

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

module.exports = router;