import React from 'react'
import '../projects.css'

const project = ({ props }) => {
    return (
        <div class="card-big glassmorphic-card-mobile reveal reset">
            <img src={props.src} alt={props.id} />
            <div class="skill-container">
                {props.tags.map((tag, i) => (
                    <p key={i}>{tag}</p>
                ))}
            </div>
        </div>
    )
}

export default project