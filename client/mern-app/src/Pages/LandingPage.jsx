import { useState } from "react";

import Backdrop from "../Components/Backdrop/Backdrop";
import styled from "styled-components";

import Feedlane from "../Components/Feedlane/Feedlane";
import PostComment from "../Components/PostComment/PostComment";
import PostFeed from "../Components/PostFeed/PostFeed";

const LandingPage = (props) => {
  
  const [openComment, setOpenComment] = useState(false);

  

  const openCommentHandler = () => {
    setOpenComment(!openComment);
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
};

const Home = styled.main`
  .landingPage__main {
    background: #f1f1ef;
    color: black;
    padding-left: 2rem;
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
