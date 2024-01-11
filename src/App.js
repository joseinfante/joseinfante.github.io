import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/home';
import About from './components/About';
import Carousel from './components/project';
import Footer from './components/Footer';


function App() {
  return (
    <div>
        <NavBar></NavBar>
        <Home></Home>
            <div id="intro">
            <About></About>
            </div>
            <Carousel></Carousel>
            <Footer></Footer>
    </div>
  );
}

export default App;
