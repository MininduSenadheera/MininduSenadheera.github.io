import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Home />
          <Projects />
          <Certificates />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
