import React from "react";
import { X } from "phosphor-react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmitHandler = (data, e) => {
    e.preventDefault();
    console.log(data);
    props.close();
    navigate('/comment');
  };

  return (
    <Container>
      <main className={props.open ? "modal" : "modal modal__close"}>
        <section className="modal__container">
          {!props.loading && (
            <div className="modal__closeBtn" onClick={props.close}>
              <X size={20} weight="bold" color={"#ffffff"} />
            </div>
          )}
          <div className="modalForm">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <label>
                <span>Comment</span>
                <input {...register("modalComment", { minLength: 5 })} />
              </label>
              <button type='submit' >Comment</button>
            </form>

          </div>
        </section>
      </main>
    </Container>
  );
};

const Container = styled.main`
  .modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
    //   animation: fadeInAnimation ease 3s;
    //   animation-iteration-count: 1;
    //   animation-fill-mode: forwards;

    &Form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      ${"" /* height: 25vh; */}

      & label,
        & span,
        & input,
        & button {
        display: block;
        margin: 1rem 0;
      }
      & label {
        font-family: "serif";
        font-size: 1.8rem;
        font-weight: bold;
      }
      & input {
        width: 100%;
        outline: none;
        font-size: 1.6rem;
        padding: 8px 1rem;
      }
      & button{
        outline: none;
        border-radius: 12px;
        padding: 8px 1rem;
        background: #bababa;
        color: black;
        font-size: 1.6rem;
        text-align: center;
        border-style: none;
        transition: transform .3s ease-in;

        &: hover{
          cursor: pointer;
          transform: translateY(-3px);
        }
      }
    }

    &__container {
      width: 751px;
      ${"" /* padding: 64px; */}

      background: #ffffff;
      border-radius: 24px;
      background-color: $neutral-white;
      flex-direction: column;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__close {
      display: none;
    }
    &__closeBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 61.25px;
      height: 61.25px;
      position: absolute;
      right: -2%;
      top: -5%;
      background: rgb(0, 0, 0);
      border-radius: 100px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export default Modal;
