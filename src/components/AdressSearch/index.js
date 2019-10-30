import React from 'react';

import Suggestions from 'src/components/AdressSearch/Suggestions';
import './adressSearch.scss';
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react';

class SearchAdress extends React.Component {
  render() {
    const { queryInput, loading, results, isSelected } = this.props;
    // console.log('je suis le queryInput', queryInput);
    const handleInputChange = (event) => {
      const {
        changeQuery,
        handleFetchQuery,
        HandeChangeSelectedAdress,
      } = this.props;
      // this.setState({
      //   query: this.search.value,
      // });
      HandeChangeSelectedAdress();
      let currentQuery = event.target.value;
      handleFetchQuery(currentQuery);
      changeQuery(currentQuery);
    };
    const HandleClickAdress = (event) => {
      const { changeAdress } = this.props;
      // console.log('je suis le click', event.target.name);
      let lon = event.target.dataset.lon;
      let lat = event.target.dataset.lat;
      let adress = event.target.dataset.adress;

      changeAdress(adress, lat, lon);
    };
    // console.log('selectionner ou pas ?', isSelected);
    return (
      <div className="adress-search">
        <label>Adresse Pour vous Geolocaliser</label>
        <input
          className="adress-search-input"
          name=""
          value={queryInput}
          data-placeholder=" "
          multiple
          placeholder="Adresse?"
          // ref={(queryInput) => queryInput}
          onChange={handleInputChange}
        />
        {!isSelected && (
          <ul>
            {results.map((result) => (
              <li
                key={result.properties.id}
                onClick={HandleClickAdress}
                data-adress={result.properties.label}
                data-lat={result.properties.x}
                data-lon={result.properties.y}
              >
                {result.properties.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default SearchAdress;

{
  /* <li onClick={HandleClickAdress} key={result.properties.label.id}>
  {result.properties.label}
</li>; */
}

{
  /* <li
              onClick={HandleClickAdress}
              data-lat={result.properties.label.x}
              data-lon={result.properties.label.y}
              key={result.properties.label.id}
            >
              {result.properties.label}
            </li> */
}

{
  /* // geometry: {type: "Point", coordinates: Array(2)}
// properties:
// city: "Annecy"
// citycode: "74010"
// context: "74, Haute-Savoie, Auvergne-Rhône-Alpes"
// housenumber: "4"
// id: "74010_0430_00004"
// importance: 0.7709726565990154
// label: "4 Rue Carnot 74000 Annecy"
// name: "4 Rue Carnot"
// oldcity: "Cran-Gevrier"
// oldcitycode: "74093"
// postcode: "74000"
// score: 0.8882702415090014
// street: "Rue Carnot"
// type: "housenumber"
// x: 941624.2
// y: 6537408.44
// __proto__: Object
// type: "Feature" */
}
