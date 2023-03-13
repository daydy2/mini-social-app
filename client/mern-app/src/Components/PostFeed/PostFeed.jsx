import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const PostFeed = () => {
  const { register, handleSubmit, trigger } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Post>
      <form onSubmit={handleSubmit(onSubmit)} className="feed__form">
        <label>
          <span>Post a Feed</span>
          <input {...register("post", { minLength: 5 })} />
        </label>
        
        <input type="submit" value="post" />
      </form>
    </Post>
  );
};

const Post = styled.main`
  width: 23vw;
  margin: 10rem 0 0 0rem;
  background-color: #ffffff;

  .feed__form {
    padding: 2rem 1rem;

    & label, & input {
      display: block;
      margin-bottom: 1rem;
    }

    & label{
      font-size: 2.0rem;
      font-weight: bolder;
      font-family: inherit;
      text-align: center;
      margin-bottom: 1rem;
    }

    & input{
      margin: 3rem 0;
      width: 100%;
      outline: none;
      padding: 1rem 1.5rem;
    }
  }
`;
export default PostFeed;
