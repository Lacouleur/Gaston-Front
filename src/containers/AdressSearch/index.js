// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AdressSearch from 'src/components/AdressSearch';

// Action Creators

import { changeView } from 'src/store/reducer/AppReducer/appReducer';

/* === State (données) === */
const mapStateToProps = (state) => {
  // console.log ("STATE App = ", state);
  return {

  }
};
/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
 
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
const AdressSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdressSearch);

// == Export
export default AdressSearch;
