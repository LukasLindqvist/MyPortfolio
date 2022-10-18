import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Works from './Components/Works';
import Contact from './Components/Contact';
import './Components/App.css'

function App() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <About/>
    <Works/>
    <Contact/>
    </>
  )
}

export default App;
