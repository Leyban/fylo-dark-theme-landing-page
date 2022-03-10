import './App.css';
import './styles/css/fyloDark.css';
import { About } from './components/About';
import { EarlyAccess } from './components/EarlyAccess';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Introduction } from './components/Introduction';
import { Navbar } from './components/Navbar';
import { Testimonials } from './components/Testimonials';
import { image } from './images/image';

function App() {
  return (
    <div className="App">
      <div className="navbar-and-intro">
        <Navbar />
        <Introduction />
      </div>
      <div className="wave-effect">
        <img src={image.bgCurvyDesktop} alt="wavy background effect" className='desktop-wave'/>
        <img src={image.bgCurvyMobile} alt="wavy background effect" className='mobile-wave'/>
      </div>
      <div className="content">
        <Features />
        <About />
        <Testimonials />
        <EarlyAccess />
      </div>
      <Footer />
    </div>
  );
}

export default App;
