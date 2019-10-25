// == Import : npm
// ici je vais trouver le reducer parent dans lequel je vais combiner mes reducers

// redux fourni une fonction combineReducers qui combine plusieurs reducer en 1
import { combineReducers } from 'redux';

// on importe chacun des sous-reducers
import loginReducer from 'src/store/reducer/LogsReducer/loginReducer';
import inscriptionReducer from 'src/store/reducer/LogsReducer/incriptionReducer'
import mapReducer from 'src/store/reducer/MapReducer/mapReducer'
import postReducer from 'src/store/reducer/PostReducer/postReducer'
import appReducer from 'src/store/reducer/AppReducer/appReducer'
// https://redux.js.org/api/combinereducers
const reducer = combineReducers({
  // user: user
login : loginReducer,
inscription : inscriptionReducer,
forgot : forgotReducer,
map : mapReducer, 
post : postReducer
app : 
});

export default reducer;
