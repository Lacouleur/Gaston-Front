import axios from 'axios';

import { UrlDev, UrlProd } from 'src/store/middlewares/connect_data.js';
// import { filterPostList } from 'src/Utils/postsList';

// Import Reducer
import {
  FETCH_POSTS,
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
    // FETCH_POSTS :  send the viewport positions to get the nearests Posts from the current position.
    case FETCH_POSTS:
      axios({
        method: 'POST',
        url:
          'http://backend.dumpsters.grxl.fr/api/map',
        headers: { Authorization: `Bearer ${JWTToken}` },
        data: {
          zoom: viewport.zoom,
          lat: viewport.latitude,
          lng: viewport.longitude,
        },
      })
        .then((response) => {
          const receivePostsAction = receivePosts(response.data);
          store.dispatch(receivePostsAction);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          const actionStopLoad = stopLoad();
          store.dispatch(actionStopLoad);
        });

    case FETCH_POSTS_DETAILS:
    // test : "Zoom Level  : Fail too much posts" to block new query.
      if (
        !postsList.hasOwnProperty('fail')
      ) {
        const props = ['id', 'distance'];
        var result = postsList
          .filter(function(o1) {
            return !postsListsDetails.some(function(o2) {
              return o1.id !== o2.id; // assumes unique id
            });
          })
          .map(function(o) {
            return props.reduce(function(newo, distance) {
              newo[distance] = o[distance];
              return newo;
            }, {});
          });
        result.forEach((element) => {
          axios({
            method: 'GET',
            url: `http://backend.dumpsters.grxl.fr/api/post/${element.id}`,
            headers: { Authorization: `Bearer ${JWTToken}` },
          })
            .then((response) => {
              //ADD TO POST DETAILS the Id of the post and Distance from the current position.
              const postDetails = {
                ...element,
                ...response.data,
              };
              //SAVE FULL POSTDETAILS. 
              const storePostsDetailsAction = storePostsDetails(postDetails);
              store.dispatch(storePostsDetailsAction);
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              const actionStopLoad = stopLoad();
              store.dispatch(actionStopLoad);
            });
        });
      } else {
        console.log('ERREUR TOO MUCH POST');
      }
      break;
    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default postsListMiddleware;
