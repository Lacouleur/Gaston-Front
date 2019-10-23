// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import : local

// == Composant
const PostsCard = ({ postdetails }) => {
  console.log(postdetails);
  const {
    title,
    description,
    picture,
    user,
    addressLabel,
    category,
  } = postdetails;
  console.log(category);
  return (
    <article className="tresor-cards">
      <div className="tresor-cards-left">
        <img
          className="tresor-cards-image"
          src={picture}
          alt={picture}
          className="tresor-cards-image"
        />
        <div className="tresor-cards-adress">{addressLabel}</div>
      </div>
      <div className="tresor-cards-right">
        <h2>{title}</h2>
        <h3>{user.id}</h3>
        <p>{description}</p>
        <div>
          <button className="button-category">{category.id}</button>
        </div>
        <div>
          <button className="button--vanish">Il n'y est plus </button>
          <button className="button--got-it">je l'ai récupéré</button>
        </div>
      </div>
    </article>
  );
};

PostsCard.propTypes = {
  postdetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    addressLabel: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    nbLikes: PropTypes.number.isRequired,
    // postStatus-> statut dispo/indispo
    postStatus: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    // visibility-> Visible des amis ou de tout le monde (system d'amis)
    visibility: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    // wearCondition-> état d'usure d'un trésor (genre a renover, neuf, fonctionnel)
    wearCondition: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

// == Export
export default PostsCard;
