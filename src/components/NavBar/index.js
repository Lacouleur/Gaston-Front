// // Import Local NPM
// import React from 'react';

// // Import Local
// import './navbar.scss';
// const NavBar = () => (
//   <nav className="navbar">
//     <img
//       className="navbar-logo"
//       src="public\DumpsterLogoswhite.png"
//       alt="Logo Gaston Racoon white"
//     ></img>
//     <button>Ajouter une annonce</button>
//     <p>
//       <img 
//       className="navbar-profile"
//       src="public\petit-raton-laveur.jpg"
//       alt="image profile"
//       ></img> 
//     </p>
  
//   </nav>
// );

// export default NavBar;

// Import Local NPM
import React from 'react';

// Import Local
import './navbar.scss';

//  Composant
const NavBar = ({changeView}) =>  {

  
  const clickHandler = changeView('addPost');

  return (
    <nav className="navbar">
    <img className="navbar-logo" src="public\DumpsterLogoswhite.png" alt="Logo Gaston Racoon white"></img>
    <button className= "button-post" onClick={clickHandler} type="button">Ajouter une annonce</button>
    <p>
      <img 
      className="navbar-profile"
      src="public\petit-raton-laveur.jpg"
      alt="image profile"
      ></img> 
    </p>
    

  </nav>
);

}

export default NavBar;


// // // Import Local NPM
// // import React from 'react';

// // // Import Local
// // import './navbar.scss';
// // const NavBar = ({changeView}) => ( // avec ( on a un retrun() implicite, pour écrire une constante il faut {   return (Ton JSX)}
  
// //   <div className="navbar">
// //     <button>Ajouter une annonce</button>
// //     <img className="NavBar-logo" src="public\DumpsterLogoswhite.png" alt="Logo Gaston Racoon white"></img>
// //   </div>
// //  clas);

// // export default NavBar;



// // //const changeHandler = changeView('addPost');
