// ici je vais trouver le reducer parent dans lequel je vais combiner mes reducers

// redux fourni une fonction combineReducers qui combine plusieurs reducer en 1
import { combineReducers } from 'redux';

// on importe chacun des sous-reducers
import loginReducer from 'src/store/reducer/LogsReducer/loginReducer';
import inscriptionReducer from 'src/store/reducer/LogsReducer/incriptionReducer'
import forgotReducer from 'src/store/reducer/LogsReducer/forgotReducer'

// https://redux.js.org/api/combinereducers
const reducer = combineReducers({
  // user: user
loginReducer,
inscriptionReducer,
forgotReducer,
});

export default reducer;
