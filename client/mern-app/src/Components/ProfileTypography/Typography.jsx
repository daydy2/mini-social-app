import React from "react";
import styled from "styled-components";

const Typography = (props) => {
  return (
    <Typo>
      <section className="profile__details">
        <span className="profile__name name" style={{fontSize: props.fzname}}>{props.profileName}</span>
        <span className="profile__name email" style={{fontSize: props.fzemail}}>{props.profileEmail}</span>
      </section>
    </Typo>
  );
};

const Typo = styled.section`
  .profile__details {
    margin-top: 0;

    & .profile__name {
      display: block;
      text-align: center;
    }
  }
  .name {
    font-size: 2rem;
    font-weight: bolder;
  }
  .email {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
`;

export default Typography;
