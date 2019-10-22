// == Import : npm
import React from 'react';

// == Import : local
import './tresors.scss';
import PostsFilters from './PostsFilters'
import PostsCard from './PostsCard'

// == Composant
const PostsList = () => (
  <>
    <PostsFilters />
    <div className="tresors-container">
    <PostsCard />
      </div>
  </>
);
// == Export
export default PostsList;
