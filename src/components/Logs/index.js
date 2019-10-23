// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './logs.scss';
import Forgot from './Forgot';
import Inscription from './Inscription';
import Login from './Login';
import Welcome from './Welcome';

/* Liste de taches 

O - Faire un menu scrolable 
O - Créer un "on submit" sur les forms
  O- Avec le petit this.steState
O - Ajouter des vérifications sur les inputs
O - Mettre les click handlers



*/



// == Composant
const Logs = ({changeHandler, changeView, view}) => {

    console.log("VIEW(in Logs) :" , view);

    return (
  <div className="logs">
    {view === 'welcome' && <Welcome 
    changeView={changeView}
    />}
    {view === 'login' &&<Login 
    changeHandler={changeHandler}
    changeView={changeView}
    />}
    {view === 'inscription' &&<Inscription
    changeHandler={changeHandler}
    changeView={changeView}
     />}
    {view === 'forgot' &&<Forgot
    changeHandler={changeHandler}
    changeView={changeView}
     />}
  </div>
);
    
 }

Logs.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  view : PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

// == Export
export default Logs;
