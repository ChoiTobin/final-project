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

const Footers = ({ onChange, checked }) => {
  const tabs = [
    { id: 1, item: <Home /> },
    { id: 2, item: <Chat /> },
    { id: 3, item: <Posting /> },
    { id: 4, item: <Mypage /> },
  ];

  const InputRadio = () => {
    const [active, setActive] = useState(tabs[0]["item"]);
    const handleChange = (e) => setActive(e.target.value);
    
    return (
      <Layout>
        <TabMenu>
          <div onChange={handleChange} checked={active}>
            {tabs.map((page) => {
              return (
                <label key={page.id} className="label">
                  <input type="radio" value={page.item} onChange={onChange} checked={checked === page.item} style={{ display: "none" }}/>
                  {page.item}
                </label>
              )
            })}
          </div>
        </TabMenu>
      </Layout>
    )
  }

  return (
    <InputRadio />
  )
};

export default Footers;

const Layout = styled.div`
  height: 55.7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 50px;
  /* cursor: pointer; */
  background-color: #fff;

  border: 1px solid #ed9071;
`;

const TabMenu = styled.ul`
  display: flex;
  padding: 0px;

  li {
    background-color: #fff;
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
  justify-content: center;
`;
