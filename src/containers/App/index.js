// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators

import { exampleAction } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = (state) => {
  console.log ("STATE App = ", state);
  return {
  contentView : state.app.contentView,
  currentView : state.app.currentView,
  }
};
/* === Actions === */
const mapDispatchToProps = (dispatch) => ({


});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
