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


  const view = 'inscription'

    return (
  <div className="logs">
    {view === 'welcome' && <Welcome />}
    {view === 'login' &&<Login />}
    {view === 'inscription' &&<Inscription
    changeHandler = {this.changeHandler}

    
    />}
    {view === 'forgot' &&<Forgot />}
  </div>
);
    
 }

// == Export
export default Logs;