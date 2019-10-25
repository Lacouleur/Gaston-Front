// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Field from 'src/components/Logs/Field';

// Action Creators
import { exampleAction } from 'src/store/reducer/LogsReducer/fieldReducer';

/* === State (données) === */
const mapStateToProps = (state, onwProps) => ({
  
});

/* === Actions === */
const mapDispatchToProps = (dispatch, onwProps) => ({
  /*changeValue: (value) => {
    const action = changeInput(value);
    dispatch(action);
  },*/
});

// Container
const FieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Field);

// == Export
export default FieldContainer;