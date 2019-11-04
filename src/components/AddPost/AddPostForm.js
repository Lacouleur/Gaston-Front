// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { addPostAction } from 'src/store/middlewares/addPostMiddleware';
import { connect } from 'react-redux';
// == Import : local
import AdressSearch from 'src/containers/AdressSearch';
import './addPostForm.scss';


// == Composant
class AddPostForm extends React.Component {

    submit = (values) => {
        console.log(values);
        const { addressLabel, lat, lng } = this.props;
        const latitude = { lat: parseFloat(lat) };
        const longitude = { lng: parseFloat(lng) };
        const allValues = { ...values, addressLabel, ...latitude, ...longitude };
        this.props.addPostAction(allValues, this.props.history);
        console.log('Value soumission:', allValues);
    };

    render() {

        const stylecss = "don";
        const userName = 'Raton Généreux';
        const { handleSubmit } = this.props;
        return (
            <div className="addPostForm">
                <div className="addPostForm-cat">Don</div>
                <div className="addPostForm-user">
                    <img src="/public/petit-raton-laveur.jpg" alt="user avatar" className="addPostForm-user-avatar" />

                    <p className="addPostForm-user-username">{userName}</p>
                    <div className="addPostForm-user-line" />

                </div>

                <form
                    className="addPostForm-form"
                    onSubmit={
                        handleSubmit(this.submit) /* handleSubmit comming from Redux-Form */
                    }
                >
                    <p className="addPostForm-form-desc">titre de l'annonce</p>
                    <Field
                        key="titleAddPost"
                        name="titleAddPost"
                        component="input"
                        placeholder="Titre de l'annonce"
                        type="text"
                        className={`addPostForm-form-title--${stylecss}`}
                    />



                    <p className="addPostForm-form-desc">description</p>
                    <Field
                        key="descAddPost"
                        name="descAddPost"
                        component="textarea"
                        placeholder="Description de l'annonce"
                        type="text"
                        className={`addPostForm-form-description--${stylecss}`}
                    />

                    <AdressSearch />

                    {/* 
                <p className="addPostForm-form-desc">Ajouter une image</p>
                <Field
                    key="titleAddPost"
                    name="titleAddPost"
                    component="input"
                    placeholder="Titre de l'annonce" 
                    type="text"
                    className={`addPostForm-form-title--${stylecss}`}
                    /> */}


                    <button className="addPostForm-form-submit" type="submit">Publier</button>
                </form>
                <NavLink to="/addPost" key="back" className="addPost-form-retour">
                    Retour
            </NavLink>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        addressLabel: state.adressSearch.queryInput,
        lat: state.adressSearch.lat,
        lng: state.adressSearch.lon,
    };
};

const reduxFormAddPost = reduxForm({
    form: 'addpost',
})(AddPostForm);

// Config Properties
// IMPORTANT: All of these configuration options may be passed into reduxForm() at "design time" or passed in as props to your component at runtime.

// Required
// form : String [required]     <----
// the name of your form and the key to where your form's state will be mounted under the redux-form reducer

export default connect(
    mapStateToProps,
    { addPostAction },
)(reduxFormAddPost);

// const reduxFormRegister = reduxForm({
//     form: 'register',
//   })(Register);
  
//   export default connect(
//     mapStateToProps,
//     { registerAction },
//   )(reduxFormRegister);
//PropTypes

AddPostForm.propTypes = {

};

