import { FC } from "react";
import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";

const Btn = styled.button`
  color: white;
  background: black;
  width: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  transition: 0.4s;
  svg {
    margin-left: 2rem;
    font-size: 3rem;
  }
  :hover {
    background: #019985;
  }
`;
export const About: FC = () => {
  return (
    <div>
      <div>
        <h1>We're a bunch of dudes who make stuff-</h1>
        <h3>Our Vision</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          tempora ullam qui expedita similique harum enim cum laudantium ex
          neque vel error inventore eos ipsam autem ut assumenda, ipsum ducimus!
        </p>
      </div>
      <div>
        <h2>Let's Talk</h2>
        <p>We’re are always open to have a chat about your projects!</p>
        <Btn>
          Say Hi! <BsArrowRightShort />
        </Btn>
      </div>
    </div>
  );
};
