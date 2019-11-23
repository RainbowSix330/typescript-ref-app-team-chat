import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  text-transform: capitalize;

  //added by rainbow/////////////////
  min-height: 100px;
  border-bottom: 1px solid #ddd;
  /////////////////////////////////////

  //margin: 14px 24px 24px 10px;    //marked by rainbow
`;

export const Avatar = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 29px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 10px;
`;

export const UserName = styled.div`
  font-size: 15px;

  //marked and added by rainbow///////////////////////
  //color: #585858;
  //font-family: "Roboto", sans-serif;
  //font-weight: 500;
  font-weight: 400;
  color: #222;
  font-family: "Noto Sans KR", sans-serif;
  /////////////////////////////////

  line-height: 20px;
`;

export const UserTitle = styled.div`
  font-size: 13px;

  //marked and added by rainbow///////////////////////
  //color: #9b9b9b;
  //font-family: "Roboto", sans-serif;
  color: #888;
  font-family: "Noto Sans KR", sans-serif;
  //////////////////////////////////////////////

  font-weight: 400;
  line-height: 20px;
`;
