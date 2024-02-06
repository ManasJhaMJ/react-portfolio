import React from 'react'
import './projects.css'
import Project from './project/project';

const projects = ({ jsonData }) => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <hr />
            <p>Here are a few projects I've been working on recently:</p>
            <div className="projects reveal">
                {jsonData.map((props, index) => (
                    <Project key={index} props={props} />
                ))}
            </div>
        </section>
    )
}

export default projects;