import React from 'react'
import './footer.css';

function footer() {
    return (
        <footer>
            <p> Manas Jha | ©2024</p>
            <div class="footer-socials">
                <a aria-label="link to social mail" href="mailto:jhamanas939@gmail.com" target="_blank" rel='noreferrer'><img alt="img"
                    src="https://www.manasjha.me/images/socials/email.png" /></a>
                <a aria-label="link to social linkedin" href="https://www.linkedin.com/in/notmanasjha/" target="_blank" rel='noreferrer'><img
                    alt="img" src="https://www.manasjha.me/images/socials/linkedin.png" /></a>
                <a aria-label="link to social github" href="https://github.com/ManasJhaMJ" target="_blank" rel='noreferrer'><img alt="img"
                    src="https://www.manasjha.me/images/socials/github.png" /></a>
                <a aria-label="link to social twitter" href="https://twitter.com/ManasJhaMJ" target="_blank" rel='noreferrer'><img
                    alt="img" src="https://www.manasjha.me/images/socials/twitter.png" /></a>
                <a aria-label="link to social discord" href="https://discord.com/users/916896085212033024"
                    target="_blank" rel='noreferrer'><img alt="img" src="https://www.manasjha.me/images/socials/discord.png" /></a>
            </div>
        </footer>
    )
}

export default footer;