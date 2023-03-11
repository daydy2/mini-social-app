import React from "react";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClass = " side-drawer";
  if (props.show) {
    drawerClass = "side-drawer open";
  }

  return (
    <nav className={drawerClass}>
      <ul>
        <li>
          <span className="span__tripple">TrippleDev</span>
        </li>

        <li>
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
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
