import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
// import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Home />
          <About />
          {/* <Skills /> */}
          <Services />
          <Projects />
          <Certificates />
        </div>
      </Router>
      <FloatingWhatsApp
        avatar='/images/ProfilePic.png'
        accountName='Minindu Senadheera'
        phoneNumber='+94767041198'
        allowClickAway allowEsc
      />
    </div>
  );
}

export default App;
