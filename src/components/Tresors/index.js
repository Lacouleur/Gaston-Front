// == Import : npm
import React from 'react';

// == Import : local
import './tresors.scss';

// == Composant
const Tresors = () => (
  <>
    <div className="tresor-title"><p>
      Autour de vous : <button className="button--add">AJOUTER</button></p>
    </div>
    <div className="tresor-cards">
      <img
        src="public/Images/image1.jpg"
        alt="image1"
        className="tresor-image"
      />
      <div className="tresor-body">Je suis une carte</div>
    </div>
  </>
);

// == Export
export default Tresors;
