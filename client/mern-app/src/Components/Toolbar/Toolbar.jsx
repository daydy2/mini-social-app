import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/">TrippleDev</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul className="">
            
            <li className="">
              <a
                href="https://drive.google.com/file/d/1h5bFoDzcrCUVvOrQGoolg_uGM2_KTkFI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                download
              >
                {" "}
                Resume
              </a>
            </li>
            <li className="">
              <a href="/">Contact</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
