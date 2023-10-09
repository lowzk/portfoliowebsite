import HorizontalScroll from "@/components/horizontal_scroll";
import Typography from "@mui/material/Typography";
import "./portfolio.css"

export default function Page() {

  return (
    <div>
      <div style={{height:"5vh"}}></div>
      
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography className="header1">Professional experience</Typography>
        <HorizontalScroll />
      </div>
    </div>);
}