import React from 'react'
import './experience.css'
import Exp from './exp/exp'

const experience = ({ jsondata }) => {
    return (
        <section id="experience">
            <h1>My Experience</h1>function
            <div class="exp-container">
                {jsondata.map((props, index) => (
                    <Exp key={index} props={props} />
                ))}
                <hr />
            </div>
        </section >

    )
}

export default experience;