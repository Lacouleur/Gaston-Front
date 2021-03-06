// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
// == Import : local
import { _dev_URL } from 'src/Utils/_dev_URL.js';
import { distanceConverter } from 'src/Utils/distancesConverter';
// == Composant
const PostsCard = ({ postdetails }) => {
  // console.log(postdetails);
  const {
    title,
    description,
    picture,
    user,
    addressLabel,
    category,
    distance,
  } = postdetails;

  return (
    <article className="posts-cards">
      <div className="posts-cards-left">
        <img
          className="posts-cards-image"
          src={_dev_URL + picture}
          alt={picture}
          className="posts-cards-image"
        />
        <div className="posts-cards-adress">
          <p>
            <FaMapMarkerAlt />
            {distanceConverter(distance)}m
          </p>
        </div>
      </div>
      <div className="posts-cards-right">
        <header>
          <h1>{title}</h1>
          <h3>{user.username}</h3>
          <p>{description}</p>
        </header>
        <div>
          <button className="button-category">Dons</button>
        </div>
        <div className="posts-cards-status">
          <button className="button--vanish">Il n'y est plus </button>
          <button className="button--got-it">je l'ai récupéré</button>
        </div>
      </div>
    </article>
  );
};

// PostsCard.propTypes = {
//   postdetails: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
//     addressLabel: PropTypes.string.isRequired,
//     category: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//     createdAt: PropTypes.string.isRequired,
//     lat: PropTypes.number.isRequired,
//     lng: PropTypes.number.isRequired,
//     nbLikes: PropTypes.number.isRequired,
//     // postStatus-> statut dispo/indispo
//     postStatus: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//     user: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//     // visibility-> Visible des amis ou de tout le monde (system d'amis)
//     visibility: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//     // wearCondition-> état d'usure d'un trésor (genre a renover, neuf, fonctionnel)
//     wearCondition: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   }),
// };

// == Export
export default PostsCard;
