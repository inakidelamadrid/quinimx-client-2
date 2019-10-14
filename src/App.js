//@format
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Container, Section, Hero, Heading} from 'react-bulma-components';

function App() {
  return (
    <div className="App">
      <div className="QuinielaUI">
        <div className="App-body">
          <Container>
            <Section>
              <Hero color="primary">
                <Hero.Body>
                  <Container>
                    <Heading>Quiniela Acumulativa Liga MX</Heading>
                    <Heading subtitle size={3}>
                      Jornada 5
                    </Heading>
                  </Container>
                </Hero.Body>
              </Hero>
            </Section>
            <Section></Section>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
