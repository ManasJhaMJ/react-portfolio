import React from 'react'
import './experience.css'
import Exp from './exp/exp'

const experience = ({ jsonData }) => {
    return (
        <section id="experience">
            <h1>My Experience</h1>
            <div class="exp-container">
                {jsonData.map((props, index) => (
                    <Exp key={index} props={props} />
                ))}
                <hr />
            </div>
        </section >

    )
}

export default experience;