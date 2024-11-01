import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TaskList from './components/Tasks/TaskList';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/tasks">
          {isAuthenticated ? <TaskList /> : <Redirect to="/login" />}
        </Route>
        <Redirect from="/" to="/tasks" />
      </Switch>
    </Router>
  );
}

export default App;
