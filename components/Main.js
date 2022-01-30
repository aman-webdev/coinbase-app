import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const Main = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
  return (
    <Wrapper>
      <Portfolio
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
        walletAddress={walletAddress}
      />
      <Promos />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  /* overflow-x: hidden; */

  & > div {
    border-radius: 0.4rem;
  }
`;
