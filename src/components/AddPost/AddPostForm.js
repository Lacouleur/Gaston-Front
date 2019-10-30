// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './addPostForm.scss';


// == Composant
const AddPostForm = () => {

    const style = 'don';
    const userName = 'Raton Généreux'

    return (
    <div className="addPostForm">
    <div className="addPostForm-cat">Don</div>
        <div className="addPostForm-user">
            <img src="public\petit-raton-laveur.jpg" alt="user avatar" className="addPostForm-user-avatar"/>
            
                <p className="addPostForm-user-username">{userName}</p>
                <div className="addPostForm-user-line"/>
           
        </div>

            <form action="" className="addPostForm-form">
                <p className="addPostForm-form-desc">titre de l'annonce</p>
                    <input type="text" className={`addPostForm-form-title--${style}`}/>
                <p className="addPostForm-form-desc">description</p>
                    <input type="text" className={`addPostForm-form-description--${style}`}/>
                <p className="addPostForm-form-desc">Adresse</p>
                    <input type="text" className={`addPostForm-form-adresse--${style}`}/>
                <p className="addPostForm-form-desc">Ajouter une image</p>
                    <input type="text" className={`addPostForm-form-addImage--${style} addImage1--${style}`}/>
                <button className="addPostForm-form-submit">Publier</button>
            </form>
            <a href="" className="addPostForm-retour">Retour</a>
    </div>

);
    }

//PropTypes

AddPostForm.propTypes = {

};

// == Export
export default AddPostForm;