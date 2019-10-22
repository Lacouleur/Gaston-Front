// == Import : npm
import React from 'react';

// == Import : local

// == Composant
const PostsCard = () => (
  <article className="tresor-cards">
    <div className="tresor-cards-left">
      <img
        className="tresor-cards-image"
        src="public/Images/image1.jpg"
        alt="image1"
        className="tresor-cards-image"
      />
      <div className="tresor-cards-adress">441 rue DEjean,Amiens</div>
    </div>
    <div className="tresor-cards-right">
      <h2>Myths About DUMPSTER</h2>
      <h3>Matt Ador</h3>
      <p>
        Description : dolor sit amet consectetur, adipisicing elit. Aspernatur
      </p>
      <div>
        <button className="button-category">Meuble</button>
        <button className="button-category">Nourriture</button>
      </div>
      <div>
        <button className="button--vanish">Il n'y est plus </button>
        <button className="button--got-it">je l'ai récupéré</button>
      </div>
    </div>
  </article>
);
// == Export
export default PostsCard;
