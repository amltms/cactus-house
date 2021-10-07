import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "./components/Nav";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";

const Container = styled.div`
  padding: 10rem 10vw 0 10vw;
`;

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Container>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
