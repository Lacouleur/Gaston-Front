import axios from 'axios';
import querystring from 'querystring';
//actions ajoutés à authReducer
export const ADD_POST = 'add_post';
export const ADDPOST_ERROR = 'addpost_error';

import { UrlProd } from 'src/store/middlewares/connect_data.js';
import {
  RECEIVE_POSTS,
  FETCH_POSTS,
} from 'src/store/reducer/PostsListReducer/postsListReducer';
export function addPostAction(values) {
  // var bodyFormData = new FormData();
  // bodyFormData.append('category', values.category);
  // const catTest =
  const JWTToken = localStorage.user;
  const headers = {
    headers: {
      Authorization: `Bearer ${JWTToken}`,
      'Content-Type': 'multipart/form-data',
    },
  };
  return async (dispatch) => {
    try {
      const res = await axios
      .post(`${UrlProd}/api/post-new`, values, headers)
      .then(
        dispatch({
        type: FETCH_POSTS}),
        dispatch({ 
        type: ADD_POST })
      );
      
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADDPOST_ERROR,
        payloadAddPost: 'Erreur Formulaire',
      });


    } finally {
      // console.log('FINALY a reprendre la liste des postes')
      
    
    }
  };
}

