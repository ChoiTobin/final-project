import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Hg } from "../../img/home-g.svg";
import { ReactComponent as Hc } from "../../img/home-c.svg";
import { ReactComponent as Cg } from "../../img/chat-g.svg";
import { ReactComponent as Cc } from "../../img/chat-c.svg";
import { ReactComponent as Pg } from "../../img/post-g.svg";
import { ReactComponent as Pc } from "../../img/post-c.svg";
import { ReactComponent as Mg } from "../../img/my-g.svg";
import { ReactComponent as Mc } from "../../img/my-c.svg";

const Footer = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const [click, setClick] = useState(false)

  const navigate = useNavigate();

  const tabArr = [
    { name: <Hg/>, nav: "/home" },
    { name: <Cg/>, nav: "/chat" },
    { name: <Pg/>, nav: "/form" },
    { name: <Mg/>, nav: "/mypage" },
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
