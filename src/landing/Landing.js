import React, { useState, useEffect } from 'react';
import './landing.css'
import Home from './home/home';
import More from './more/more';
import Skills from './skills/skills';
import Projects from './projects/projects';

function Landing() {
    const [jsonData0, setJsonData0] = useState([]);
    const [jsonData1, setJsonData1] = useState([]);

    useEffect(() => {
        fetch('/skills.json')
            .then((response) => response.json())
            .then((data) => setJsonData0(data))
            .catch((error) => console.error('Error fetching data: ', error));
    }, []);

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => setJsonData1(data))
            .catch((error) => console.error('Error fetching data: ', error));
    }, []);
    return (
        <>
            <Home />
            <More />
            <Skills jsonData={jsonData0} />
            <Projects jsonData={jsonData1} />
        </>
    )
}

export default Landing;