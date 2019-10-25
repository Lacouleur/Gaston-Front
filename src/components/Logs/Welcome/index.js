// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './welcome.scss';


// == Composant
const Welcome = ({ changeView }) => {

  // // const clickHandler = //changeView('login');
  //   console.log("1",changeView);
  // const clickHandler = () => {
  //   changeView('login')
  // };
  console.log('3 CHANGE_VIEW WELCOME :', changeView);
  console.log('I\'m the welcome component');
  return (
    <div className="welcome">
      <img className="welcome-logo" src="public\DumpsterLogos.svg" alt="Logo Gaston Racoon"></img>
      <h1 className="welcome-appTitle"> Gaston </h1>
      <h2 className="welcome-subTitle"> L'appli anti-gaspi</h2>
      <p className="welcome-text"> </p>
      <ul>
        <li className="welcome-text-list">* <b>Gaston</b> vous aide à trouver des trésors autour de vous.</li>
        <li className="welcome-text-list">*  <b>Gaston</b> lutte contre le gaspillage allimentaire et matériel. </li>
        <li className="welcome-text-list">*  <b>Gaston</b> vous met en contact avec les autres acteurs de la lutte anti-gaspillage autour de vous.</li>
        <li className="welcome-text-list">*  <b>Gaston</b> vous permet de trouver des événements associatifs dans votre ville.</li>
        <li className="welcome-text-list">* Faites comme <b>Gaston</b> , recyclez, partagez, donnez.</li>
      </ul>
      <button className="welcome-buttonStart" onClick={()=>changeView('login')}> Gaston, montre moi des trésors</button>
    </div>
  );
}

//PropTypes
Welcome.propTypes = {
  changeView: PropTypes.func.isRequired,
};

// == Export
export default Welcome;
