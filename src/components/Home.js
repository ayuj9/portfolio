import { Grid, Typography } from "@mui/material";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid container>
        <Grid item lg={7} md={9}>
          <Typography
            color="#2f1c04"
            fontWeight="bold"
            fontStyle="unset"
            fontSize={66}
            marginTop={10}
            fontFamily="Roboto"
            marginLeft={"200px"}
          >
            Ayushi Jain
            <Typography marginRight="600px">
              <div className="container">
                <div className="typewriter">I'm Web Developer..</div>
              </div>
            </Typography>
          </Typography>
          <img alt="img" src="portfolioImg.jpeg" width="900px" height="400px" />
        </Grid>
        <Grid item lg={5} md={3} xs={3} marginTop="0px">
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
