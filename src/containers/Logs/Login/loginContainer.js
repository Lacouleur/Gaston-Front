// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Login from 'src/components/Logs/Login';

// Action Creators
import { exampleAction } from 'src/store/reducer/LogsReducer/loginReducer';

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
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// == Export
export default LoginContainer;