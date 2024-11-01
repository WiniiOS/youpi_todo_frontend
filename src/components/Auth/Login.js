import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
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
    < >
      <h2 className='container mt-5'> Connexion Utilisateur</h2>
      <form className='container' onSubmit={handleLogin}>
        <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
        <button type="submit" className='btn btn-primary'>Connexion</button>
      </form>
    </>
    
  );
}

export default Login;
