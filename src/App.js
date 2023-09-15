
import React, { Component } from 'react'
import './App.css';
import Main from './components/Main'
import Nav from './components/Nav'
import About from './components/About'
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
