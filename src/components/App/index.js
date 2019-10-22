// == Import : npm
import React from 'react';
// import { Container} from 'semantic-ui-react';

// == Import : local
import 'src/styles/_vars.scss'
import './app.scss';
import Logs from 'src/components/Logs';
import Map from 'src/containers/Map';
import Tresors from 'src/components/Tresors';

// import Logs from 'src/components/Logs'

// == Composant
const App = () => {

  //péparation d'un variable en dure pour affichage des composants dans "content" (navigation de gauche)
  const view = "logs"

  return (

  <div id="app">
    <div className='navBar'>
      Navigation
    {/* <NavBar /> */}
    </div>

    <div className="maincontainer">
      <div className="contentContainer">
        {view === 'tresor' && <Tresors />}
        {view === 'logs' && <Logs />}
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
