// == Import : npm
import React from 'react';

// == Import : local
import './tresors.scss';
import TresorsFilter from './TresorsFilter'
import TresorCard from './TresorCard'

// == Composant
const TresorsList = () => (
  <>
    <TresorsFilter />
    <div className="tresors-container">
    <TresorCard />
      </div>
  </>
);
// == Export
export default TresorsList;
