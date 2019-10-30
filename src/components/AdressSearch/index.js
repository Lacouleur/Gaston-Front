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
          name="adressSearch"
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
                data-lon={result.geometry.coordinates[0]}
                data-lat={result.geometry.coordinates[1]}
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
