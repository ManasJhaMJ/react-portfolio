import React from 'react'
import './home.css'

function home() {
    return (
        <section id="home" className="reveal">
            <div className="home-img">
                <img alt="me" src="https://www.manasjha.me/images/landing.avif" />
            </div>
            <div className="home-text">
                <h1>I'm <span className="greentext">Manas Jha</span>, Web <span className="greentext">Developer</span> and <span
                    className="greentext"> designer.</span>
                </h1>
                <p>I am based in India. I design and Develop <span className="greentext">attractive</span> and <span
                    className="greentext">appealing</span> web
                    applications with a focus on <span className="greentext">user experience</span> and
                    <span className="greentext"> quality</span>.
                </p>
                <div className="cta-group">
                    <a aria-label="contact me button" href="./pages/contact.html"><button name="contact me"
                        className="button-1">Contact
                        Me</button></a>
                    <a aria-label="My work and projects" href="#projects"><button name="my work/projects"
                        className="button-2">My Work</button></a>
                </div>
            </div>
        </section>
    )
}

export default home;