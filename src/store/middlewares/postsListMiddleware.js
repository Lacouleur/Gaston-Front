import axios from 'axios';
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

  // console.log(store.getState());
  switch (action.type) {
    case FETCH_POSTS:
      // ici je vais réagir à FETCH_RECIPES (qui a été émise depuis componentDidMount dans App)
      axios
        .get(
          'http://backend.dumpsters.grxl.fr/api/posts',
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
          const receivePostsAction = receivePosts(response.data);
          store.dispatch(receivePostsAction);
        })
        .catch((error) => {
          // console.error(error);
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
    case FETCH_USERS:
      // ici je vais réagir à FETCH_RECIPES (qui a été émise depuis componentDidMount dans App)
      axios
        .get(
          'http://backend.dumpsters.grxl.fr/api/users',
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
          const receiveUsersAction = receiveUsers(response.data);
          store.dispatch(receiveUsersAction);
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
          'http://backend.dumpsters.grxl.fr/api/categories',
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
