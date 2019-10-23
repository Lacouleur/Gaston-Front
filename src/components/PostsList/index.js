// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './postsList.scss';
import PostsFilters from './PostsFilters';
import PostsCard from './PostsCard';

// == Composant
const PostsList = ({ postsLists, loading }) => {
  return (
    <>
      <PostsFilters />
      {loading && (
        <div className="loading">
          Recupération des Posts - Veuillez patienter
        </div>
      )}

      {!loading && (
        <div className="tresors-container">
          {postsLists.map((post) => (
            <PostsCard postdetails={post} key={post.id} />
          ))}
        </div>
      )}
    </>
  );
};

PostsList.propTypes = {
  postsLists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
// == Export
export default PostsList;
