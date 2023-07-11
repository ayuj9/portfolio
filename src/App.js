import { Grid, Typography } from "@mui/material";
import "./App.css";
import Home from "./components/Home";
import SideBar from "./components/sideBar";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Grid container sx={{ height: "100vh", position: "fixed" }}>
        <Grid item lg={3} sx={{ backgroundColor: " #00001b" }}>
          <SideBar />
        </Grid>
      </Grid>
      <Grid container sx={{ position: "relative", width: "1440px" }}>
        <Grid item lg={3}></Grid>
        <Grid item lg={9} sx={{ backgroundColor: "bisque" }}>
          heyyyyyyyyyy
          <Home />
          <About />
          hello ji 
          <Resume />
          byyyy
          <Contact />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
//
