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

const Footer = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const [click, setClick] = useState(false)

  const navigate = useNavigate();

  const tabArr = [
    { name: <Home/>, nav: "/home" },
    { name: <Chat/>, nav: "/chat" },
    { name: <Posting/>, nav: "/form" },
    { name: <Mypage/>, nav: "/mypage" },
  ];

  const selectTabHandler = (index) => {
    // 함수에도 index를 전달한다
    setCurrentTab(index)
    setClick(!click)
  }

  return (
    <>
      <Layout>
        <TabMenu>
          {tabArr.map((page, index) => {
        return (
          // 삼항연산자 렌더링
          <li className={currentTab === index ? "submenu focused" : "submenu"}
            // onClick event에서 index를 매개변수로 전달해준다
            onClick={() => {
              selectTabHandler(index)
              navigate(page.nav)
            }}>{page.name}</li>
              )
            })
          }
        </TabMenu>    
    </Layout>
    </>
    
  );
};

export default Footer;

const Layout = styled.div`
  height: 55.7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 58px;
  /* cursor: pointer; */
  background-color: #fff;

  border: 1px solid #ED9071;
`;

const TabMenu = styled.ul`
  display: flex;
  padding: 0px;

  li {
    background-color: #FFF;
  }

  .submenu {
    list-style: none;
    font-weight: bold;
    width: 100%;
    border: none;
    padding: 7px 0;
    cursor: pointer;
    text-align: center;
  }
  .focused {
    background-color: transparent;
    color: rgba(255, 255, 255, 1);
    transition: 0.5s;
  }
`;