// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './tresors.scss';
import PostsFilters from './PostsFilters'
import PostsCard from './PostsCard'

// == Composant
const PostsList = ({postsLists}) => {
  return (
  <>
    <PostsFilters />
    <div className="tresors-container">
      {postsLists.map(post =>
        <PostsCard postdetails={post} key={post.id} />)}
      </div>
  </>
)};

PostsList.propTypes = {
  postsLists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
// == Export
export default PostsList;
