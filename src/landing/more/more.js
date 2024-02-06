import React from 'react'
import './more.css'

function more() {
    return (
        <section id="des-dev" className="reveal">
            <div className="des-dev-text">
                <h2>Creative Design for High Quality Development.</h2>
                <p>
                    I oversee the entire product development journey, from crafting the interface to delivering a fully
                    functional application. I bring ideas to life, ensuring top-notch design and leveraging cutting-edge
                    software for a seamless user experience.
                </p>
            </div>
            <div className="container">
                <div className="container-col">
                    <img alt="1" src="https://www.manasjha.me/images/1.svg" />
                    <h3>Designing</h3>
                    <p>
                        I design beautiful user interfaces for applications to work on all screen sizes. Your colors,
                        typography and more, all pixel perfect and beautiful.
                    </p>
                </div>
                <div className="container-col">
                    <img alt="2" src="https://www.manasjha.me/images/2.svg" />
                    <h3>Development</h3>
                    <p>
                        I create functional, beautiful and responsive frontend applications for the web with modern
                        technologies and best practices.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default more;