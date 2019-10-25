// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './logs.scss';
import Welcome from 'src/containers/Logs/Welcome/welcomeContainer.js';
import Inscription from 'src/containers/Logs/Inscription/inscriptionContainer.js';
//import Login from 'src/containers/Logs/Login/loginContainer';
import Login from './Login';
import Forgot from './Forgot';

/* Liste de taches 

     <Switch>
          <section className="contentContainer">
            <Route exact path="/" component={Logs} />
            <Route exact path="/postlist" component={PostsList} />        
            <Route exact path="/addpost" component={PostsList} />
            <Route exact path="/user" component={Logs} />
          </section>
        </Switch>
*/

// == Composant
const Logs = () => {
  // console.log('2 CHANGE_VIEW LOGS :', changeView);

  return (
    <div className="logs">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/forgot" component={Forgot} />
      </Switch>
    </div>
  );
};

Logs.propTypes = {};

// == Export
export default Logs;
