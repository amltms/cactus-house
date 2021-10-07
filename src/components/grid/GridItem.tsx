import { FC } from "react";
import styled from "styled-components";

interface Props {
  data: {
    title: string;
    description: string;
    img: string;
  };
}

const Img = styled.img`
  width: 100%;
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 1rem 1rem 1rem 1rem;
  align-items: center;
  justify-content: end;
  text-align: center;
  p {
    color: #777;
  }
`;
export const GridItem: FC<Props> = ({ data }) => {
  return (
    <Item>
      <Img src={`${data.img}`} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </Item>
  );
};
