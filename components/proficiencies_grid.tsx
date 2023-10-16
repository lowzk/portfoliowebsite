import Grid from "@mui/material/Grid";
import ProficienciesBubble from "./proficiencies_bubble";
import './proficiencies.css'

function ProficienciesGrid() {
    var languages = ["Python", "Javascript", "Typescript", "SQL", "HTML/CSS", "Java", "C/C++"]
    var frontend = ["Next.js", "React.js",  "Tailwind", "Material-UI", "Bootstrap"]
    var backend = ["PostgreSQL", "Firebase", "Node.js", "Express.js", "FastAPI", "Next.js", "Postman"]
    var data_analytics = ["Langchain", "OpenAI", "scikit-learn", "pandas", "NumPy", "Matplotlib", "librosa", "spacy", "pytesseract"]
    var devops = ["Microsoft Azure", "Docker", "Git", "Github", "Gitlab", "Heroku"]
    var others = ["Statistics", "English", "Mandarin", "Electic Guitar", "Piano", "Drums", "Singing", "Brewing coffee", "Badminton", "Photography"]
    return (
        <div>
        <Grid container spacing={2} className="proficiency-grid">
            <Grid item xs={6} className="grid-padding">
            <ProficienciesBubble prof_list={languages}>Programming Languages</ProficienciesBubble>
            </Grid>
            <Grid item xs={6} className="grid-padding">
            <ProficienciesBubble prof_list={frontend}>Frontend Development</ProficienciesBubble>
            </Grid>
            <Grid item xs={6} className="grid-padding">
            <ProficienciesBubble prof_list={backend}>Backend Development</ProficienciesBubble>
            </Grid>
            <Grid item xs={6} className="grid-padding">
            <ProficienciesBubble prof_list={data_analytics}>Data Analytics and Machine Learning</ProficienciesBubble>
            </Grid>
            <Grid item xs={6} className="grid-padding">
            <ProficienciesBubble prof_list={devops}>Development & Operations</ProficienciesBubble>
            </Grid>
            <Grid item xs={6} className="grid-padding">
            <ProficienciesBubble prof_list={others}>Other skills and hobbies</ProficienciesBubble>
            </Grid>
        </Grid>
      </div>
      );
}

export default ProficienciesGrid