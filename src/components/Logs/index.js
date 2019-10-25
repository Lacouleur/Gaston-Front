// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './logs.scss';
import Welcome from '../../containers/Logs/Welcome/welcomeContainer';
import Inscription from './Inscription';
//import Login from 'src/containers/Logs/Login/loginContainer';
import Login from './Login';
import Forgot from './Forgot';


/* Liste de taches 

O - Faire un menu scrolable 
O - Créer un "on submit" sur les forms
  O- Avec le petit this.steState
O - Ajouter des vérifications sur les inputs
O - Mettre les click handlers



*/



// == Composant
const Logs = ({view}) => {

  
    return (
  <div className="logs">
    {view === 'welcome' && <Welcome />}
    {view === 'login' &&<Login />}
    {view === 'inscription' &&<Inscription/>}
    {view === 'forgot' &&<Forgot />}
  </div>
);
    }

Logs.propTypes = {
};

// == Export
export default Logs;
