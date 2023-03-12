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
          <a href="/">MINI-APP</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul className="">
            
            <li className="">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                download
              >
                Home
              </a>
            </li>
            <li className="">
              <a href="/">Profile</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
