import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL = 'http://alexis-le-trionnaire.vpnuser.lan/projet-Gaston/website-skeleton/public/api';


export function logInAction({ username, password }, history) {

  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/login_check`, 
      {
        username,
        password
      });
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/postList');
      }
      
      catch(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Pseudo ou Password invalide'
      });
    }
  };
}

