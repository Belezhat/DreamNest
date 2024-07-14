 // Framework pour créer des serveurs web en Node.js
 const express = require("express");
// Création d'une instance d'Express
const app = express();
// Bibliothèque pour interagir avec  la base de donnée MongoDB
const mongoose = require("mongoose");
 // Module pour charger les variables d'environnement depuis un fichier .env
 const dotenv = require("dotenv").config();
// Middleware pour gérer les politiques de partage des ressources entre origines multiples
const cors = require("cors");

// Importation des routes d'authentification
const authRoutes = require('./routes/auth.js');



// Utilisation des middlewares
app.use(cors()); // Active CORS pour toutes les routes
app.use(express.json()); // Pour parser le JSON des requêtes entrantes
app.use(express.static('public')); // Sert les fichiers statiques du dossier 'public'

// Définition des routes
app.use("/auth", authRoutes); //  Toutes les routes définies dans authRoutes seront accessibles sous cette URL.

const PORT = 3001;
mongoose.connect(process.env.MONGO_URL, { // Connexion à la base de données
    dbName: 'The_place_to_be',
    
})
.then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
})
.catch((err) => console.log(`${err} Connection échouée`));
