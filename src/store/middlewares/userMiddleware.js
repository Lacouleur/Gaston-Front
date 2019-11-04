import axios from 'axios';
// Import Reducer
import {
  GET_USER_INFORMATIONS,
  getGeographicalInformations,
  saveUserInformations,
} from 'src/store/reducer/UserReducer/userReducer';

const postsListMiddleware = (store) => (next) => (action) => {
  const JWTToken = localStorage.user;
  switch (action.type) {
    case GET_USER_INFORMATIONS:
      const { username, userID } = action;
      axios
        .get(
          `//alexis-le-trionnaire.vpnuser.lan/projet-Gaston/website-skeleton/public/api/user/${userID}`,
          { headers: { Authorization: `Bearer ${JWTToken}` } },
        )
        .then((res) => {
          // console.log('CA MARCHHHHHHHHHHHHHE!!!:', res.data);
          const { lat, lng } = res.data;
          const getGeographicalInformationsAction = getGeographicalInformations(
            lat,
            lng,
          );
          store.dispatch(getGeographicalInformationsAction);
          const saveUserInformationsAction = saveUserInformations(
            username,
            userID,
          );
          store.dispatch(saveUserInformationsAction);
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
