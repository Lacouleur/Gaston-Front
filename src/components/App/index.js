// == Import : npm
import React from 'react';
// import { Container} from 'semantic-ui-react';

// == Import : local
import './app.scss';
import Logs from 'src/components/Logs';
import Map from 'src/containers/Map';
import PostsList from 'src/containers/PostsList';
// == Composant
const App = () => {
  //péparation d'un variable en dure pour affichage des composants dans "content" (navigation de gauche)
  const view = "PostsList"
  return (

  <div id="app">
    <div className='navBar'>
      Navigation
    </div>
    <div className="maincontainer">
      <div className="contentContainer">
        {view === 'PostsList' && <PostsList />}

        {view === 'logs' && <Logs />}
      </div>
      <div className="mapContainer">
        <Map />
      </div>
    </div>
  </div>
 );
}

// == Export
export default App;
