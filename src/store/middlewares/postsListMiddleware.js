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

// token : 63535622ff913a1c37312859b1be50666de3008e
/*
X 1 - On envoi la requete "SEARCH_REPOS" depuis le reducer InputSearch
X 2 - On fait une requête Axios dans le middleware
X 3 - On récupère la réponse d'axios dans le reducer results.js 
X  4- l'action getReposFromAxios définit un state
5- On recupère ce state dans le container de Results.js
6- on prend la props, et on l'utilise dans le component Results.js
7 - On envoi les Repo en OwnProps à Repo.js (et on map pour affiche)


*/

const postsListMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POSTS:
      // ici je vais réagir à FETCH_RECIPES (qui a été émise depuis componentDidMount dans App)
      axios
        .get(
          UrlDev,
          //UrlPost,
          { crossdomain: true },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          },
        )
        .then((response) => {
          console.log('succès', response.data);
          // je veux faire en sorte d'alimenter le state avec la réponse
          const receivePostsAction = receivePosts(response.data);
          store.dispatch(receivePostsAction);
        })
        .catch((error) => {
          console.error(error);
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
          console.log('succès', response.data);
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
