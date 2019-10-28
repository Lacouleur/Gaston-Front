import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL = '//alexis-le-trionnaire.vpnuser.lan/projet-Dumpsters/website-skeleton/public/api';


export function logInAction({ pseudo, password }, history) {

  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/login_check`, { pseudo, password });
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/secret');

    } catch(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}