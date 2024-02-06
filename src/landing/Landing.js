import React, { useState, useEffect } from 'react';
import './landing.css'
import Home from './home/home';
import More from './more/more';
import Skills from './skills/skills';

function Landing() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch('/skills.json')
            .then((response) => response.json())
            .then((data) => setJsonData(data))
            .catch((error) => console.error('Error fetching data: ', error));
    }, []);
    return (
        <>
            <Home />
            <More />
            <Skills jsonData={jsonData} />
        </>
    )
}

export default Landing;