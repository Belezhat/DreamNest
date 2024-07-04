const mongoose = require('mongoose');

// Définition du schéma de l'utilisateur
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        confirmPassword: {
            type: String,
            required: true,
        },
        profileImage: {
            type: String,
            required: true,
            default:'',
        },
        tripList:{
            type: Array,
            required: true,
            default: [],
        },
        wishList: {
            type:Array,
            default: [],
        },
        propertyList: {
            type: Array,
            default: [],
        },
        reservationList: {
            type: Array,
            default: [],
        }
    },
    { timestamps: true }, // Ajout automatique des champs createdAt et updatedAt
)

// Création du modèle User basé sur le schéma défini
const User = mongoose.model("User", userSchema)
module.exports = User