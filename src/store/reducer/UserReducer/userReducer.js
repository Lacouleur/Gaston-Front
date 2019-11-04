const initialState = {
  userID:'',
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
const GET_USER_INFORMATIONS = 'GET_USER_INFORMATIONS';
// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_INFORMATIONS:
      console.log(action);
      return {
        ...state,
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
export const getUserInformations = (userInformations) => ({
  type: GET_USER_INFORMATIONS,
  userInformations,
});

// - Selectors

// - Export
// !important! ne pas modifier le nom de l export!
export default reducer;
