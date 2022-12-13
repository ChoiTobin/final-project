import React from "react";
import LogoWhite from "../img/logo-w.png";
import '../styles/Intro.css'

const Intro = () => {
  return (
    <div>
      <div>
        <div className="start">
          <img src={LogoWhite} alt="" style={{ width: "110.51px", height: "83.56px" }} />
          <span className="slogan">당신과 함께 걸어갈, 크멍</span>
        </div>
      </div>
    </div>
  );
}

export default Intro;