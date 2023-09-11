import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import Intro from './components/Intro/Intro';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';

function App() {
  return (
    <>
      <Intro/>
      <Nav/>
      <Carousel/>
      <PracticeAreas/>
      <Footer/>
    </>
  );
}

export default App;
