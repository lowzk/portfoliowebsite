import { Job } from "./horizontal_scroll";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProficienciesBubble from "./proficiencies_bubble";
import NotePad from "./notepad";
import Image from "next/image";
import Link from "next/link";
import "./job_display.css"

interface JobDisplayProps {
    job: Job;
}

const FlippedJobDisplay = ({ job }: JobDisplayProps) => {
    const photograph = job.photograph;
    const logo = job.company_logo;
    const company = job.company;
    const job_title = job.job_title;
    const date = job.date;
    const write_up = job.write_up;
    const sentences = write_up.split('. ').map((sentence, index, array) => {
        if (index === array.length - 1 && sentence !== '') {
            return sentence;
        } else {
            return sentence.trim();
        }
    });
    const relevant_skills = job.relevant_skills;
    const color = job.color;
    const website_link = job.website_link;

    return (
        <div>
            <Grid container spacing={0}>
                {/* Relevant skills */}
                <Grid item xs={6} className="custom-padding">
                    <ProficienciesBubble prof_list={relevant_skills}
                        style={{ backgroundColor: color }}>Relevant Skills</ProficienciesBubble>
                </Grid>

                {/* Job title, company and date */}
                <Grid item xs={6} className="custom-padding">
                    <Grid container spacing={2}>
                        <Grid item xs={9} className="custom-padding">
                        <Link href={website_link} target="_blank">
                            <Typography className="header">{job_title}</Typography>
                            <Typography className="subheader">{company}</Typography>
                            <Typography className="subheader">{date}</Typography>
                        </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href={website_link} target="_blank">
                                <div style={{ height: "90%" }}>
                                    <Image
                                        src={logo}
                                        alt=""
                                        className="image-logo"
                                        priority
                                    />
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Photograph */}
                <Grid item xs={6} className="custom-padding">
                    <div className="writeup" style={{ backgroundColor: color }}>
                        <p className="writeup-header">What is it about?</p>
                        <ul>
                            {sentences.map((sentence, index) => (
                                <li key={index} style={{ marginBottom: '12px' }}>{sentence}</li>
                            ))}
                        </ul>
                    </div>
                </Grid>

                {/* Write up */}
                <Grid item xs={6} className="custom-padding">
                    <Link href={website_link} target="_blank">
                        <Image
                            src={photograph}
                            alt=""
                            className="image"
                            priority
                        />
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default FlippedJobDisplay;