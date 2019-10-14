import React from 'react';
import {Container, Section, Hero, Heading} from 'react-bulma-components';

const Header = ({header, subheader, color = 'primary'}) => {
  return (
    <Section>
      <Hero color={color}>
        <Hero.Body>
          <Container>
            <Heading>{header}</Heading>
            <Heading subtitle size={3}>
              {subheader}
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
    </Section>
  );
};
export default Header
