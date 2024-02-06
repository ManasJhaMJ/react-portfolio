import React from 'react'
import './skills.css'
import Skill from './skill/skill';

const skills = ({ jsonData }) => {
    return (
        <section id="skills" className="reveal reset">
            <h1>Skills</h1>
            <hr />
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="skills-bg glassmorphic-card">
                {jsonData.map((alts, index) => (
                    <Skill key={index} data={alts} />
                ))}
            </div>
        </section>
    );
};

export default skills;