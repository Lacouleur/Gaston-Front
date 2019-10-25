// == Initial State
// import de test pour recherche SearchCity
// import SearchData from '../data/searchcity'
import postsLists from 'src/data/tresorsBack';
import postsCategories from 'src/data/postsCategories';
import postsUsers from 'src/data/postsUsers';

const initialState = {
  loading: false,
  postsLists,
  postsCategories,
  postsUsers,
  posts: [],
};

// - Actions Types
export const FETCH_POSTS = 'FETCH_POST';
const RECEIVE_POSTS = 'RECEIVE_POSTS';
// const STOP_LOAD_POSTS = 'STOP_LOAD_POSTS';
export const FETCH_USERS = 'FETCH_USERS';
// const STOP_FETCH_USERS ='STOP_FETCH_USERS';
// const RECEIVE__FETCH_USERS ='RECEIVE__FETCH_USERS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
// const STOP_FETCH_CATEGORIES ='STOP_FETCH_CATEGORIES';
// const RECEIVE__FETCH_CATEGORIES ='RECEIVE__FETCH_CATEGORIES';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action);
      return {
        ...state,
        loading: false,
      };
    case RECEIVE_POSTS:
      console.log(action);
      return {
        ...state,
        posts: action.posts,
        loading: false,
      };
    default:
      return state;
  }
};

// - Actions Creators
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  fetch,
});
export const stopLoadPosts = () => ({
  type: STOP_LOAD_POSTS,
});
export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
});
// - Selectors

// - Export
// !important! ne pas modifier le nom de l export!
export default reducer;
