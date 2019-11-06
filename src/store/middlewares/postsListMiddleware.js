import axios from 'axios';

import { UrlDev, UrlProd } from 'src/store/middlewares/connect_data.js';
import { filterPostList } from 'src/Utils/postsList';
// Import Reducer
import {
  FETCH_POSTS,
  FETCH_USERS,
  FETCH_CATEGORIES,
  STORE_POSTS_DETAILS,
  FETCH_POSTS_DETAILS,
  receivePosts,
  stopLoad,
  fetchPostsDetails,
  storePostsDetails,
} from 'src/store/reducer/PostsListReducer/postsListReducer';

import { UPDATE_VIEWPORT } from 'src/store/reducer/PostsListReducer/postsListReducer';
const postsListMiddleware = (store) => (next) => (action) => {
  const JWTToken = localStorage.user;
  let storeState = store.getState();
  const { viewport } = storeState.user;

  const { posts: postsList, postsListsDetails } = storeState.postsList;
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
          console.log('===> test', response.data);
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
    case FETCH_POSTS_DETAILS:
      console.log(postsList, postsListsDetails);

      const result = filterPostList(postsList, postsListsDetails);

      console.log('nouveaux tableau de requete', result);
      if (
        Array.isArray(result) &&
        result.length &&
        !postsList.hasOwnProperty('fail')
      ) {
        postsList.forEach((element) => {
          console.log('======->', element);
          axios({
            method: 'GET',
            url: `http://alexis-le-trionnaire.vpnuser.lan/projet-Gaston/website-skeleton/public/api/post/${element.id}`,
            headers: { Authorization: `Bearer ${JWTToken}` },
          })
            .then((response) => {
              console.log('je suis la réponse GET DETAILS DU POST', {
                ...element,
                ...response.data,
              });
              const postDetails = {
                ...element,
                ...response.data,
              };
              // console.log('succès', response.data);
              // je veux faire en sorte d'alimenter le state avec la réponse
              const storePostsDetailsAction = storePostsDetails(postDetails);
              store.dispatch(storePostsDetailsAction);
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              // dans tous les cas j'arrête de considérer qu'on charge
              const actionStopLoad = stopLoad();
              store.dispatch(actionStopLoad);
            });
        });
      }
      break;
    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default postsListMiddleware;
