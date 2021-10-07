import { FC } from "react";
import { Grid } from "../grid/Grid";
import { ReactComponent as MainSvg } from "../../svgs/main.svg";
import styled from "styled-components";
import { Footer } from "./Footer";
interface Props {}

const Main = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  padding: 0 10vw;
`;
const HomeImg = styled(MainSvg)`
  width: 100%;
  height: 100%;
  flex-basis: 50%;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex-basis: 50%;
  h2 {
    text-transform: uppercase;
  }
`;
export const Home: FC<Props> = (props) => {
  return (
    <Container>
      <Main>
        <HomeImg />
        <Title>
          <h2>
            We Are <br />
            Cactus House
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            exercitationem eveniet modi quas sunt ex deserunt quo nihil autem
            molestias voluptatum officia neque laborum sit debitis deleniti,
            porro dolorem accusantium!
          </p>
        </Title>
      </Main>
      <Grid />
      <Footer />
    </Container>
  );
};
