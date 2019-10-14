//@format
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Container, Section} from 'react-bulma-components';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="QuinielaUI">
        <div className="App-body">
          <Container>
            <Header
              header="Quiniela Acumulativa Liga MX"
              subheader="Jornada 5"
            />
            <Section></Section>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
