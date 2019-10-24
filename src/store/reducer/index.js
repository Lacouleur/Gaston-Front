// ici je vais trouver le reducer parent dans lequel je vais combiner mes reducers

// redux fourni une fonction combineReducers qui combine plusieurs reducer en 1
import { combineReducers } from 'redux';

// on importe chacun des sous-reducers
import appReducer from 'src/store/reducer/AppReducer/appReducer'
import mapReducer from 'src/store/reducer/MapReducer/mapReducer'
// combineReducers nous retourne le reducer parent généré
// on doit fournir en paramètre un objet
// avec en clé un nom donné à chaque reducer et en valeur, chaque fonction reducer
// https://redux.js.org/api/combinereducers
const reducer = combineReducers({
  // user: user
app : appReducer,
map : mapReducer,
});

export default reducer;