import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as HomeColor } from "../../img/home-f.svg";
import { ReactComponent as HomeMono } from "../../img/home-fo.svg";
import { ReactComponent as ChatColor } from "../../img/chat-f.svg";
import { ReactComponent as ChatMono } from "../../img/chat-fo.svg";
import { ReactComponent as WriteColor } from "../../img/write-f.svg";
import { ReactComponent as WriteMono } from "../../img/write-fo.svg";
import { ReactComponent as MypageColor } from "../../img/mypage-f.svg";
import { ReactComponent as MypageMono } from "../../img/mypage-fo.svg";
import { useNavigate } from "react-router-dom/dist";

const Footer = () => {
  const navigate = useNavigate();

  const onClickChat = () => {
    navigate(`/chat`);
  };

  const onClickHome = () => {
    navigate(`/home`);
  };

  const onClickWrite = () => {
    navigate(`/form`);
  };

  const onClickMy = () => {
    navigate(`/mypage`);
  };

  return (
    <Layout>
      <HomeMono onClick={onClickHome} id="home" />
      <ChatMono onClick={onClickChat} id="chat" />
      <WriteMono onClick={onClickWrite} id="write" />
      <MypageMono onClick={onClickMy} id="mypage" />
    </Layout>
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
  cursor: pointer;
  background-color: #fff;

  border: 1px solid #ED9071;
`;
