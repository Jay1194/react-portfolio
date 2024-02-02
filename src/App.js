import React, { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
//import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio/portfolio';
import Resume from './components/Resume/resume';
import FrontEndProjects from './components/Portfolio/FrontEndProjects';
import BackEndProjects from './components/Portfolio/BackEndProjects';

function App() {
  const [activeComponent, setActiveComponent] = useState('Main');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Main':
        return <Main />;
      case 'About':
        return <About />;
        /*
      case 'Contact':
        return <ContactForm />;
        */
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'FrontEndProjects':
        return <FrontEndProjects />;
      case 'BackEndProjects':
        return <BackEndProjects />;
      default:
        return <Main />;
    }
  };

  return (
    <div>
      <Nav setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      <section>{renderComponent()}</section>
      <Footer />
    </div>
  );
}

export default App;
