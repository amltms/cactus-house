import { FC } from "react";
import { GridItem } from "./GridItem";
import styled from "styled-components";
import { services } from "../../data/services";
interface Props {}

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vw;
`;

const GridRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
export const Grid: FC<Props> = (props) => {
  return (
    <div>
      <GridContainer>
        <h2>Services</h2>
        <GridRow>
          {services.slice(0, 3).map((i) => (
            <GridItem data={i} />
          ))}
        </GridRow>
        <GridRow>
          {services.slice(3, 6).map((i) => (
            <GridItem data={i} />
          ))}
        </GridRow>
      </GridContainer>
    </div>
  );
};
