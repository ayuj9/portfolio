import { Grid, Typography } from "@mui/material";
import "./Home.css";


function Home() {
  return (
    <>
      <Grid container>
        <Grid item lg={7}>
          <Typography
            fontWeight="bold"
            fontStyle="unset"
            fontSize={66}
            marginTop={28}
            fontFamily="Roboto"
            marginLeft={"330px"}
          >
            
            Ayushi Jain
            <Typography marginRight="600px">
              <div className="container">
                <div className="typewriter">I'm Web Developer</div>
              </div>
            </Typography>
          </Typography>
        </Grid>
        <Grid item lg={5} marginTop="0px">
          <Typography marginTop="0px">
            <div class="container">
              <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
              <div class="ball"></div>
            </div>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
