import Image from "next/image";
import border from "../public/border.svg";
import Typography from "@mui/material/Typography";
import AlternatingElements from "@/components/alternating_elements";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { colors } from "@mui/material";

export default function Page() {
  var buttonStyle = {bgcolor:"#bd7039", color:"#C2C2C2"}

  return (
    <div>
      <div className="m-10 relative fill-screen">
        <Image
          src={border}
          alt=""
          width={300}
          height={300}
          className="absolute top-0 left-0"
        />

        <div className="fill-parent">
          <Typography variant="h5">Hello world, I am</Typography>
          <Typography variant="h1" className="text-highlight" id="myName">
            Zhe Kai!
          </Typography>

          <div>
            <AlternatingElements/>
            <div className="flex">
              <div className="text-secondary" id="fulltime">and a full time</div><div className="text-highlight" id="humanbeing">human being.</div>
            </div>
          </div>
          <div className="mb-5 mt-5">
          <Link href="/contactme" underline="none">
              <Button variant="contained" className="bg-secondary text-background" size="large" sx={buttonStyle} disableElevation startIcon={<ConnectWithoutContactIcon/>}>
                Get in touch
              </Button>
          </Link>
          </div>
        </div>

        <Image
          src={border}
          alt=""
          width={300}
          height={300}
          className="rotate-180 absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
