// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
import Logs from 'src/components/Logs';
import Map from 'src/containers/Map';
import NavBar from 'src/components/NavBar';
import PostsList from 'src/containers/PostsList';

// == Composant
class App extends React.Component {
  /*state = {
    contentView: 'logs',
    currentView: 'welcome',
  };*/

  // == Functions



  render() {
    const { contentView, currentView, changeView } = this.props;
    // Modifier la valeur pour changer l'affichage
    //const view = "logs"
    // La ligne ci dessous dynamise les vue, pour l'activer décommentez là, pensez à la recommenter avant de push
    //const contentView = this.state.contentView;
    //console.log( "Current State", this.state);

    console.log('1 CHANGE_VIEW APP :', changeView);

    return (
      <div id="app">
        <NavBar className="navBar" />
        <main className="maincontainer">
          <section className="contentContainer">
            {contentView === 'PostsList' && <PostsList />}

            {contentView === 'logs' && (
              <Logs
                changeView={changeView}
                view={currentView}
              />
            )}
          </section>

          <div className="mapContainer">
            <Map />
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  currentView: PropTypes.string.isRequired,
  //fetchPosts: PropTypes.func.isRequired,
  //fetchUsers: PropTypes.func.isRequired,
  //fetchCategories: PropTypes.func.isRequired,
};

// == Export
export default App;
