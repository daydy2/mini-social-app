import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const PostComment = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Comment>
      <main className="main__comment">
        <form onSubmit={handleSubmit(onSubmit)} >
          <label>
            <span>Comment</span>
            <input {...register("comment", { minLength: 5 })} />
          </label>
          <input type="submit" value="comment" />
        </form>
      </main>
    </Comment>
  );
};

const Comment = styled.main`
  .main__comment {
    background-color: #ffffff;
    padding: 2rem 0;
    width: 70vw;
    margin: 25vh auto;
    position: relative;
    left: 150px;
    z-index: 1000;

    & form {
      margin: 0 auto;
      padding: 1rem;
    }
    & label,
    & input {
      display: block;
      margin: 1.5rem 0;
    }
    & label > input {
      border-style: none;
      outline: none;
      border-left: 3px solid #974444;
      padding: 2rem 1rem;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
      width: 100%;
      font-size: 1.8rem;
    }
    & label {
      font-family: inherit;
      font-size: 1.8rem;
      font-weight: bolder;
      text-align: center;
    }
    & input[type=submit]{
        margin: 0 auto;
        background-color: #974444;
        padding: 1rem 2rem;
        border: none;
        outline: none;
        transition: transform .4s ease-in;
        color: white;
        
        &:hover{
            cursor: pointer;
            transform: translateY(3px);
        }
        
    }
  }
`;
export default PostComment;
