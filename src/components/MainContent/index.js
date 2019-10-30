// == Import : npm
import React from 'react';
import { Route, Switch,} from 'react-router-dom';
// import { connect } from 'react-redux';
// import store from 'src/store/store.js';


// == Import : local
import './maincontent.scss';
// import { AUTHENTICATED } from 'src/store/middlewares/loginMiddleware.js';
import Logs from 'src/components/Logs';
import Map from 'src/containers/Map';
import PostsList from 'src/containers/PostsList';
import Welcome from 'src/containers/Logs/Welcome/welcomeContainer.js';
import AdressSearch from 'src/components/AdressSearch';
import Forgot from 'src/components/Logs/Forgot';
import Inscription from 'src/components/Logs/Inscription';
import AddPost from 'src/components/AddPost'
import AddPostForm from 'src/components/AddPost/AddPostForm'

//== Securtity
import requireAuth from 'src/security/requireAuth';
import noRequireAuth from 'src/security/noRequireAuth';

// == Composant
class MainContent extends React.Component {
  render() {
    const user = localStorage.getItem('user');
    //DEBUG
    // console.log("requireAuth ===> ", requireAuth);
    // console.log("noRequireAuth ===> ", noRequireAuth);

    // if (user) {
    //   store.dispatch({ type: AUTHENTICATED });
    // }

    return (
      <main className="maincontainer">
        <section className="contentContainer">
        <AddPostForm />
        </section>
        <div className="mapContainer">
          <Map />
        </div>
      </main>
    );
  }
}

// == Export
export default MainContent;
