const initialState = {
  isLoading: false,
  queryInput: '',
  results: [],
};

// - Actions Types
export const UPDATE_QUERY = 'UPDATE_QUERY';
const RECEIVE_RESULTS = 'UPDATE_RESULTS';
const FETCH_QUERY = 'FETCH_QUERY';
export const STOP_LOAD = 'STOP_LOAD';
// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_QUERY:
      console.log(action);
      return {
        ...state,
        queryInput: action.query,
      };
    case RECEIVE_RESULTS:
      console.log('je suis action', action);
      return {
        ...state,
        results : action.results,
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
export const updateQuery = (query) => ({
  type: UPDATE_QUERY,
  query,
});
export const receiveResults = (results) => ({
  type: RECEIVE_RESULTS,
  results,
});

// export const fetchQuery = ( )=> ({
//   type: FETCH_QUERY,
// });

export const stopLoad = () => ({
  type: STOP_LOAD,
});
// - Selectors

// - Export
// !important! ne pas modifier le nom de l export!
export default reducer;
