import React from "react";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../img/logo-header.svg";

const Header = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/home");
  };
  
  return (
    <Layout>
      <Logo
        onClick={() => onClickHome()}
        style={{ margin: "20.41px -10px 13.59px" }}
      />
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  background-color: #F6F0EE;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 116px;

  /* border: 1px solid #ed9071; */
`;
