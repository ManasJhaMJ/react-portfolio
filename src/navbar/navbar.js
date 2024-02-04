import React from 'react'
import './navbar.css';


function navbar() {
    return (
        <>
            <nav>
                <div className="logo"><a aria-label="" href="./index.html"><img src="https://www.manasjha.me/images/profile-pic.gif"
                    alt="profile-pic" /></a> </div>
                <div className="links">
                    <div>
                        <a aria-label="About Me page" href="./pages/about.html">About Me</a>
                    </div>
                    <div>
                        <a aria-label="Experience" href="./pages/experience.html">Experience</a>
                    </div>
                    <div>
                        <a aria-label="contact me!" href="./pages/contact.html">Contact Me</a>
                    </div>
                </div>
                <div className="extras">
                    <div className="theme">
                    </div>
                    <div className="resume">
                        <a aria-label="Check out manas jha's resume" className="button-2"
                            href="https://www.manasjha.me/mjresume.pdf" rel='noreferrer' target="_blank">Resume</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar;