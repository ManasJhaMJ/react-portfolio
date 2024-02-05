import React from 'react'
import './home.css'

function home() {
    return (
        <section id="home" class="reveal">
            <div class="home-img">
                <img alt="me" src="https://www.manasjha.me/images/landing.avif" />
            </div>
            <div class="home-text">
                <h1>I'm <span class="greentext">Manas Jha</span>, Web <span class="greentext">Developer</span> and <span
                    class="greentext"> designer.</span>
                </h1>
                <p>I am based in India. I design and Develop <span class="greentext">attractive</span> and <span
                    class="greentext">appealing</span> web
                    applications with a focus on <span class="greentext">user experience</span> and
                    <span class="greentext"> quality</span>.
                </p>
                <div class="cta-group">
                    <a aria-label="contact me button" href="./pages/contact.html"><button name="contact me"
                        class="button-1">Contact
                        Me</button></a>
                    <a aria-label="My work and projects" href="#projects"><button name="my work/projects"
                        class="button-2">My Work</button></a>
                </div>
            </div>
        </section>
    )
}

export default home;