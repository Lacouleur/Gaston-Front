import axios from 'axios';

//actions ajoutés à authReducer
export const ADD_POST = 'add_post';
export const ADDPOST_ERROR = 'addpost_error';

import { UrlDev, UrlProd } from 'src/store/middlewares/connect_data.js';

export function addPostAction(values) {
  console.log('addPost is working');
  console.log('======>', values);
  const JWTToken = localStorage.user;
  const headers = {
    headers: { Authorization: `Bearer ${JWTToken}` },
  };
  console.log(values);
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${UrlDev}/api/post-new`,
        { ...values },
        headers,
      );
      dispatch({ type: ADD_POST });

      // localStorage.setItem('user', res.data.token);
      history.push('/postlist');
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADDPOST_ERROR,
        payloadAddPost: 'Erreur Formulaire',
      });
    } finally {
    }
  };
}
