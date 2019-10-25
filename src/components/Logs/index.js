// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './logs.scss';
import Welcome from 'src/containers/Logs/Welcome/welcomeContainer.js';
import Inscription from 'src/containers/Logs/Inscription/inscriptionContainer.js';
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
const Logs = ({changeView, view, changeValue }) => {

  console.log('2 CHANGE_VIEW LOGS :', changeView);
  
    return (
  <div className="logs">
  
    {view === 'welcome' && 
    <Welcome 
    changeView = {changeView} 
    changeHandler = {changeValue} />}

    {view === 'login' &&
    <Login 
    changeView = {changeView} 
    changeHandler = {changeValue}/>}

    {view === 'inscription' &&
    <Inscription
    changeView = {changeView} 
    changeHandler = {changeValue} />}

    {view === 'forgot' &&
    <Forgot
    changeView = {changeView} 
    changeValue={changeHandler} />}
  </div>
);
    }

Logs.propTypes = {
  changeView : PropTypes.func.isRequired,
};

// == Export
export default Logs;
