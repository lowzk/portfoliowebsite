'use client';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import './footer.css'

function Footer() {
    return (
        <div>
            <footer className="footerContainer">
                <p className="footerText">Low Zhe Kai © 2023 All Right Reserved</p>
                <a href="https://www.linkedin.com/in/lowzhekai/" target="_blank" rel="noreferrer">
                    <LinkedInIcon className="footerIcon" />
                </a>
                <a href="https://github.com/lowzk" target="_blank" rel="noreferrer">
                    <GitHubIcon className="footerIcon" />
                </a>
                <a href="mailto:lowzhekai69@gmail.com" target="_blank" rel="noreferrer">
                    <AttachEmailIcon className="footerIcon" />
                </a>

            </footer>
        </div>)
}

export default Footer;
