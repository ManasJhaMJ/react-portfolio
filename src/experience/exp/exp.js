import React from 'react'
import '../experience.css'

const exp = ({ props }) => {
    return (
        <div class="exp reveal">
            <div class="exp-date">
                <p>{props.date}</p>
            </div>
            <div class="card exp-content">
                <div class="exp-head">
                    <span className="span">
                        <h3>{props.title}</h3>
                        <img alt="im" src="https://www.manasjha.me/images/tick.webp" />
                    </span>
                    <span class="greentext">{props.company}</span><br />
                    {props.location}
                    <br /><br />
                </div>
                <span class="bullets">
                    <span>●</span>
                    <p>{props.desc}</p>
                </span>
            </div>
        </div>
    )
}

export default exp;