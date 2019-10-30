// == Import : npm
import React from 'react';


// == Import : local
import './app.scss';
import NavBar from 'src/components/NavBar';
import MainContent from 'src/components/MainContent';






// == Composant
class App extends React.Component {
  render() {
    
    return (
      <div id="app">
        <NavBar className="navBar"/>
        <MainContent />
      </div>
    );
  }
}



// == Export
export default App;
