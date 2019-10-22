// == Import : npm
import React from 'react';
// import { Container} from 'semantic-ui-react';

// == Import : local
import './app.scss';
import Logs from 'src/components/Logs';
import Map from 'src/containers/Map';
import TresorsList from 'src/components/TresorsList';


// == Composant
class App extends React.Component {
  state = {}



  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render () {

    // Modifier la valeur pour changer l'affichage
    const view = "logs"

  return (

  <div id="app">
    <div className='navBar'>
      Navigation
    </div>

    <div className="maincontainer">
      <div className="contentContainer">
        {view === 'tresor' && <TresorsList />}
        {view === 'logs' && <Logs />}
      </div>

      <div className="mapContainer">
        <Map />
      </div>
    </div>
  </div>
);
}
}

// == Export
export default App;
