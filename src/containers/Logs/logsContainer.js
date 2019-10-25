// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Logs from 'src/components/Logs';

// Action Creators
import { exampleAction } from 'src/store/reducer/LogsReducer/logsReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  view: state.currentView,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  /*changeValue: (value) => {
    const action = changeInput(value);
    dispatch(action);
  },*/
});

// Container
const LogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logs);

// == Export
export default LogsContainer;
