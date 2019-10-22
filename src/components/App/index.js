// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
import Logs from 'src/components/Logs';
import Map from 'src/containers/Map';
import PostsList from 'src/containers/PostsList';
import Welcome from '../Logs/Welcome';

// == Composant
class App extends React.Component {
  state = {
    contentView: 'logs',
    currentView: 'welcome',
  };

  componentDidMount() {
    // console.log("je suis ici");
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  // == Functions
  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  changeView = (newCurrentView, content = 'logs') => () => {
    // je modifie le state via setState, cela va déclencher un nouveau cycle de rendu, l'ui sera mise à jour en fonction des données à jour
    this.setState({
      contentView: content,
      currentView: newCurrentView,
    });
  };

  render() {
    // Modifier la valeur pour changer l'affichage
    //const view = "logs"
    // La ligne ci dessous dynamise les vue, pour l'activer décommentez là, pensez à la recommenter avant de push
    const contentView = this.state.contentView;

    //console.log( "Current State", this.state);

    return (
      <div id="app">
        <div className="navBar">Navigation</div>
        <div className="maincontainer">
          <div className="contentContainer">
            {contentView === 'PostsList' && <PostsList />}

            {contentView === 'logs' && (
              <Logs
                changeHandler={this.changeHandler}
                changeView={this.changeView}
                view={this.state.currentView}
              />
            )}
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