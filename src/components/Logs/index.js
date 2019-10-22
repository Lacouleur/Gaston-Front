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



*/


// == Composant
const Logs = ({changeHandler}) => {

    const view = 'inscription'

    return (
  <div className="logs">
    {view === 'welcome' && <Welcome />}
    {view === 'login' &&<Login 
    changeHandler={changeHandler}
    />}
    {view === 'inscription' &&<Inscription
    changeHandler={changeHandler}
     />}
    {view === 'forgot' &&<Forgot
    changeHandler={changeHandler}
     />}
  </div>
);
    }

Logs.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

// == Export
export default Logs;
