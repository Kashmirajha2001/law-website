import React from 'react';
import Nav from './components/Navbar/Nav';
import Intro from './components/Intro/Intro';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import News from './components/News/News';
import Chat from './components/Chat/Chat';
import { Justice } from './components/Legal Justice/Justice';
import Professionals from './components/Professionals/Professionals';

function App() {
  return (
    <>
      <Intro/>
      <Nav/>
      <Chat/>
      <Carousel/>
      <Professionals/>
      <News/>
      <Justice/>
      <PracticeAreas/>
      <Footer/>
    </>
  );
}

export default App;
