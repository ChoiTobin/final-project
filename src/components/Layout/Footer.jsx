import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Back } from "../../img/arrow_back.svg";
import { ReactComponent as Chat } from "../../img/chat.svg";
import { ReactComponent as Home } from "../../img/home.svg";
import { ReactComponent as Write } from "../../img/edit_square.svg";
import { ReactComponent as Mypage } from "../../img/account_circle.svg";
import { useNavigate } from 'react-router-dom/dist';

const Footer = () => {

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

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
      <Back onClick={() => onClickBack()}/>
      <Chat onClick={() => onClickChat()}/>
      <Home onClick={() => onClickHome()} />
      <Write onClick={() => onClickWrite()}/>
      <Mypage onClick={() => onClickMy()}/>
    </Layout>
  )
}

export default Footer;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 30px;
  cursor: pointer;
`;