import './App.css';
import React from 'react'

import { Routes, Route, HashRouter } from 'react-router-dom'
import { Container } from '@mui/material'

import PokeList from './components/PokeList.jsx';
import Nada from './components/Nada.jsx'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Detalles from './components/Detalles.jsx';

function App() {
  return (
    <div>
      <HashRouter>
      {/*<BrowserRouter>*/}
          <Container>
              <Routes>
                <Route index element = { <PokeList/>}/>
                <Route path='/' element = { <PokeList/>}/>
                <Route path='/about' element = { <About/>}/>
                <Route path='/contact' element = { <Contact/>}/>
                <Route path='/detalles/:id' element = { <Detalles/>}/>
                <Route path='*' element = { <Nada/>}/>
              </Routes>
          </Container>
      {/*</BrowserRouter>*/}
      </HashRouter>
    </div>
  );
}

export default App;
