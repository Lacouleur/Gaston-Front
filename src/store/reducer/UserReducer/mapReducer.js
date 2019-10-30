const initialState = {
  viewport: {
    // !Order : latitude Longitude!
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
  }
};

// - Actions Types
const UPDATE_VIEWPORT = 'UPDATE_VIEWPORT';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
// - Selectors

// - Export
// !important! ne pas modifier le nom de l export!
export default reducer;
