import { Grid, Typography } from "@mui/material";
import "./About.css";
import "./Contact.css";
import Box from "@mui/material/Box";
// import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
// import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
// import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

function Contact() {
  return (
    <Box sx={{ backgroundColor: "#FFFFF0" }} height="800px">
      <Typography marginLeft="280px">
        <div className="About-heading">Contact</div>
        <div className="box-design">
          <Grid container direction="row">
            <Grid item>
              <div className="circle">
                <i className="icon-design" class="fa fa-location-dot"></i>
              </div>
              <div className="circle">
                <i class="fa fa-phone"></i>
              </div>
              <div className="circle">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div className="circle">
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </Grid>
            <Grid item marginTop="30px">
              <div className="content">
                <b>Location :</b>
                Gwalior, M.P., India
              </div>
              <div className="content">
                <b>Call:</b>
                +91 7909894213
              </div>
              <div className="content">
                <b>Email:</b>
                ayuj5571@gmail.com
              </div>
              <div className="content">
                <a href="https://www.linkedin.com/in/ayushi-jain-633978231">
                  linkedin.com
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </Typography>
    </Box>
  );
}

export default Contact;
