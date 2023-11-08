import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomeSection from './components/HomeSection/HomeSection';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutMe />
      <Projects />

    </div>
  );
}

export default App;
