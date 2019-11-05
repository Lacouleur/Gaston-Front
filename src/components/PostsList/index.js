// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

// == Import : local
import './postsList.scss';
import PostsFilters from './PostsFilters';
import PostsCard from './PostsCard';

// == Composant

// const PostsList = ({ postsListsDetails, loading }) => {
class PostsList extends React.Component {
  componentDidMount() {
    // console.log("je suis ici");
    const { fetchPosts } = this.props;
    fetchPosts();
  }
  render() {
    const { loading,postsListsDetails } = this.props;
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
            {postsListsDetails.map((post) => (
              <PostsCard postdetails={post} key={post.id} />
            ))}
          </article>
        )}
      </>
    );
  }
}

PostsList.propTypes = {
  postsListsDetails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
// == Export
export default PostsList;
