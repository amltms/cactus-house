import { FC } from "react";
import styled from "styled-components";

const Foot = styled.div`
  color: white;
  position: absolute;
  width: 95%;
  left: 0;
  padding: 5rem 10vw 5rem 10vw;
  border-radius: 0 100px 0 0;
  background-color: #2f2e41;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  p {
    color: #b3b3b3;
  }
`;

export const Footer: FC = () => {
  return (
    <Foot>
      <h2>
        Interested in <br />
        Collaborating?
      </h2>
      <p>We want to work with you to make really cool stuff.</p>
    </Foot>
  );
};
