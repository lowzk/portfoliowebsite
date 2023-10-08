import Typography from "@mui/material/Typography";
import './header.css'

function Header() {
    return (
    <div style={{textAlign: "center"}}>
      <Typography variant="h1" className="header">
        My <span className="underline text-highlight">proficiencies</span> at a glance
      </Typography>
      <Typography variant="subtitle1" className="subheader vertical-padding">
        A short description, to be filled in later
      </Typography>
    </div>)
}

export default Header;