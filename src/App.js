//@format
import React from 'react'
import { Route, Switch } from 'react-router'
import './styles/globals.scss'
import Container from './components/Container'
import CurrentMatchWeekPage from './pages/CurrentMatchWeekPage'
import MatchWeekFormPage from './pages/MatchWeekFormPage'

function App() {
  return (
    <div className="App">
      <div className="QuinielaUI">
        <div className="App-body">
          <Container>
            <Switch>
              <Route exact path="/">
                <div>root</div>
              </Route>
              <Route path="/form">
                <MatchWeekFormPage />
              </Route>
              <Route path="/quiniela/jornada/actual">
                <CurrentMatchWeekPage />
              </Route>
            </Switch>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default App
