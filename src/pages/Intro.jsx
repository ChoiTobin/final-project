import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoWhite } from "../img/introLogo.svg";

const Intro = () => {
  // const navigate = useNavigate()
  // const timeout = () => {
  //   setTimeout(() => {
  //     navigate('/start')
  //   }, 2000);
  // }

  // useEffect(() => {
  //   timeout();
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // });

  return (
    <div>
      <Start className="start">
        <LogoWhite style={{width: "110.51px", height: "83.56px"}}/>
        <Slogan>당신과 함께 걸어갈, 크멍</Slogan>
      </Start>
    </div>
  );
}

export default Intro;

const Start = styled.div`
  width: 360px;
  height: 640px;
  background-color: #ED9071;
`;
  
const Slogan = styled.span`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20.03px;
  color: #FFF;
`;