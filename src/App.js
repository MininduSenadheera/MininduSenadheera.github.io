import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Home />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Certificates />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
