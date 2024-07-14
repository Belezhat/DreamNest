import React, { useState } from "react";
import "../styles/Login.scss"
import { setLogin } from "../redux/state";
// Hook pour dispatcher des actions.
import { useDispatch } from "react-redux"
// Hook pour naviguer entre les pages.
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate(); // Redirige l'utilisateur vers la page d'accueil une fois la connexion réussie.

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch ("http://localhost:3001/auth/login", {
        method: "POST",
        // Spécifie que nous envoyons des données au format JSON.
        headers: {
          "Content-Type": "application/json"
        },
        // Convertit les données en une chaîne de caractères pour le transmettre à l'API.
        body: JSON.stringify({ email, password })
      })

     
      const loggedIn = await response.json()

      if (loggedIn) {
        dispatch (
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token
          })
        )
        navigate("/")
      }

    } catch (err) {
      console.log("Connexion échoué", err.message)
    }
  }

  return (
    <div className="login">
      <div className="login_content">
        <form className="login_content_form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Connectez-vous</button>
        </form>
        <a href="/register">Pas encore de compte ? Incrivez-vous.</a>
      </div>
    </div>
  );
};

export default LoginPage;