import styled from "styled-components/macro";

import posed from "react-pose";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  //background-color: #f0f3f7; //marked by rainbow
  //added by rainbow//////////////////////////////
  border-left: 1px solid #e3e3e3;
  ////////////////////////////////////
  width: 100%;
  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const AnimatedWrapper = posed(Wrapper)({
  open: { applyAtStart: { display: "flex" } },
  closed: { applyAtEnd: { display: "none" } }
});

export const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0px 15px 15px 15px;
`;
