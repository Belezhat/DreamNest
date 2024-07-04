// Importation des hooks (fonction qui permet d'utiliser des fonctionnalités de React)
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import "../styles/Register.scss";

const RegisterPage = () => {
  // Déclaration de l'état formData avec useState pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  // Gestionnaire de changement pour mettre à jour formData
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value, // Si c'est une image, on prend le premier fichier
    });
  };

   // État pour vérifier si les mots de passe correspondent
  const [passwordMatch, setPasswordMatch] = useState(true)

  // Utilisation de useEffect pour vérifier si les mots de passe correspondent à chaque changement
  useEffect(() => {
    setPasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === "")
  },[formData.password, formData.confirmPassword]);

  // Fonction pour changer de page
  const navigate = useNavigate()

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault() // Empêche le comportement par défaut du formulaire

    try {
       // Création d'un objet FormData pour envoyer les données du formulaire
      const register_form = new FormData()
      // Ajout des données du formulaire à register_form
      for (var key in formData) {
        register_form.append(key, formData[key])
      }

       // Envoi de la requête POST au serveur pour l'enregistrement
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: register_form
      })

      // Si la réponse est correcte, navigation vers la page de connexion
      if (response.ok) {
        navigate("/login")
      }
    } catch (err) {
      console.log("Enregistrement échoué", err.message)
    }
  }

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form" onSubmit={handleSubmit}>
          <input
            placeholder="Votre prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Votre nom"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Mot de passe"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            required
          />
          <input
            placeholder="Confirmation"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            required
          />

          {!passwordMatch && (
            <p style={{ color: "red" }}>Le mot de passe ne correspond pas !</p>
          )}

          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile" />
            <p>Téléchargez votre photo</p>
          </label>

          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile"
              style={{ maxWidth: "80px" }}
            />
          )}
          <button type="submit" disabled={!passwordMatch}>ENREGISTRER</button>
        </form>
        <a href="/login">Vous avez déjà un compte ? Connectez-vous</a>
      </div>
    </div>
  );
};

export default RegisterPage;