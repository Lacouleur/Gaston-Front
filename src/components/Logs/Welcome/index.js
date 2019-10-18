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
    
    <div className="welcome-text">
        <p> petit texte de présentation de l'app
            Gaston vous aide à trouver des trésors autour de vous.
            Gaston lutte contre le gaspillage allimentaire et matériel. 
            Gaston vous met en contact avec les autres acteurs de la lutte anti-gaspillage autour de vous.
            Gaston vous permet de trouver des événements associatifs dans votre ville.
            Faites comme Gaston, recyclez, partagez, donnez. 
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
