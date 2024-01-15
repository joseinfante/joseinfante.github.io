import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/home';
import About from './components/About';
import Carousel from './components/project';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div>
        <NavBar></NavBar>
        <Home></Home>
            <div id="intro">
            <About></About>
            </div>
            <Carousel></Carousel>
            <Contact></Contact>
            <Footer></Footer>
    </div>
  );
}

export default App;
