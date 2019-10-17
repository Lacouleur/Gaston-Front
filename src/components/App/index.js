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
    <NavBar />
    <Map />
    <Tresors />
    <FooterNav />
  </div>
);

// == Export
export default App;
