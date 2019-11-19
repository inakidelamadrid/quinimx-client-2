//@format
import React from 'react'
import { Route, Switch } from 'react-router'
import './App.scss'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Container, Section } from 'react-bulma-components'
import Header from './components/Header'
import MatchWeekFormPage from './pages/MatchWeekFormPage'

function App() {
  return (
    <div className="App">
      <div className="QuinielaUI">
        <div className="App-body">
          <Container>
            <Switch>
              <Route exact path="/">
                <Header
                  header="Quiniela Acumulativa Liga MX"
                  subheader="Jornada 5"
                />
                <Section></Section>
              </Route>
              <Route path="/form">
                <MatchWeekFormPage />
              </Route>
            </Switch>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default App
