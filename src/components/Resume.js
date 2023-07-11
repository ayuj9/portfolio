import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "./About.css";
import "./Resume.css";

function Resume() {
  return (
    <>
      <Box sx={{ backgroundColor: "#FFF8DC" }} height="800px">
        <Typography marginLeft="280px">
          <div className="About-heading">Resume</div>
        </Typography>
        <Grid container paddingLeft="280px" marginTop="20px">
          <Grid item>
            <div className="head">CAREER OBJECTIVE</div>
            <div className="para">
              <i>
                Seeking a challenging position in a dynamic organization where I
                can utilize my technical skills and creativity to contribute to
                the growth and success of the company.
              </i>
            </div>
            <div className="head">EDUCATION</div>
            <div className="para">
              <b>B.tech -</b>
              <div>
                <i>
                  Information Technology with specialization in Internet of
                  Things
                </i>
              </div>
              Madhav Institute of Science and Technology, Gwalior(M.P.)
            </div>

            <div className="head">SKILLS</div>
            <div className="para">
              <b>Languages:</b> JavaScript, C/C++, HTML/CSS
              <br />
              <b>Frameworks:</b> React, Node.js
              <br />
              <b>Developer Tools:</b> Firebase
            </div>
          </Grid>
          <Grid item>
            .
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Resume;
