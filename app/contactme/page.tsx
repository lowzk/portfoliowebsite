"use client"
import ContactForm from "@/components/contact_form";
import Typography from "@mui/material/Typography";
import "./contactme.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Page() {
  return (
    <div className='fill-screen flex flex-col justify-center items-center'>
      <div>
        <Typography className="text-center header">
          Let's get in touch!
        </Typography>
        <Typography className="text-center subheader">
          Drop me an email or take a look at my socials. <br/>Always happy to connect, thanks for visiting!
        </Typography>
      </div>
      <div>
      <a href="https://www.linkedin.com/in/lowzhekai/" target="_blank" rel="noreferrer">
                    <LinkedInIcon className="footerIcon2" />
                </a>
                <a href="https://github.com/lowzk" target="_blank" rel="noreferrer">
                    <GitHubIcon className="footerIcon2" />
                </a>
                <a href="mailto:lowzhekai69@gmail.com" target="_blank" rel="noreferrer">
                    <AttachEmailIcon className="footerIcon2" />
                </a>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  )
}