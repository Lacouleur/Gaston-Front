// == Import : npm
import React from 'react';

// == Import : local
import './logs.scss';
import Forgot from './Forgot';
import Inscription from './Inscription';
import Login from './Login';
import Welcome from './Welcome';

// == Composant
const Logs = () => {

    const view = 'Login'

    return (
  <div id="app">
    <Welcome />
    <Login />
    <Inscription />
    <Forgot />
  </div>
);
    }

// == Export
export default Logs;
