// == Import : npm
import React from 'react';

// == Import : local
import { Container, Header, Image } from 'semantic-ui-react';
// == Composant
const Map = () => (
  <Container text style={{ marginTop: '7em' }}>
    <Header as="h1">JE SUIS LA CARTE</Header>
    <p>This is a basic fixed menu template using fixed size containers.</p>
    <p>
      A text container is used for the main container, which is useful for
      single column layouts.
    </p>
  </Container>
);

// == Export
export default Map;
