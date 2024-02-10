import './App.css';
import React from 'react'
import Navbar from './navbar/navbar';
import Landing from './landing/Landing';
import Footer from './footer/footer';
import Experience from './experience/experience';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
