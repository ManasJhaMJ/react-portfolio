import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar/navbar';
import Landing from './landing/Landing';
import Footer from './footer/footer';
import Experience from './experience/experience';

function App() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch('/experience.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching data: ', error));
  });

  return (
    <>
      <Navbar />
      <Landing />
      <Experience jsondata={jsonData} />
      <Footer />
    </>
  );
}

export default App;
