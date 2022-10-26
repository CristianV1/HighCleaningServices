import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Navbar from './components/features/Navbar/Navbar';
import AboutSection from './components/features/AboutSection/AboutSection';
import ServicesSection from "./components/features/ServicesSection/ServicesSection"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <ServicesSection/>
      <AboutSection/>
    </div>
  );
}

export default App;
