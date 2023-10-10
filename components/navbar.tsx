import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "@mui/material/Link";
import AppsIcon from '@mui/icons-material/Apps';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PortraitIcon from '@mui/icons-material/Portrait';
import "./navbar.css";

function NavBar() {
  var buttonStyle = {bgcolor:"transparent", color:"#C2C2C2"}

  return (
    <AppBar position="static" sx={{bgcolor:"#2F2F2F", color:"#C2C2C2"}}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={1.5} />
          <Grid item xs={1.5}>
            <Link href="/" className="flex items-center">
              <Image
                src="/../public/navbar_icon.png"
                alt="Coffee Logo"
                width={180}
                height={50}
                className="logo"
              />
            </Link>
          </Grid>
          <Grid item xs={0.75} />
          <Grid item xs={1.5} style={{ textAlign: "center" }}>
            <Link href="/" underline="none">
              <Button variant="contained" sx={buttonStyle} size="large" disableElevation endIcon={<PortraitIcon/>}>
                About Me
              </Button>
            </Link>
          </Grid>
          <Grid item xs={1.5} style={{ textAlign: "center" }}>
            <Link href="/portfolio" underline="none">
              <Button variant="contained" sx={buttonStyle} size="large" disableElevation endIcon={<AppsIcon/>}>
                Portfolio
              </Button>
            </Link>
          </Grid>
          <Grid item xs={1.5} style={{ textAlign: "center" }}>
            <Link href="/contactme" underline="none">
              <Button variant="contained" sx={buttonStyle} size="large" disableElevation endIcon={<PermContactCalendarIcon/>}>
                Contact
              </Button>
            </Link>
          </Grid>
          <Grid item xs={0.75} />
          <Grid item xs={1} style={{ textAlign: "center" }}>
              <Link href="https://drive.google.com/file/d/1DIbU_8MMOvW1jC_e-144q4vVKr6SxHtc/view?usp=sharing" target="_blank" underline="none">
                <Button variant="outlined" className="resume" size="large" disableElevation>
                  Resume
                </Button>
            </Link>
          </Grid>
          <Grid item xs={1.5} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
