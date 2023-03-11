import React from "react";
import styled from "styled-components";
import { Logout } from "../Icons/Icons";
import ProfileImg from "../ProfileImg/ProfileImg";
import Typography from "../ProfileTypography/Typography";

const Profile = (props) => {
  return (
    <ProfileSideNav>
      <main>
        <ProfileImg />
        <Typography
          profileName={"Dinis Danielle"}
          profileEmail={"dinisdaniel@gmail.com"}
        />
        <section className="profile__logout">
          <div className="logout">{Logout}</div>
        </section>
      </main>
    </ProfileSideNav>
  );
};

const ProfileSideNav = styled.main`
  main {
    background-color: #ffffff;
    color: black;
    width: 25rem;
    padding: 1rem 1rem;
    border-radius: 30px 30px 0px 0px;
    margin-top: 1rem;
    height: 36rem;
    display: flex;
    flex-direction: column !important;
    justify-content: flex-start;
    alignitems: flex-start;
  }

  .profile__logout {
    text-align: center;
    padding-top: 2rem;
  }
  .logout {
    width: 5rem;
    height: 5rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #f1f1ef;
    text-align: center;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;

    &:hover {
      outline: #4caf50 solid 10px;
      cursor: pointer;
    }
  }
`;

export default Profile;
