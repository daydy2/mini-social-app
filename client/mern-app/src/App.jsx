import react, { useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Feedlane from "./Components/Feedlane/Feedlane";
import ProfilePage from "./Pages/ProfilePage";
import Date from "./Components/Date/Date";
import NewPost from "./Components/MakePost/NewPost";
import Toolbar from "./Components/Toolbar/Toolbar";
import Sidedrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import CommentPage from "./Pages/CommentPage";

const App = () => {
  const [user, setUser] = useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  return (
    <div className="App">
      <header className="landing">
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <Sidedrawer show={sideDrawerOpen} />
        {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
      </header>
      {user ? (
        <div className="no-user">
          <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </div>
      ) : (
        <>
          <div className="sidebar">
            <LandingPage />
          </div>
          <div className="main-area">
            <div className="feed-area">
              <Routes>
                <Route path="/" element={<Feedlane />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/comment" element={<CommentPage />} />
              </Routes>
            </div>
            <div className="newpost">
              <Date />
              <NewPost />
            </div>
          </div>
        </>)}
    </div>
  );
};

export default App;

