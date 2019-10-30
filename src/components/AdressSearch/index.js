import React from 'react';

import Suggestions from 'src/components/AdressSearch/Suggestions';
import './adressSearch.scss';
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react';

class SearchAdress extends React.Component {
  componentDidMount() {
    //     const { updateQuery,loading, results } = this.props;
    // console.log(updateQuery);
    // console.log(this.props);
    //1 faire un requete recherche avec le contenu de queryInput
  }

  render() {
    const { queryInput, loading, results } = this.props;

    const handleInputChange = (event) => {
      const { changeQuery } = this.props;
      // this.setState({
      //   query: this.search.value,
      // });
      let currentQuery = event.target.value;
      changeQuery(currentQuery);
      // fetchQuery();
    };

    return (
      <div classeName="adress-search">
        <label>Adresse Pour vous Geolocaliser</label>
        <input
          classeName="adress-search-input"
          name=""
          data-placeholder=" "
          multiple
          placeholder="Adresse?"
          ref={(queryInput) => queryInput}
          onChange={handleInputChange}
        />
        <ul>
          {results.map((result) => (
            <li key={result.properties.label.id}>{result.properties.label}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchAdress;
