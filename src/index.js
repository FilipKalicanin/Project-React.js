import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { LogIn } from './components/LogIn';
import { Home } from './components/Home.jsx';
import { Breeds } from './components/Breeds.jsx';
import { Search } from './components/Search.jsx';
import { Background, Navigacija, Rute, Ruta, StyledLink, StyledLogo } from './components/style';
import './index.css'

const App = ({ users }) => {

  const [dogs, setDogs] = useState([]); // opis i ime psa - Home
  const [images, setImages] = useState([]); // slika psa - Home
  const [breed, setBreed] = useState([]); // slika psa - Breed
  const [opis, setOpis] = useState([]); // rasa - Brees
  const [user, setUser] = useState(null); //Log-in user
  const [filter, setFilter] = useState('')

  return (
    <>
      <Background>
        <Router>
          {user ?
            <Navigacija>
              <nav>
                <StyledLogo>Dogs World</StyledLogo>
                <Rute>
                  <Ruta><StyledLink to="/login">LogIn</StyledLink></Ruta>
                  <Ruta><StyledLink to="/home">Home</StyledLink></Ruta>
                  <Ruta><StyledLink to="/breeds">Breeds</StyledLink></Ruta>
                  <Ruta><StyledLink to="/search">Search</StyledLink></Ruta>
                </Rute>
              </nav>
            </Navigacija>
            : <Redirect to='/login' />}

          <Switch>

            <Route exact path="/logIn">
              <LogIn setUser={setUser} users={users} />
            </Route>

            <Route exact path="/home">
              {user ? <Home dogs={dogs} setDogs={setDogs} images={images} setImages={setImages} /> : <Redirect to='/login' />}
            </Route>

            <Route exact path="/breeds">
              <Breeds breed={breed} setBreed={setBreed} opis={opis} setOpis={setOpis} />
            </Route>

            <Route exath path="/search">
              <Search breed={breed} setBreed={setBreed} opis={opis} setOpis={setOpis} filter={filter} setFilter={setFilter} />
            </Route>

          </Switch>


        </Router>
      </Background>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);