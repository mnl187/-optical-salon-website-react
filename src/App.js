import React from 'react'
import AboutUs from './container/AboutUs/AboutUs';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';
import Gallery from './container/Gallery/Gallery';
import Header from './container/Header/Header';
import Intro from './container/Intro/Intro';
import Services from './container/Services/Services';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
