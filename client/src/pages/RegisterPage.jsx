import React from 'react';
import '../styles/Register.scss';


const RegisterPage = () => {
  return (
    <div className='register'>
        <div className='register_content'>
            <form className='register_content_form'>
              <input 
                placeholder="Votre prénom " 
                name="firstname"
                required
              />
                <input 
                  placeholder="Votre nom" 
                  name="lastname"
                  required
              />
                <input 
                  placeholder="Email" 
                  name="email"
                  type="email"
                  required
              />
                <input 
                  placeholder="Mot de passe" 
                  name="password"
                  type="password"
                  required
              />
                <input 
                  placeholder="Confirmation" 
                  name="confirmPassword"
                  type="password"
                  required
              />
              <input 
                 id="image"
                 type="file" 
                 name="profileImage" 
                 accept="image/*" 
                 style={{display: 'none'}}
                 required 
                 /> 
                 <label htmlFor="image">
                  <img src="/assets/addImage.png" alt="profile" />
                  <p>Téléchargez votre photo</p>
                 </label>
                 <button type='submit'>Enregistrer</button>
            </form>
            <a href="/login">Vous avez déjà un compte ? Connectez-vous</a>
        </div>

    </div>
  )
} 

export default RegisterPage