// == Import : npm
import React from 'react';
// import { Container} from 'semantic-ui-react';

// == Import : local
import './app.scss';
import NavBar from 'src/components/NavBar';
import Content from 'src/components/Content';
import Map from 'src/containers/Map';
import Tresors from 'src/components/Tresors';
import FooterNav from 'src/components/FooterNav';

// == Composant
const App = () => (
  <div id="app">
    <div className="navBar">{/* <NavBar /> */}</div>

    <div className="maincontainer">
      <div className="contentContainer">
        {/*<Content/> */}
        <Tresors />
      </div>

      <div className="mapContainer">
        <Map />
      </div>
      {/* <FooterNav /> */}
    </div>
  </div>
);

// == Export
export default App;
