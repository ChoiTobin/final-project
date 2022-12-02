import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <div className="start">
        <LogoWhite style={{width: "110.51px", height: "83.56px"}}/>
        <span>당신과 함께 걸어갈, 크멍</span>
      </div>
    </div>
  );
}

export default Intro;
