import React from "react";
import styled from "styled-components";
import { Comment, Follow, UnFollow } from "../Icons/Icons";
import ProfileImg from "../ProfileImg/ProfileImg";
import Typography from "../ProfileTypography/Typography";

const Feedlane = (props) => {
  //   const [showComment, setShowComment] = useState(false);
  //   const handleComment = () => {
  //     setShowComment(!showComment);
  //   };
  return (
    <Feeds>
      <main>
        <section className="feedUser">
          <ProfileImg width={"60px"} height={"61px"} />
          <Typography profileName={"Dinis Danielle"} fzname={"15px"} />
        </section>
        <section className="feedPost">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            pariatur quaerat doloremque modi, ratione earum impedit libero
            sciunt dolore atque debitis, dolorum suscipit! Eligendi veniam
            quaerat velit possimus id accusamus, corrupti ab dolorum iste
            repellendus architecto, enim commodi minima. Perferendis, voluptates
            aut voluptas atque libero ratione alias, ducimus quasi voluptatibus
            veniam soluta architecto.
            {/* timeStamp */}
          </p>
          <div className="feedConnect">
            <span className="feedConnect__span" onClick={props.comment}>
              {Comment}
              {/* <div className="descriptors">Comment</div> */}
            </span>

            <span className="feedConnect__span" onClick={props.comment}>
              {Follow}
              {/* <div className="descriptors">Follow</div> */}
            </span>
            <span className="feedConnect__span" onClick={() => {}}>
              {UnFollow}
              {/* <div className="descriptors">UnFollow</div> */}
            </span>
          </div>
        </section>
      </main>
    </Feeds>
  );
};

const Feeds = styled.main`
  main {
    width: 50vw;
    margin: 5rem 1rem 1rem 0rem;
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 0 3rem 0 3rem;
  }
  .feedUser {
    display: block !important;
  }
  .feedPost p {
    margin: 1rem;
    font-family: inherit;
    font-size: 1.5rem;
    word-spacing: 0.5rem;
    font-weight: 400;
    text-align: justify;
    text-justify: inter-word;

    &:hover {
      cursor: pointer;
    }
  }
  .feedConnect {
    padding: 0rem 1rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    & span {
      color: #974444;
      transition: all 0.3s ease-in-out;

      &:hover {;
        cursor: pointer;
        color: black;

        ${
          "" /* .feedConnect__span .descriptors {
          display: block;
          position: relative;
          width: 6rem;
          padding: 0.5rem;
          color: white;
          background: black;

          &:after {
            position: absolute;
            left: -100px;
            top: 200px;
            content: "";
            width: 0;
            height: 0;
            border-right: solid 1rem rgba(0, 0, 0, 0.6);
            border-bottom: solid 1rem 10px transparent;
            border-top: solid 1rem transparent;
          }
        } */
        }
      }
    }
    .feedConnect__span .descriptors {
      display: none;
    }
  }
`;

export default Feedlane;
