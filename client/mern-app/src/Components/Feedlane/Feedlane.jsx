import React from "react";
import Feed from "../Feed/Feed";
import styled from "styled-components"
const Feedlane = () => {
 //   const [showComment, setShowComment] = useState(false);
 //   const handleComment = () => {
 //     setShowComment(!showComment);
 //   };
 return (
  <FEEDLANE>
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  </FEEDLANE>
 )
};

const FEEDLANE = styled.main`
width: 100%:
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`


export default Feedlane;
