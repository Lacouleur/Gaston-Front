import axios from 'axios';

import { UrlDev, UrlProd } from "src/store/middlewares/connect_data.js";

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
  // console.log(userState.user);
  // console.log(userState.user);
  const { viewport } = userState.user;
  switch (action.type) {
    case FETCH_POSTS:
      // console.log('JE RECOIS LES POSTES §');
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
          // console.log('je suis la réponse ZEN', response);
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

    case FETCH_CATEGORIES:
      // ici je vais réagir à FETCH_RECIPES (qui a été émise depuis componentDidMount dans App)
      axios
        .get(
          `${UrlDev}/api/categories`,
          { crossdomain: true },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          },
        )
        .then((response) => {
          // console.log('succès', response.data);
          // je veux faire en sorte d'alimenter le state avec la réponse
          const receiveCategoriesAction = receiveCategories(response.data);
          store.dispatch(receiveCategoriesAction);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          // dans tous les cas j'arrête de considérer qu'on charge
          const actionStopLoad = stopLoad();
          store.dispatch(actionStopLoad);
        });
      break;
    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default postsListMiddleware;
