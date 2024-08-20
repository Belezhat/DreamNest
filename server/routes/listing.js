const router = require("express").Router();
const multer = require("multer");

const Listing = require("../models/Listing");
const User = require("../models/User");

/* Configuration Multer pour le téléchargement de fichiers */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Stocke les fichiers téléchargés dans le dossier 'uploads'
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Utilise le nom du fichier d'origine
  },
});

const upload = multer({ storage });

/* RÉCUPÉRATION DES DONNÉES DU FORMULAIRE ET CRÉATION DE L'ANNONCE */
router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    const {
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      description,
      price,
    } = req.body;

    const listingPhotos = req.files;

    if (!listingPhotos) {
      return res.status(400).send("No file uploaded.");
    }

    const listingPhotoPaths = listingPhotos.map((file) => file.path);

    const newListing = new Listing({
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      listingPhotoPaths,
      title,
      description,
      price,
    });

    await newListing.save();

    res.status(200).json(newListing);
  } catch (err) {
    res.status(409).json({ message: "Fail to create Listing", error: err.message });
    console.log(err);
  }
});

/* OBTENIR LES ANNONCES PAR CATÉGORIE */
router.get("/", async (req, res) => {
  const qCategory = req.query.category;

  try {
    let listings;
    if (qCategory) {
      listings = await Listing.find({ category: qCategory }).populate("creator");
    } else {
      listings = await Listing.find().populate("creator");
    }

    // Formatage des prix en euros pour chaque annonce
    listings = listings.map(listing => ({
      /** toObject = c'est une méthode pour convertir les documents Mongoose en objet
       * le spread operator (...) permet de copier les propriétés d'un objet dans un autre
       * Intl.NumberFormat = Classe intégrée en JavaScript qui permet de formater des nombres en fonction des paramètres régionaux et des options spécifiées.
       */
      ...listing.toObject(),
      formattedPrice: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(listing.price)
    }));

    res.status(200).json(listings);
  } catch (err) {
    res.status(404).json({ message: "Fail to fetch listings", error: err.message });
    console.log(err);
  }
});

/* OBTENIR DES ANNONCES PAR RECHERCHE */
router.get("/search/:search", async (req, res) => {
  const { search } = req.params;

  try {
    let listings = [];

    if (search === "all") {
      listings = await Listing.find().populate("creator");
    } else {
      listings = await Listing.find({
        $or: [
          { category: { $regex: search, $options: "i" } },
          { title: { $regex: search, $options: "i" } },
        ]
      }).populate("creator");
    }

     
     listings = listings.map(listing => ({
      ...listing.toObject(),
      formattedPrice: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(listing.price)
    }));

    res.status(200).json(listings);
  } catch (err) {
    res.status(404).json({ message: "Fail to fetch listings", error: err.message });
    console.log(err);
  }
});

/* DÉTAILS DE LA LISTE */
router.get("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId).populate("creator");

    // Formatage du prix en euros
    const formattedPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(listing.price);

    // Prix formaté dans la réponse JSON
    res.status(202).json({ ...listing.toObject(), formattedPrice });
  } catch (err) {
    console.log("Erreur lors de la récupération de l'annonce :", err.message);
    res.status(404).json({ message: "Listing can not found!", error: err.message });
  }
});

module.exports = router;
