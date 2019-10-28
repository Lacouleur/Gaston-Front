// redux fourni une fonction combineReducers qui combine plusieurs reducer en 1
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import fieldReducer from 'src/store/reducer/LogsReducer/fieldReducer';
import forgotReducer from 'src/store/reducer/LogsReducer/forgotReducer';
import inscriptionReducer from 'src/store/reducer/LogsReducer/inscriptionReducer';
import loginReducer from 'src/store/reducer/LogsReducer/loginReducer';
import logsReducer from 'src/store/reducer/LogsReducer/logsReducer';
import welcomeReducer from 'src/store/reducer/LogsReducer/welcomeReducer';
import appReducer from 'src/store/reducer/AppReducer/appReducer';
import mapReducer from 'src/store/reducer/MapReducer/mapReducer';
import postsListReducer from 'src/store/reducer/PostsListReducer/postsListReducer';
import authReducer from 'src/store/reducer/Authreducer/authreducer';

// https://redux.js.org/api/combinereducers
const reducer = combineReducers({
fiel : fieldReducer,
forgot : forgotReducer,
incription : inscriptionReducer,
login : loginReducer,
logs : logsReducer,
welcome : welcomeReducer,
app : appReducer,
map : mapReducer,
postsList : postsListReducer,
//From Redux-From
form: formReducer,
auth: authReducer
});

export default reducer;