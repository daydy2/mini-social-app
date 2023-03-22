import React from "react";
import styled from "styled-components";
import Feed from "../Components/Feed/Feed";
import MiniComment from "../Components/MiniComment/MiniComment";

const CommentPage = () => {
  return (
    <Comment>
      <header className="commentPage__header">
        <Feed />
      </header>

      <MiniComment />
      <MiniComment />
      <MiniComment />
      <MiniComment />
    </Comment>
  );
};
const Comment = styled.main`
  width: 100%;
  position: relative;
`;
export default CommentPage;
