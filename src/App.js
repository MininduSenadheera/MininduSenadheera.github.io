import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
// import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import ScrollToTop from 'react-scroll-to-top';

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
          <ScrollToTop smooth svgPath='M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606
	C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0
	c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80
	C261.465,190.251,261.465,199.749,255.606,205.606z' viewBox="0 0 330 330" color='blue'/>
        </div>
      </Router>
    </div>
  );
}

export default App;
