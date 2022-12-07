import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Home } from "../../img/home-g.svg";
import { ReactComponent as AHome } from "../../img/home-c.svg";
import { ReactComponent as Chat } from "../../img/chat-g.svg";
import { ReactComponent as AChat } from "../../img/chat-c.svg";
import { ReactComponent as Posting } from "../../img/post-g.svg";
import { ReactComponent as APosting } from "../../img/post-c.svg";
import { ReactComponent as Mypage } from "../../img/my-g.svg";
import { ReactComponent as AMypage } from "../../img/my-c.svg";
// import { Home, Chat, Posting, Mypage } from "./FooterIcons.js";
import "./Footer.css";

const Footer = ({ onChange, checked }) => {
  const navigate = useNavigate();

  const tabs = [
    { id: 1, item: <Home />, move: "/home", state: true },
    { id: 2, item: <Chat />, move: "/chat", state: false },
    { id: 3, item: <Posting />, move: "/form", state: false },
    { id: 4, item: <Mypage />,  move: "/mypage", state: false},
  ];

  const [active, setActive] = useState(tabs[0]["item"]);
  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    setActive(e.target.value)
    setClick(!click)
  }

  


  return (
    <Layout>
      <div>
        <TabTitle onChange={handleChange} checked={active}>
          {tabs.map((page) => {
            return (
              <Label key={page.id} className="btns" onClick={() => {navigate(page.move)}}>
                <input
                  type="radio"
                  value={page.item}
                  onChange={onChange}
                  //checked={checked === page.item}
                  style={{ display: "none" }}
                />
                {page.item}
              </Label>
            );
          })}
        </TabTitle>
      </div>
    </Layout>
  );
};

export default Footer;

const Layout = styled.div`
  width: 360px;
  height: 55.7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  /* cursor: pointer; */
  background-color: #fff;

  /* border: 1px solid #ed9071; */
`;

const TabTitle = styled.div`
  cursor: pointer;

  width: 250px;
  height: 19.47px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 16px;
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
`;


const Label = styled.label`
  width: 54px;
  height: 51px;
  margin-top: 13.46px;
`