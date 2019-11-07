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
      console.log('JE RECOIS LES POSTES §');
      // ici je vais réagir à FETCH_RECIPES (qui a été émise depuis componentDidMount dans App)
      // console.log("POSTLISTmiddleware(ligne29) / Case: FETCHPOST / la carte à été modifié, j'essaie de mettre à jour"),
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
          console.log('je suis la réponse ZEN');
          console.log('succès', response.data);
          // je veux faire en sorte d'alimenter le state avec la réponse
          const receivePostsAction = receivePosts(response.data);
          // console.log(
          //   'post recu depuis la position centre de la carte',
          //   response.data,
          // );
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
      // console.log(
      //   'je suis la liste ID & DIstance des POST avant de prendre les details',
      //   postsList,
      //   'Je suis les posts dans le STORE',
      //   postsListsDetails,
      // );
      // var postsList = [
      //   { id: '269', distance: '0.11454076482501618' },
      //   { id: '270', distance: '0.12262895737210996' },
      //   { id: '268', distance: '2.756062287837027' },
      // ];

      // var postsListsDetails = [
      //   { id: '269', distance: '0.11454076482501618' },
      //   { id: '270', distance: '0.12262895737210996' },
      // ];

      // const result = filterPostList(postsListPREFA, postsListsDetailsPREFA);
      // posts: postsList, postsListsDetails

      // console.log('[PostsListMW -> l106] => case FETCH_POST_DETAIL -> TABLEAU FILTRÉ (Quel est mon lien avec FetchPost() ?)', result);
      if (
        !postsList.hasOwnProperty('fail') &&
        (typeof postsList !== 'undefined' && postsList.length > 0)
      ) {
        const props = ['id', 'distance'];
        var result = postsList
          .filter(function(o1) {
            // filter out (!) items in result2
            return !postsListsDetails.some(function(o2) {
              return o1.id !== o2.id; // assumes unique id
            });
          })
          .map(function(o) {
            // use reduce to make objects with only the required properties
            // and map to apply this to the filtered array as a whole
            return props.reduce(function(newo, distance) {
              newo[distance] = o[distance];
              return newo;
            }, {});
          });
        result.forEach((element) => {
          // console.log('======->', element);
          axios({
            method: 'GET',
            url: `http://alexis-le-trionnaire.vpnuser.lan/projet-Gaston/website-skeleton/public/api/post/${element.id}`,
            headers: { Authorization: `Bearer ${JWTToken}` },
          })
            .then((response) => {
              // console.log('je suis la réponse GET DETAILS DU POST', {
              //   ...element,
              //   ...response.data,
              // });
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
