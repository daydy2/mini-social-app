import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Date from "./Components/Date/Date";
import Feedlane from "./Components/Feedlane/Feedlane";
import NewPost from "./Components/MakePost/NewPost";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import LandingPage from "./Pages/LandingPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
 const [user, setUser] = useState(false);
 return (
  <div className="App">
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
       </Routes>
      </div>
      <div className="newpost">
       <Date />
       <NewPost />
      </div>
     </div>
    </>
   )}
  </div>
 );
}

export default App;
