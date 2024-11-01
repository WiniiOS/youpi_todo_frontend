import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      // Rediriger vers la liste de tâches
    } catch (error) {
      console.error('Erreur de connexion', error);
    }
  };

  return (
    <>
      <h2 className='container mt-5' > Créer un compte </h2>
      <form className='container' onSubmit={handleLogin}>
        <input className='form-control' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input className='form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
        <button className='btn btn-primary' type="submit">Connexion</button>
      </form>
    </>
  );
}

export default Register;
