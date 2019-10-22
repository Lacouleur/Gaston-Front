// == Import : npm
import React from 'react';

// == Import : local
import './logs.scss';
import Forgot from './Forgot';
import Inscription from './Inscription';
import Login from './Login';
import Welcome from './Welcome';

// == Composant
class Logs extends React.Component {
  state = {}

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

    
render () {

  const view = 'inscription'

    return (
  <div className="logs">
    {view === 'welcome' && <Welcome />}
    {view === 'login' &&<Login />}
    {view === 'inscription' &&<Inscription />}
    {view === 'forgot' &&<Forgot />}
  </div>
);
    }
 }

// == Export
export default Logs;
