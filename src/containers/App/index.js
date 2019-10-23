// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { fetchPosts, fetchUsers, fetchCategories } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = null;

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => {
    const action = fetchPosts();
    dispatch(action);
  },
    fetchUsers: () => {
    const action = fetchUsers();
    dispatch(action);
  },
    fetchCategories: () => {
    const action = fetchCategories();
    dispatch(action);
  }
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
