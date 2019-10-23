import axios from 'axios';

import { FETCH_POSTS, stopLoadPosts, receivePosts } from './reducer';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POSTS:
      // ici je vais réagir à FETCH_RECIPES (qui a été émise depuis componentDidMount dans App)
      axios
        .get(
          '//alexis-le-trionnaire.vpnuser.lan/projet-Dumpsters/website-skeleton/public/api/posts',{ crossdomain: true },
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
        // .catch((error) => {
        //   console.error("nope marche pas");
        //   console.error(error);
        // })
        .finally(() => {
          // dans tous les cas j'arrête de considérer qu'on charge
          const stopLoadAction = stopLoadPosts();
          store.dispatch(stopLoadAction);
        });
      // dans un switch on stoppe l'execution du switch à la fin de chaque case à l'aide de l'instruction break
      // l'instruction break permet de sortir du switch (fonctionne également dans un for, while)
      // on peut noter l'absence de break dans le reducer
      // parce qu'il y a un return dans chaque case, return est l'instruction qui stoppe l'execution d'une fonction
      break;
    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default ajaxMiddleware;
