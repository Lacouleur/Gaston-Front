// == Initial State
// import de test pour recherche SearchCity
// import SearchData from '../data/searchcity'
// import postsListsDetails from 'src/data/tresorsBack';
import postsCategories from 'src/data/postsCategories';
import postsUsers from 'src/data/postsUsers';

const initialState = {
  loading: true,
  postsListsDetails: [],
  postsCategories,
  postsUsers,
  posts: [],
};

// - Actions Types
export const FETCH_POSTS = 'FETCH_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
const STOP_LOAD = 'STOP_LOAD';
export const FETCH_USERS = 'FETCH_USERS';
export const STORE_POSTS_DETAILS = 'STORE_POSTS_DETAILS';
export const FETCH_POSTS_DETAILS = 'FETCH_POSTS_DETAILS';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_POSTS:
      // console.log(action);
      return {
        ...state,
        posts: action.posts,
        loading: true,
      };
    case STORE_POSTS_DETAILS:
      return {
        ...state,
        postsListsDetails: [...state.postsListsDetails, action.postDetails],
        loading: true,
      };
    case STOP_LOAD:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

// - Actions Creators
export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const stopLoad = () => ({
  type: STOP_LOAD,
});
export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
});

export const fetchPostsDetails = () => ({
  type: FETCH_POSTS_DETAILS,
});
export const storePostsDetails = (postDetails) => ({
  type: STORE_POSTS_DETAILS,
  postDetails,
});
// - Selectors

// - Export
// !important! ne pas modifier le nom de l export!
export default reducer;
