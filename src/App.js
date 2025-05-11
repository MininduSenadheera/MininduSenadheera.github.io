import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
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
          <Services />
          <Projects />
          <Certificates />
        </div>
      </Router>
      <FloatingWhatsApp
        avatar='/images/ProfilePic.png'
        accountName='Minindu Senadheera'
        phoneNumber='+94767041198'
        statusMessage='Online'
        chatMessage='Hello! How can I help you?'
        placeholder=''
        allowClickAway allowEsc
      />
    </div>
  );
}

export default App;
