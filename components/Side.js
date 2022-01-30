import Image from "next/image";
import CoinbaseLogo from "../assets/cb-logo.png";
import styled from "styled-components";
import { navItems } from "../static/navItems";
import { useState } from "react";
const Side = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);
  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={CoinbaseLogo} alt="Coinbase Logo" />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((item, i) => (
          <NavItem key={i} onClick={() => setActiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && "#3773f5" }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
        ))}
      </NavItemsContainer>
    </Wrapper>
  );
};

export default Side;

const Wrapper = styled.div`
  /* height: cal100vh); */
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
`;

const LogoContainer = styled.div`
  margin: 1.5rem 0;
`;
const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;

const NavItemsContainer = styled.div`
  margin-top: 3rem;
  cursor: pointer;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;
  &:hover {
    background-color: #141519;
  }
`;

const NavTitle = styled.div``;

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`;
