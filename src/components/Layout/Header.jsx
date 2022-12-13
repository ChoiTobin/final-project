import React from "react";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import Logo from "../../img/logo-header.png";

const Header = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/home");
  };
  
  return (
    <Layout>
      <img src={Logo} alt="" style={{ cursor: "pointer" }} onClick={() => onClickHome()}/>
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  background-color: #F6F0EE;
  width: 360px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 116px;

  /* border: 1px solid #ed9071; */
`;
