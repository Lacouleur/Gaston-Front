// == Initial State
// import de test pour recherche SearchCity
// import SearchData from '../data/searchcity'
import postsLists from '../data/tresorsBack';

const initialState = {
  // https://github.com/uber/react-map-gl/blob/master/docs/advanced/viewport-transition.md
  postsLists,
  loading: true,
  viewport: {
    // ATTENTION Garder L'ordre Latitude Longitude !!!!
    // width: '100%',
    // height: '100vh',
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
  },
  // Token pour mapboxApi
  mapboxApiAccessToken:
    'pk.eyJ1IjoiY29vbHNraW4yYiIsImEiOiJjazFtaTBwZ3IwMHdqM3ByMGs1ZW42MjB5In0.4_OP7fER3iedwRMZqfDppg',
  // Plusieurs style par defaut sont dispos on peut meme
  // creer le notre ou afficher different type de vue
  // suivant utilisateur
  mapStyle: 'mapbox://styles/mapbox/basic-v9',
  // searchCity: {
  //   isLoading: false,
  //   results: SearchData,
  //   searchFieldValue: '',
  // },
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
const UPDATE_VIEWPORT = 'UPDATE_VIEWPORT';
const UPDATE_SEARCHFIELD = 'UPDATE_SEARCHFIELD';
const UPDATE_VIEWPORTCENTER = 'UPDATE_VIEWPORTCENTER';
export const FETCH_POSTS = 'FETCH_POST';
const STOP_LOAD_POSTS = 'STOP_LOAD_POSTS';
const RECEIVE_POSTS = 'RECEIVE_POSTS';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };
    case UPDATE_VIEWPORT:
      // console.log(action);
      return {
        ...state,
        viewport: action.viewport,
      };
    case UPDATE_SEARCHFIELD:
      // console.log(action);
      return {
        ...state,
        // viewport: action.viewport,
      };
    case FETCH_POSTS:
      console.log(action);
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

// == Action Creators
export const doSomething = (message) => ({
  type: DO_SOMETHING,
  message,
});

export const updateViewport = (viewport) => ({
  type: UPDATE_VIEWPORT,
  viewport,
});

export const updateViewportCenter = (viewport) => ({
  type: UPDATE_VIEWPORT,
  viewport,
});

export const updateSearchField = (searchFieldValue) => ({
  type: UPDATE_SEARCHFIELD,
  searchFieldValue,
});

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});
export const stopLoadPosts = () => ({
  type: STOP_LOAD_POSTS,
});
export const receivePosts = () => ({
  type: RECEIVE_POSTS,
});

// == Selectors

// == Export
export default reducer;
