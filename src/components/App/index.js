// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import NavBar from 'src/components/NavBar';
import Map from 'src/components/Map';
import Tresors from 'src/components/Tresors';
import FooterNav from 'src/components/FooterNav';

// == Composant
const App = () => (
  <div id="app">
    <div className="leftNav-container">
      // ajouter un CSS sur leftNav-container pour coller ce truc là à gauche, fixer la taille, et c'est plié ^^
      // On aura plus qu'à coder nos composants de navigation à l'intérieur
    </div>
    <NavBar />
    <Map />
    <Tresors />
    <FooterNav />
  </div>
);

// == Export
export default App;
