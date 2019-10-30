// == Import : npm
import 'regenerator-runtime/runtime';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// == Import : loca
// ce que j'importe c'est LE reducer parent
import reducer from 'src/store/reducer';
// import logMiddleware from './logMiddleware';
import postsListMiddleware from 'src/store/middlewares/postsListMiddleware';
import adressSearchMiddleware from 'src/store/middlewares/adressSearchMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const enhancers = composeEnhancers(
  applyMiddleware(
    postsListMiddleware,
    reduxThunk,
    adressSearchMiddleware,
    // logMiddleware,
    // secondMiddleware,
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
  // reduxThunk
  // createStoreWithMiddleware,
);

// == Export
export default store;
