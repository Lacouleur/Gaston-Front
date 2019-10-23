// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Logs from 'src/components/Logs/Logs';

// Action Creators
import { exampleAction } from 'src/store/reducer/LogsReducer/logsReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  
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