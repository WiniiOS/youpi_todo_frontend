import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,BrowserRouter } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TaskList from './components/Tasks/TaskList';
import Youpi from './Youpi.js'

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Youpi />
    </BrowserRouter>
  );
}

export default App;

