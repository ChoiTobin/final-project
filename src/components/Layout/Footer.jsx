import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Home } from "../../img/home.svg";
import { ReactComponent as AHome } from "../../img/homeOn.svg";
import { ReactComponent as Chat } from "../../img/chat.svg";
import { ReactComponent as AChat } from "../../img/chatOn.svg";
import { ReactComponent as Posting } from "../../img/posting.svg";
import { ReactComponent as APosting } from "../../img/postingOn.svg";
import { ReactComponent as Mypage } from "../../img/mypage.svg";
import { ReactComponent as AMypage } from "../../img/mypageOn.svg";
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
      <div>
        <div>
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
        </div>    
    </div>
    </>
    
  );
};

export default Footer;
