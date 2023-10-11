import Typography from "@mui/material/Typography";
import './header.css'

function Header() {
    return (
    <div style={{textAlign: "center", marginLeft:"20vw", marginRight:"20vw"}}>
      <Typography variant="h1" className="header">
        My <span className="underline text-highlight">proficiencies</span> at a glance
      </Typography>
      <Typography variant="subtitle1" className="subheader vertical-padding">
        These are some skills that I have gained from past internships, school, online courses and personal projects. Of course, learning never stops (especially in CS), so hopefully this list will continue to grow over time!
      </Typography>
    </div>)
}

export default Header;