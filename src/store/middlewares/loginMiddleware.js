import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { getUserInformations } from 'src/store/reducer/UserReducer/userReducer';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL =
  'http://alexis-le-trionnaire.vpnuser.lan/projet-Gaston/website-skeleton/public/api';

export function logInAction({ username, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/login_check`, {
        username,
        password,
      });
      let token = res.data.token;
      let tokenDecoded = jwt_decode(token);
      const { user_id } = tokenDecoded;
      console.log(user_id);

      const getUserInformationsAction = getUserInformations(username, user_id);
      store.dispatch(getUserInformationsAction);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);

      history.push('/postList');
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Pseudo ou Password invalide',
      });
    }
  };
}
