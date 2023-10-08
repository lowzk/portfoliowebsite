import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "@mui/material/Link";
import AppsIcon from '@mui/icons-material/Apps';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PortraitIcon from '@mui/icons-material/Portrait';

function NavBar() {
  var buttonStyle = {bgcolor:"transparent", color:"#C2C2C2"}

  return (
    <AppBar position="static" sx={{bgcolor:"#2F2F2F", color:"#C2C2C2"}}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <Link href="/" className="flex items-center">
              <Image
                src="/../public/lowzhekai.png"
                alt="Coffee Logo"
                height={50}
                width={50}
                id="logo"
              />
            </Link>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={1.5} style={{ textAlign: "center" }}>
          </Grid>
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
          <Grid item xs={1} style={{ textAlign: "center" }}>
            <h1>Settings Placeholder</h1>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
