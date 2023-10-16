"use client"

import Image from "next/image";
import border from "../public/border.png";
import Typography from "@mui/material/Typography";
import AlternatingElements from "@/components/alternating_elements";
import NotePad from "@/components/notepad";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { colors } from "@mui/material";
import coffee from "../public/lzk_coffee.png"
import Header from "@/components/header";
import ProficienciesGrid from "@/components/proficiencies_grid";

export default function Page() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="custom-margin relative fill-screen">
        <Image
          src={border}
          alt=""
          width={300}
          height={300}
          className="absolute top-0 left-0"
        />

        <div className="fill-parent">
          <div>
            <Typography variant="h4" className="text-secondary" style={{fontSize:"2vw"}}>Hey there! I am</Typography>
            <Typography variant="h1" className="text-highlight" id="myName">
              Zhe Kai!
            </Typography>

            <div>
              <AlternatingElements />
              <div className="flex">
                <div className="text-secondary" id="fulltime">and a full time</div><div className="text-highlight" id="humanbeing">human being.</div>
              </div>
            </div>
            <div className="mb-5 mt-5 flex">
              <div className="mr-4">
              <Link href="/contactme" underline="none">
                <Button variant="contained" className="bg-secondary text-background" size="large" disableElevation startIcon={<EditNoteIcon />}>
                  Get in touch
                </Button>
              </Link>
              </div>
              <div className="flex mr-4">
              <Link href="#section0" underline="none" className="mr-4" onClick={handleScroll}>
              <Button variant="outlined" color="inherit" className="text-foreground" size="large" disableElevation startIcon={<ConnectWithoutContactIcon />}>
                  Find out more
                </Button>
              </Link>
              </div>
            </div>
          </div>
          
        </div>

        <Image
          src={border}
          alt=""
          width={300}
          height={300}
          className="rotate-180 absolute bottom-0 right-0"
        />
        <Image
          src={coffee}
          alt=""
          width={250}
          height={300}
          className="absolute top-0 right-0 coffee"
        />
      </div>
      <div className="bg-background" style={{height:'50px'}} id="section0"/>
      <div className="flex-container gradient-to-grey">
          <NotePad>Hello world, my name is Zhe Kai! I'm a penultimate-year student majoring in Computer Science 
            studying in the Renaissance Engineering Programme in NTU. <br/><br/>
            I'm also an aspiring Software Engineer and I honestly just love to build cool things that make a difference in other's lives. Thanks for dropping by!
          </NotePad>
      </div>
      <div className="bg-background2" style={{height:'50px'}}/>
      <div className="bg-background2 items-center" style={{paddingBottom:'50px'}}>
        <Header/>
        <ProficienciesGrid/>
      </div>
    </div>
  );
}``