import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

const NavBar = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image
            size="mini"
            src="/public/DumpsterLogoswhite.png"
            style={{ marginRight: '1.5em' }}
          />
          DumpSters
        </Menu.Item>
        <Menu.Item as="a"> Un menu en Haut</Menu.Item>
      </Container>
    </Menu>
  </div>
);

export default NavBar;
