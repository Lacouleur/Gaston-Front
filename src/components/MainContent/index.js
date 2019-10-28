// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './maincontent.scss';
import Logs from 'src/components/Logs';
import Map from 'src/containers/Map';
import PostsList from 'src/containers/PostsList';
import Welcome from 'src/containers/Logs/Welcome/welcomeContainer.js';
import AdressSearch from 'src/components/AdressSearch';

// == Composant
class App extends React.Component {
  render() {
    const contentView = 'logs';
    // const { contentView, currentView, changeView } = this.props;
    // // console.log('1 CHANGE_VIEW APP :', changeView);
    return (
      <main className="maincontainer">
        <section className="contentContainer">
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/postlist" component={PostsList} />
            <Route exact path="/addpost" component={PostsList} />
            <Route  path="/sign" component={Logs} />
            

            <Route>
              <div>
              <AdressSearch />
                <h1>Page non trouvée</h1>
              </div>
            </Route>
            </Switch>
          </section>
        <div className="mapContainer">
          <Map />
        </div>
      </main>
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

/*
{/*contentView === 'logs' && (
//   <Logs changeView={changeView} view={currentView} />
// )}

*/
