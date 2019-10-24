// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducer/reducer';
// import logMiddleware from './logMiddleware';
import ajaxMiddleware from './ajaxMiddleware';


// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // logMiddleware,
    ajaxMiddleware,
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;