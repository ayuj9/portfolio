import React from "react";
import "./sideBar.css";
import { Button} from "@mui/material";
import Home from "./Home";
import About from "./About";
function SideBar() {
  return (
    <>
      <img src="picture.jpg" className="Rounded-image" />
      
      <ul className="list">
        <li>
          
            <i className="fa fa-house"> </i> Home
          
        </li>
        <li>

          <i className="fa fa-user"></i> About
        </li>
        <li>
          <i className="fa fa-file"></i> Resume
        </li>
        <li>
          <i className="fa fa-envelope"></i> Contact
        </li>
      </ul>
    </>
  );
}

export default SideBar;
