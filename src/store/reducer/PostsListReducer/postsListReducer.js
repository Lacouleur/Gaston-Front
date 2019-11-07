// == Initial State
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
export const STORE_POSTS_DETAILS = 'STORE_POSTS_DETAILS';
export const FETCH_POSTS_DETAILS = 'FETCH_POSTS_DETAILS';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts,
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

// FETCH the nearests post from the current view.
export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

// Save the nearest posts list to the state.
export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
});

// WITH a list of ID (nearest Posts), fetch full informations of posts.
export const fetchPostsDetails = () => ({
  type: FETCH_POSTS_DETAILS,
});

//SAVE THE FULL POST ON THE STATE
export const storePostsDetails = (postDetails) => ({
  type: STORE_POSTS_DETAILS,
  postDetails,
});

// Waiting Loader
export const stopLoad = () => ({
  type: STOP_LOAD,
});
// - Selectors

// - Export
export default reducer;
