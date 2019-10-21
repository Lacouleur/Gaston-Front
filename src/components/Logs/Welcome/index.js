// == Import : npm
import React from 'react';

// == Import : local
import './welcome.scss';


// == Composant
const Welcome = () => {

    const view = 'welcome'

    return (
  <div className="welcome">

    <div className="welcome-logo">

    </div>

    <div className="welcome-title">


    </div>
    
    <div className="welcome">
      <img className="welcome-logo" src="public\DumpsterLogos.svg" alt="Logo Gaston Racoon"></img>
        <h1 className="welcome-appTitle"> Gaston </h1>
        <h2 className="welcome-subTitle"> L'appli anti-gaspi</h2>
        <p className="welcome-text"> 
            <ul>
            <li className="welcome-text-list">* Gaston vous aide à trouver des trésors autour de vous.</li>
            <li className="welcome-text-list">* Gaston lutte contre le gaspillage allimentaire et matériel. </li>
            <li className="welcome-text-list">* Gaston vous met en contact avec les autres acteurs de la lutte anti-gaspillage autour de vous.</li>
            <li className="welcome-text-list">* Gaston vous permet de trouver des événements associatifs dans votre ville.</li>
            <li className="welcome-text-list">* Faites comme Gaston, recyclez, partagez, donnez.</li>
          
            
            </ul>
            
            
            
            
            
        </p>

    </div>

    
    <div >
    <button className="welcome-buttonStart"> Gaston, montre moi des trésors</button>
    </div>


  </div>
);
    }

// == Export
export default Welcome;
