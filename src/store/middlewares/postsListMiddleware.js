import axios from 'axios';
// Import Reducer
import {
  FETCH_POSTS,
  FETCH_USERS,
  FETCH_CATEGORIES,
  receivePosts,
  stopLoad,
} from 'src/store/reducer/PostsListReducer/postsListReducer';

import { UPDATE_VIEWPORT } from 'src/store/reducer/PostsListReducer/postsListReducer';
const postsListMiddleware = (store) => (next) => (action) => {
  const JWTToken = localStorage.user;
  let userState = store.getState();
  console.log(userState.user);
  // console.log(userState.user);
  const { viewport } = userState.user;
  switch (action.type) {
    case FETCH_POSTS:
      console.log('JE RECOIS LES POSTES §');
      // ici je vais réagir à FETCH_RECIPES (qui a été émise depuis componentDidMount dans App)
      axios({
        method: 'POST',
        url:
          'http://alexis-le-trionnaire.vpnuser.lan/projet-Gaston/website-skeleton/public/api/map',
        headers: { Authorization: `Bearer ${JWTToken}` },
        data: {
          zoom: viewport.zoom,
          lat: viewport.latitude,
          lng: viewport.longitude,
        },
      })
        // .post(
        //   'http://alexis-le-trionnaire.vpnuser.lan/projet-Gaston/website-skeleton/public/api/map',
        //   { headers: { Authorization: `Bearer ${JWTToken}` } },
        //   {
        // zoom: viewport.zoom,
        // lat: viewport.latitude,
        // lng: viewport.longitude,
        //   },
        // )
        .then((response) => {
          console.log('je suis la réponse ZEN', response);
          // console.log('succès', response.data);
          // je veux faire en sorte d'alimenter le state avec la réponse
          const receivePostsAction = receivePosts(response.data);
          store.dispatch(receivePostsAction);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // dans tous les cas j'arrête de considérer qu'on charge
          const actionStopLoad = stopLoad();
          store.dispatch(actionStopLoad);
        });
    // dans un switch on stoppe l'execution du switch à la fin de chaque case à l'aide de l'instruction break
    // l'instruction break permet de sortir du switch (fonctionne également dans un for, while)
    // on peut noter l'absence de break dans le reducer
    // parce qu'il y a un return dans chaque case, return est l'instruction qui stoppe l'execution d'une fonction
    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default postsListMiddleware;
