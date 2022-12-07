import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as Home } from "../../img/home-g.svg";
// import { ReactComponent as AHome } from "../../img/home-c.svg";
// import { ReactComponent as Chat } from "../../img/chat-g.svg";
// import { ReactComponent as AChat } from "../../img/chat-c.svg";
// import { ReactComponent as Posting } from "../../img/post-g.svg";
// import { ReactComponent as APosting } from "../../img/post-c.svg";
// import { ReactComponent as Mypage } from "../../img/my-g.svg";
// import { ReactComponent as AMypage } from "../../img/my-c.svg";
import Home from "../../img/home-g.svg";
import AHome from "../../img/home-c.svg";
import Chat from "../../img/chat-g.svg";
import AChat from "../../img/chat-c.svg";
import Posting from "../../img/post-g.svg";
import APosting from "../../img/post-c.svg";
import Mypage  from "../../img/my-g.svg";
import AMypage  from "../../img/my-c.svg";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  
  return (
    <div className="footer">
      <img src={Home} alt="" onClick={() => navigate("/home")} className="home" />
      <img src={Chat} alt="" onClick={() => navigate("/chat")} className="chat" />
      <img src={Posting} alt="" onClick={() => navigate("/form")} className="post" />
      <img src={Mypage} alt="" onClick={() => navigate("/mypage")} className="mypage" />
    </div>
  );
};

export default Footer;