import { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { ReactComponent as Logo } from "../svgs/logo.svg";
import { useHistory } from "react-router-dom";

interface NavProps {
  showDropDown: boolean;
}

const NavBar = styled.div`
  width: 100%;
  position: fixed;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin-right: 2rem;
    font-size: 1.3rem;
  }
`;

const SvgLogo = styled(Logo)`
  height: 3rem;
`;

const NavLinks = styled.div<NavProps>`
  display: flex;
  a {
    font-size: 1.1rem;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.showDropDown ? "flex" : "none")};
    position: absolute;
    top: 0;
    background-color: white;
    height: 100vh;
    z-index: -1;
    justify-content: center;
    width: 100%;
    align-items: center;
    flex-direction: column;
    a {
      padding: 4rem;
    }
  }
`;

const Bars = styled.div`
  font-size: 2rem;
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const Nav: FC = () => {
  const history = useHistory();
  const [showDropdown, setShowDropDown] = useState(false);

  useEffect(() => {
    return history.listen((location) => {
      setShowDropDown(false);
    });
  }, [history]);

  return (
    <NavBar>
      <NavLink exact to="/">
        <SvgLogo />
      </NavLink>
      <Bars>
        {showDropdown ? (
          <GrClose onClick={() => setShowDropDown(!showDropdown)} />
        ) : (
          <AiOutlineMenu onClick={() => setShowDropDown(!showDropdown)} />
        )}
      </Bars>

      <NavLinks showDropDown={showDropdown}>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </NavBar>
  );
};
