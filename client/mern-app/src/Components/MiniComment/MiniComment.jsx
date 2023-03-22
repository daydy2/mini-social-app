import React from "react";
import styled from "styled-components";

const MiniComment = () => {
  return (
    <Commentee>
      <section className="commentee__comment">
        <div className="commentee__comment-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            culpa amet quam tempore, ducimus, reprehenderit, debitis asperiores
            incidunt nulla beatae suscipit officia ut blanditiis autem minima!
            Tempora suscipit similique asperiores. Sapiente exercitationem cum
            cupiditate, perspiciatis beatae mollitia nemo ad. Quis animi odit
            eveniet amet ad corporis laudantium deleniti quas ipsam temporibus
            sapiente, recusandae non perspiciatis illum laborum voluptas ab et?
          </p>
        </div>
        <div className="commentee__commenter">
          <span>
            <em>Dinis Danielle</em>
          </span>
          <span>00: 00 : 00</span>
        </div>
      </section>
    </Commentee>
  );
};

const Commentee = styled.main`
  .commentee {
    &__comment {
      padding: 1rem 1.5rem;
      background: #bababa;
      margin: 1rem 0;
      border-radius: 20px 20px 0 20px;
      position: absolute;
      left: 150px;

      &-text p {
        font-family: inherit;
        font-size: 1.8rem;
        line-height: 1.9rem;
        word-spacing: 0.5px;
      }
    }
    &__commenter {
      margin: 1rem 0;
      text-align: right;
      & span {
        font-family: inherit;
        font-size: 1.5rem;
        margin: 0px 10px 7px 0;
      }
    }
  }
`;
export default MiniComment;
