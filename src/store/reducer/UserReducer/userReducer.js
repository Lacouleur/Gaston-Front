const initialState = {
  userID: '',
  username: '',
  viewport: {
    // !Order : latitude Longitude!
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
  },
};

// - Actions Types
const UPDATE_VIEWPORT = 'UPDATE_VIEWPORT';
export const GET_USER_INFORMATIONS = 'GET_USER_INFORMATIONS';
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

// - Selectors

// - Export
// !important! ne pas modifier le nom de l export!
export default reducer;
