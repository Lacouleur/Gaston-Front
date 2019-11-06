const props = ['id', 'distance'];

export const filterPostList = (fetchedPosts, postsInState) => {
  if (!fetchedPosts.hasOwnProperty('fail')) {
    return fetchedPosts
      .filter(function(o1) {
        return !postsInState.some(function(o2) {
          return o1.id !== o2.id;
        });
      })
      .map(function(o) {
        return props.reduce(function(newo, distance) {
          newo[distance] = o[distance];
          return newo;
        }, {});
      });
  } else {
    return [];
  }
};

export const distanceConverter = (distance) => {
  console.log('Je suis la distance', distance);
  //   if (!fetchedPosts.hasOwnProperty('fail')) {
  //     return fetchedPosts
  //       .filter(function(o1) {
  //         return !postsInState.some(function(o2) {
  //           return o1.id !== o2.id;
  //         });
  //       })
  //       .map(function(o) {
  //         return props.reduce(function(newo, distance) {
  //           newo[distance] = o[distance];
  //           return newo;
  //         }, {});
  //       });
  //   } else {
  //     return [];
  //   }
};
