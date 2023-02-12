import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Intro, Services } from './src/container';
import { Navbar } from './src/components';
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
