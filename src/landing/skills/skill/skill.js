import React from 'react'
import '../skills.css'

const skill = ({ data }) => {
    return (
        <div className="card glassmorphic-card-mobile reveal reset">
            <img src={data.src} alt={data.alt} />
        </div>
    );
};

export default skill;