// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AdressSearch from 'src/components/AdressSearch';

// Action Creators

import { updateQuery } from 'src/store/reducer/AdressSearchReducer/AdressSearchReducer';
/* === State (données) === */
const mapStateToProps = (state) => {
  return {
    loading: state.adressSearch.isLoading,
    queryInput: state.adressSearch.queryInput,
    results: state.adressSearch.results,
  };
};
/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeQuery: (value) => {
    const action = updateQuery(value);
    dispatch(action);
  },
  // fetchQuery: () => {
  //   const action = fetchQuery();
  //   dispatch(action);
  // },
});

// Container
const AdressSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdressSearch);

// == Export
export default AdressSearchContainer;
