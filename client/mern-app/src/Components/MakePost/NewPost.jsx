import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const NewPost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Post>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span className="form__label">Post</span>
            <input placeholder="Post Something" {...register("post")} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </main>
    </Post>
  );
};

const Post = styled.main`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background: #ffffff;

  form {
    position: ;
    width: 100%;

    ${"" /* box-shadow: 0px 3px 3px rgba(0, 0, 0, .3); */}
    border-radius: 0 30px 0 30px;
    padding: 0.5rem;

    & label,
    & input {
      display: block;
      width: 100%;
      margin: .9rem 0;
    }
    & input{
      padding: .7rem 1rem;

    }

  }
  .form__label{
    font-size: 17px;
    font-weight: bolder;
    line-height: 1.9px;
  }
`;
export default NewPost;
