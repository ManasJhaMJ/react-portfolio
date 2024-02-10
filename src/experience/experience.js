import React from 'react'
import './experience.css'

function experience() {
    return (
        <section id="experience">
            <h1>My Experience</h1>
            <div class="exp-container">
                <div class="exp reveal">
                    <div class="exp-date">
                        <p>Nov 2023 - Present</p>
                    </div>
                    <div class="card exp-content">
                        <div class="exp-head">
                            <span className="span">
                                <h3>Frontend Developer and Designer</h3>
                                <img alt="im" src="https://www.manasjha.me/images/tick.webp" />
                            </span>
                            <span class="greentext">BestUPay</span><br />
                            Noida, UP (remote)
                            <br /><br />
                        </div>
                        <span class="bullets">
                            <span>●</span>
                            <p>Worked on different frontend projects for clients according to their need and added my
                                creativity.</p>
                        </span>
                        <span class="bullets">
                            <span>●</span>
                            <p>Improved the frontend of BestUPay's website.</p>
                        </span>
                        <span class="bullets">
                            <span>●</span>
                            <p>Created UI designs for websites using Figma and Canva.</p>
                        </span>
                    </div>
                </div>
                <hr />
                <div class="exp reveal">
                    <div class="exp-date">
                        <p>Nov 2023 - Dec 2023</p>
                    </div>
                    <div class="card exp-content">
                        <div class="exp-head">
                            <span className="span">
                                <h3>Community Manager</h3>
                                <img alt="im" src="https://www.manasjha.me/images/tick.webp" />
                            </span>
                            <span class="greentext">The Crew</span><br />
                            Delhi, India (Hybrid)
                            <br /><br />
                        </div>
                        <span class="bullets">
                            <span>●</span>
                            <p>Created a discord server from scratch and added channels, roles and bots as required.</p>
                        </span>
                        <span class="bullets">
                            <span>●</span>
                            <p>Helped setup important messages like personalised welcome message and elevated server
                                engagement.</p>
                        </span>
                        <span class="bullets">
                            <span>●</span>
                            <p>Managed events by The Crew like Developer Augmentation Hackathon.</p>
                        </span>
                    </div>
                </div>
                <hr />
                <div class="exp reveal reset">
                    <div class="exp-date">
                        <p>Sep 2023 - Present</p>
                    </div>
                    <div class="card exp-content">
                        <div class="exp-head">
                            <span className="span">
                                <h3>Jr. Web Development Head</h3>
                                <img alt="im" src="https://www.manasjha.me/images/tick.webp" />
                            </span>
                            <span class="greentext">MRSDC</span><br />
                            MR, Faridabad, Haryana
                            <br /><br />
                        </div>
                        <span class="bullets">
                            <span>●</span>
                            <p>Volunteered & managed tech events conducted by MRSDC in our college. </p>
                        </span>
                        <span class="bullets">
                            <span>●</span>
                            <p>Built website for MRSDC and helped grow the community.</p>
                        </span>
                    </div>
                </div>
                <hr />
                <div class="exp reveal reset">
                    <div class="exp-date">
                        <p>Jan 2023 - Present</p>
                    </div>
                    <div class="card exp-content">
                        <div class="exp-head">
                            <span className='span'>
                                <h3>GDSC Volunteer</h3>
                                <img alt="im" src="https://www.manasjha.me/images/tick.webp" />
                            </span>
                            <span class="greentext">Google DSC</span><br />
                            MR, Faridabad, Haryana
                            <br /><br />
                        </div>
                        <span class="bullets">
                            <span>●</span>
                            <p>Helping in proper planning of workshops and events conducted by GDSC.</p>
                        </span>
                        <span class="bullets">
                            <span>●</span>
                            <p>Volunteered in managing tech events organised by GDSC.</p>
                        </span>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default experience;