// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './addPost.scss';


// == Composant
const AddPost = () => {

    return (
    <div className="Container">
        <div className="addPost">

        <h1 className="addPost-title">Que voulez vous ajouter ?</h1>

        <p className="addPost-desc">J'ai quelque chose à donner</p>
            <button className="addPost-don">DON</button>

        <p className="addPost-desc">Il y a quelque chose à récupérer dans la rue</p>
            <button className="addPost-tresor">TRÉSOR</button>

        <p className="addPost-desc">J'organise un événement</p>
            <button className="addPost-evenement">ÉVÉNEMENT</button>

        <p className="addPost-desc">Faire une demande d'aide</p>
            <button className="addPost-aide">AIDE</button>

        <a className="addPost-retour">retour</a>

      </div>
    </div>

);
    }

//PropTypes

AddPost.propTypes = {

};

// == Export
export default AddPost;