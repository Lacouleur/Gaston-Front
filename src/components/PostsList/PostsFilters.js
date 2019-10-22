// == Import : npm
import React from 'react';

// == Import : local


// == Composant
const PostsFilters = () => (
    <div className="tresor-category-container">
      <p className="tresor-category-title">Filtres:</p>
      <div className="tresor-category-filter">
        <button className="button--don">dons</button>
        <button className="button--help">demande d'aide</button>
        <button className="button--event">évenement</button>
        <button className="button--treasure">récuperation</button>
      </div>
    </div>
);

// == Export
export default PostsFilters;
