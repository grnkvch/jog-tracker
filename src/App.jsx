import React from 'react'
import './App.css'
import 'assets/fonts/fonts.css'
import { Header } from 'components'
import { Switch, Route, Redirect } from 'react-router-dom'
import {
  Login, Jogs, Info, CreateJoga,
} from 'pages'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/jogs" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/jogs">
            <Jogs />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/create_joga">
            <CreateJoga />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
