import { Grid } from "@mui/material";
import "./App.css";
import Home from "./components/Home";
import SideBar from "./components/sideBar";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
// import Main from "./Main"

function App() {
  return (
    <>
      <Grid container sx={{ height: "100vh", position: "fixed" }}>
        <Grid item lg={3} sx={{ backgroundColor: " #00001b" }}>
          <SideBar />
        </Grid>
      </Grid>
      <Grid container sx={{ position: "relative" }}>
        <Grid item lg={3}></Grid>
        <Grid item lg={9} md={12} xs={12} sx={{ backgroundColor: "#f8f2ed" }}>
          {/* <Main /> */}
          <Home />
          <About />
          <Resume />
          <Contact />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
//
