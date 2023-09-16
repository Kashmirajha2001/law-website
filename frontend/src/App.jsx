import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import Intro from './components/Intro/Intro';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import News from './components/News/News';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <>
      <Intro/>
      <Nav/>
      <Chat/>
      <Carousel/>
      <News/>
      <PracticeAreas/>
      <Footer/>
      {/* <Login/> */}
      {/* <Chat/> */}
    </>
  );
}

export default App;
