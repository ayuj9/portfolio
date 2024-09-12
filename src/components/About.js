import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "./About.css";

function About() {
  return (
    <>
      <Box bgcolor="white" height="790px" marginTop="40px">
        <Typography marginLeft="280px" marginRight="20px">
          <div className="About-heading">About</div>
          <Typography marginTop={5}>
            <div className="Para-Spacing">
              Hello, I'm Ayushi Jain , a passionate college student pursuing a
              degree in Information Technology (Internet of Things) with a focus
              on web development. I am thrilled by the endless possibilities
              that web technologies offer and strive to create beautiful and
              functional websites that make a positive impact.
            </div>
            <div className="Heading"> Web Developer</div>
            <Grid container>
              <ul className="bullet-dash-list">
                <li>
                  <b>City</b> : Gwalior, India{" "}
                </li>
                <li>
                  <b>Birthday</b> : 15th June 2003
                </li>
                <li>
                  <b>Age</b> : 20
                </li>
                <li>
                  <b>Highest Qualification</b> : 12th{" "}
                </li>
                <li>
                  <b>Phone</b> : +91 7909894213
                </li>
                <li>
                  <b>E-mail</b> : ayuj5571@gmail.com
                </li>
              </ul>
              <div className="Para-Spacing">
                During my time in college, I have gained a solid foundation in
                web development concepts and technologies. I have explored
                various programming languages and have dabbled in frameworks
                like React and Bootstrap. My coursework has equipped me with a
                strong understanding of front-end development principles and
                responsive design practices.
              </div>
            </Grid>
          </Typography>
        </Typography>
      </Box>
    </>
  );
}

export default About;
