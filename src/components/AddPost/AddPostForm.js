// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import { registerAction } from 'src/store/middlewares/registerMiddleware';
import { connect } from 'react-redux';
// == Import : local
import './addPostForm.scss';


// == Composant
const AddPostForm = ({}) => {

    const stylecss = "don";
    const userName = 'Raton Généreux';

    return (
    <div className="addPostForm">
    <div className="addPostForm-cat">Don</div>
        <div className="addPostForm-user">
            <img src="/public/petit-raton-laveur.jpg" alt="user avatar" className="addPostForm-user-avatar"/>
            
                <p className="addPostForm-user-username">{userName}</p>
                <div className="addPostForm-user-line"/>
           
        </div>

            <form action="" className="addPostForm-form">
                <p className="addPostForm-form-desc">titre de l'annonce</p>
                    <input type="text" className={`addPostForm-form-title--${stylecss}`}/>
                    {/* <Field
                    key="titleAddPost"
                    name="titleAddPost"
                    component="input"
                    placeholder="Titre de l'annonce" 
                    type={field.type}
                    className="inscription-form-input"
                    /> */}



                <p className="addPostForm-form-desc">description</p>
                    <input type="text" className={`addPostForm-form-description--${stylecss}`}/>




                <p className="addPostForm-form-desc">Adresse</p>
                    <input type="text" className={`addPostForm-form-adresse--${stylecss}`}/>




                <p className="addPostForm-form-desc">Ajouter une image</p>
                    <input type="text" className={`addPostForm-form-addImage--${stylecss} addImage1--${stylecss}`}/>




                <button className="addPostForm-form-submit">Publier</button>
            </form>
            <NavLink to="/addPost" key="back" className="addPost-form-retour">
            Retour
            </NavLink>
    </div>

);
    }

//PropTypes

AddPostForm.propTypes = {

};

// == Export
export default AddPostForm;