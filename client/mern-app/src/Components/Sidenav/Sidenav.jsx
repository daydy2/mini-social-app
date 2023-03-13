import React from "react";
import styled from "styled-components";
import { Dasboard, Profile, Settings } from "../Icons/Icons";

const Sidenav = () => {
  return (
    <Dashlinks>
      <main className="dashlinks">
        <ul className="dashlink__ul-list">
          <li className="dashlink__listItem">
            {Dasboard}
            <span className="dashlink__text"> Dashboard</span>
          </li>
          <li className="dashlink__listItem">
            {Profile}
            <span className="dashlink__text"> Profile</span>
          </li>
          <li className="dashlink__listItem">
            {Settings}
            <span className="dashlink__text">Settings</span>
          </li>
        </ul>
      </main>
    </Dashlinks>
  );
};

//box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);

const Dashlinks = styled.main`
  main {
    background-color: #ffffff;
    color: black;
    width: 25rem;
    padding: 1rem 0rem 1rem 2rem;
    border-radius: 0px 0px 30px 30px;
    height: 30rem;
    margin-top: 3rem;
    
  }
  .dashlink {
    &__ul-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      alignitems: center;
      width: 100%;
    }

    &__text {
      font-family: inherit;
      font-size: 2.0rem;
      color: #d2d2cd;
      position: relative;
      top: -0.8rem;
      margin-left: .5rem;
      font-weight: bold;
    }

    &__listItem {
      width: 100%;
      margin: 2.5rem 0;
      transition: all 100ms ease-out;

      &:hover,
      &:active {
        border-right: 4px solid #974444;
        cursor: pointer;

        .dashlink__text {
          color: black;
        }
      }
    }
  }
`;

export default Sidenav;
