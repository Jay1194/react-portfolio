
import React, { useState } from 'react'
import './App.css';
import Main from './components/Main'
import Nav from './components/Nav'
import About from './components/About'
import Footer from './components/Footer'
import ContactForm from "./components/Contact"

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <section>
      {!contactSelected ? (
          <>
      <Main/>
      <About/>
      <Footer/>
      </>
     ) : (
        <ContactForm setContactSelected={setContactSelected} />
        )}
      </section>
    </div>
  );
}

export default App;
