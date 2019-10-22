// == Import : npm
import React from 'react';
// import { Container} from 'semantic-ui-react';

// == Import : local
import 'src/styles/_vars.scss'
import './app.scss';
import NavBar from 'src/components/NavBar';
import Content from 'src/components/Content';
import Map from 'src/containers/Map';
import TresorsList from 'src/components/Tresors';
import FooterNav from 'src/components/FooterNav';
// import Logs from 'src/components/Logs'

// == Composant
const App = () => {

  //péparation d'un variable en dure pour affichage des composants dans "content" (navigation de gauche)
  const view = "logs"

  return (
  <div id="app">
    <div className="navBar">{/* <NavBar /> */}</div>

    <div className="maincontainer">
      <div className="contentContainer">
        {/*<Content/> */}
        <TresorsList />
      </div>

      <div className="mapContainer">
        <Map />
      </div>
      {/* <FooterNav /> */}
    </div>
  </div>
);
  }

// == Export
export default App;
