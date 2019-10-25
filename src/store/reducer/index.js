// ici je vais trouver le reducer parent dans lequel je vais combiner mes reducers

// redux fourni une fonction combineReducers qui combine plusieurs reducer en 1
import { combineReducers } from 'redux';

// import fieldReducer from 'src/store/reducer/LogsReducer/fieldReducer'
// import forgotReducer from 'src/store/reducer/LogsReducer/forgotReducer'
// import inscriptionReducer from 'src/store/reducer/LogsReducer/incriptionReducer'
// import loginReducer from 'src/store/reducer/LogsReducer/loginReducer';
// import logsReducer from 'src/store/reducer/LogsReducer/logsReducer'
// import welcomeReducer from 'src/store/reducer/LogsReducer/welcomeReducer'
import appReducer from 'src/store/reducer/AppReducer/appReducer'
import mapReducer from 'src/store/reducer/MapReducer/mapReducer'
import postsListReducer from 'src/store/reducer/PostsListReducer/postsListReducer'

// https://redux.js.org/api/combinereducers
const reducer = combineReducers({
// fieldReducer,
// forgotReducer,
// inscriptionReducer,
// loginReducer,
// logsReducer,
// welcomeReducer,
app : appReducer,
map : mapReducer,
postsList : postsListReducer,
});

export default reducer;