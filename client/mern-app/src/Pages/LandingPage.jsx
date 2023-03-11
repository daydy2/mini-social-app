import { useState } from "react";
import Toolbar from "../Components/Toolbar/Toolbar";
import Sidedrawer from "../Components/Sidedrawer/Sidedrawer";
import Backdrop from "../Components/Backdrop/Backdrop";
import styled from "styled-components";
import Sidenav from "../Components/Sidenav/Sidenav";
import Profile from "../Components/ProfileSIdenav/Profile";
import Feedlane from "../Components/Feedlane/Feedlane";

const LandingPage = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <Home>
      <main className="landingPage__main">
        <header className="landing">
          <Toolbar drawerClickHandler={drawerToggleClickHandler} />
          <Sidedrawer show={sideDrawerOpen} />
          {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
        </header>

        <section className="landingpage__sidenav">
          <Sidenav />
          <Profile />
        </section>
        <section className="landing__feedlane">
          <Feedlane />
        </section>

      </main>
    </Home>
  );
};

const Home = styled.main`
  main {
    background: #f1f1ef;
    color: black;
    padding-left: 2rem;
    padding-top: 3rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: row;
  }
  .landingpage__sidenav{
    display: flex;
    flex-direction: column;
    height: 1vh;
    box-shadow: 0px 7px 3px rgba(0, 0, 0, .3);
  }
  .landing__feedlane{
    overflow-y: auto;
  }
`;

export default LandingPage;
