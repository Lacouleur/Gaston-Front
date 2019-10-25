// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : loca
// ce que j'importe c'est LE reducer parent
import reducer from 'src/store/reducer';
// import logMiddleware from './logMiddleware';
import postsListMiddleware from 'src/store/middlewares/postsListMiddleware.js';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    postsListMiddleware,
    // logMiddleware,
    // secondMiddleware,
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
