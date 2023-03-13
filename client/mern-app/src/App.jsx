import { useState } from "react";
import Toolbar from "./Components/Toolbar/Toolbar";
import Sidedrawer from "./Components/Sidedrawer/Sidedrawer";
import Sidenav from "./Components/Sidenav/Sidenav";
import Profile from "./Components/ProfileSIdenav/Profile";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import styled from "styled-components";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
    setOpenComment(false);
  };

  return (
    <Apph className="App">
      <header className="landing">
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <Sidedrawer show={sideDrawerOpen} />
        {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
      </header>

      <section className="landingpage__sidenav">
        <Sidenav />
        <Profile />
      </section>
      <LandingPage backdrop={backdropClickHandler} />
    </Apph>
  );
}
const Apph = styled.main`
  .landingpage__sidenav {
    display: flex;
    flex-direction: column;
    height: 1vh;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
    position: fixed;
    margin-top: 3rem;
  }
`;
export default App;
