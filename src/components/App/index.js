// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
import Logs from 'src/components/Logs';
import Map from 'src/containers/Map';
import PostsList from 'src/containers/PostsList';

// == Composant
class App extends React.Component {
  state = {};

  componentDidMount() {
    // console.log("je suis ici");
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    // Modifier la valeur pour changer l'affichage
    const view = 'PostsList';

    return (
      <div id="app">
        <div className="navBar">Navigation</div>
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
}

App.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
};

// == Export
export default App;
