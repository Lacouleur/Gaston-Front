// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Welcome from 'src/components/Logs/Welcome';

// Action Creators
import { changeView } from 'src/store/reducer/LogsReducer/welcomeReducer';
/* === State (données) === */
const mapStateToProps = (state) => ({
  
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  view: () => {
    const action = changeView();
    dispatch(action);
  },
  /*changeValue: (value) => {
    const action = changeInput(value);
    dispatch(action);
  },*/
});

// Container
const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);

// == Export
export default WelcomeContainer;