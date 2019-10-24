// - initialState
const initialState = {
  loading: false,
  viewport: {
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
  },
  // Token pour mapboxApi
  mapboxApiAccessToken:
    'pk.eyJ1IjoiY29vbHNraW4yYiIsImEiOiJjazFtaTBwZ3IwMHdqM3ByMGs1ZW42MjB5In0.4_OP7fER3iedwRMZqfDppg',
  mapStyle: 'mapbox://styles/coolskin2b/ck22bq57r0qhb1co3tz0yqbd3',
};
  // - Actions Types
  const UPDATE_VIEWPORT = 'UPDATE_VIEWPORT';
  const UPDATE_SEARCHFIELD = 'UPDATE_SEARCHFIELD';
  const UPDATE_VIEWPORTCENTER = 'UPDATE_VIEWPORTCENTER';
  
  // - Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case UPDATE_VIEWPORT:
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

  export const updateViewportCenter = (viewport) => ({
    type: UPDATE_VIEWCENTER,
    viewport,
  });
  // - Selectors
  
  // - Export
  export default reducer;