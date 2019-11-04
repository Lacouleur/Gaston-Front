const initialState = {
  userID: '',
  username: '',
  viewport: {
    // !Order : latitude Longitude!
    latitude: 42.703004,
    longitude: 9.449623,
    zoom: 15,
  },
};

// - Actions Types
const UPDATE_VIEWPORT = 'UPDATE_VIEWPORT';
export const GET_USER_INFORMATIONS = 'GET_USER_INFORMATIONS';
export const GET_USER_ADRESS_DETAILS = 'GET_USER_ADRESS_DETAILS';
export const GET_USER_GEOGRAPHICAL_DETAILS = 'GET_USER_GEOGRAPHICAL_DETAILS';
// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_INFORMATIONS:
      console.log(action);
      return {
        ...state,
        userID: action.userID,
        username: action.username,
        // viewport: action.viewport,
      };
    case GET_USER_GEOGRAPHICAL_DETAILS:
      console.log(action);
      return {
        ...state,
        viewport: {
          latitude: action.latitude,
          longitude: action.longitude,
          zoom: 15,
        },
        // viewport: action.viewport,
      };
    case UPDATE_VIEWPORT:
      // console.log(action);
      return {
        ...state,
        viewport: action.viewport,
      };
    default:
      return state;
  }
};

// - Actions Creators
export const updateViewport = (viewport) => ({
  type: UPDATE_VIEWPORT,
  viewport,
});
export const getUserInformations = (username, userID) => ({
  type: GET_USER_INFORMATIONS,
  username,
  userID,
});
export const getGeographicalInformations = (latitude, longitude) => ({
  type: GET_USER_GEOGRAPHICAL_DETAILS,
  latitude,
  longitude,
});

// - Selectors

// - Export
// !important! ne pas modifier le nom de l export!
export default reducer;
