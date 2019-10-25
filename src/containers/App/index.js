// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators

import { changeView } from 'src/store/reducer/AppReducer/appReducer';

/* === State (données) === */
const mapStateToProps = (state) => {
  // console.log ("STATE App = ", state);
  return {
  contentView : state.app.contentView,
  currentView : state.app.currentView,
  }
};
/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeView: (value="welcome", contentvalue="logs") => {
    const action = changeView(value, contentvalue);
    dispatch(action);
  },

  //   updateViewport: (mapChange) => {
  //   dispatch(updateViewport(mapChange));
  //   // console.log(mapChange);
  // },

  // const mapDispatchToProps = (dispatch, ownProps) => ({
  // // doSomething: () => {
  // //   dispatch(doSomething("Coucou"));
  // // }
  // fetchPosts: (posts) => {
  //   dispatch(fetchPosts(posts));
  //   // console.log(mapChange);
  // },
// });

});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
