import { useState } from "react";

import Backdrop from "../Components/Backdrop/Backdrop";
import styled from "styled-components";

// import Feedlane from "../Components/Feedlane/Feedlane";

const LandingPage = (props) => {
 

  

  const openCommentHandler = () => {
    setOpenComment(!openComment);
  };
 const drawerToggleClickHandler = () => {
  setSideDrawerOpen(!sideDrawerOpen);
 };

 const backdropClickHandler = () => {
  setSideDrawerOpen(false);
 };

  return (
    <Home>
      <main className="landingPage__main">
        
        <section className="landing__comment">
          <PostComment show={openComment} close={openCommentHandler} />
          {openComment ? <Backdrop click={props.backdropClick} /> : null}
        </section>
        <section className="landing__feedlane">
          <Feedlane comment={openCommentHandler} />
          <Feedlane comment={openCommentHandler} />
          <Feedlane comment={openCommentHandler} />
          <Feedlane comment={openCommentHandler} />
          <Feedlane comment={openCommentHandler} />
          <Feedlane comment={openCommentHandler} />
          <Feedlane comment={openCommentHandler} />
          <Feedlane comment={openCommentHandler} />
        </section>

        <section className="landing__post-general">
          <PostFeed />
        </section>
      </main>
    </Home>
  );
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
    {/* <section className="landing__feedlane">
          <Feedlane />
        </section> */}
   </main>
  </Home>
 );
};

const Home = styled.main`
 .landingPage__main {
  color: black;
  margin-top: 2rem;
  padding-top: 3rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
 }

  
  .landing__comment{
    position: fixed;
  }
  .landing__feedlane {
    margin-left: 30rem;
  }
  
`;

export default LandingPage;
