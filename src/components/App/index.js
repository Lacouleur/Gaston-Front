// == Import : npm
import React from 'react';
// import { Container} from 'semantic-ui-react';

// == Import : local
import './app.scss';
import Logs from 'src/components/Logs';
import Map from 'src/containers/Map';
import PostsList from 'src/containers/PostsList';

// == Composant
class App extends React.Component {
  state = { }


// == Functions 

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render () {

 // Modifier la valeur pour changer l'affichage
 const view = "logs"
    
 console.log( "Current State", this.state);

  return (

  <div id="app">
    <div className='navBar'>
      Navigation
    </div>
    <div className="maincontainer">
      <div className="contentContainer">
        {view === 'PostsList' && <PostsList />}
        {view === 'logs' && <Logs 
        changeHandler={this.changeHandler}
        />}
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