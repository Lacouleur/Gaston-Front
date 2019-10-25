// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

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
        <div className="sweet-loading">
          <div className="sweet-loading--center">
            <BeatLoader color={'#123abc'} loading={loading} />
          </div>
        </div>
      )}
      {!loading && (
        <article className="posts-container">
          {postsLists.map((post) => (
            <PostsCard postdetails={post} key={post.id} />
          ))}
        </article>
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
