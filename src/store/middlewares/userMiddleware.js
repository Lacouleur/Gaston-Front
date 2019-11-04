import axios from 'axios';
// Import Reducer
import {
  GET_USER_INFORMATIONS,
  getUserInformations,
} from 'src/store/reducer/UserReducer/userReducer';

const postsListMiddleware = (store) => (next) => (action) => {
  const JWTToken = localStorage.user;
  console.log('je suis le token', JWTToken);
  switch (action.type) {
    case GET_USER_INFORMATIONS:
      console.log('je suis le middleWare', action);
      axios
        .get(
          `//alexis-le-trionnaire.vpnuser.lan/projet-Gaston/website-skeleton/public/api/user/${action.userID}`,
          { headers: { Authorization: `Bearer ${JWTToken}` } },
        )
        .then((res) => {
          console.log('CA MARCHHHHHHHHHHHHHE!!!:', res.data);
        })
        .catch((error) =>
          console.log('CA MARCHHHHHHHHHHHHHEPASSSSSSSSSSS!!!:', error),
        );
      break;
    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default postsListMiddleware;
