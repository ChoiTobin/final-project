import React from "react";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import { ReactComponent as BackArrow } from "../../img/backarrow.svg";
import { ReactComponent as Menu } from "../../img/menu.svg";
import { ReactComponent as Logo } from "../../img/logoImg.svg";

const Header = () => {
  const navigate = useNavigate();
  const onClickMove = () => {
    navigate(-1);
  };
  
  const onClickHome = () => {
    navigate("/");
  };
  
  return (
    <Layout>
        <BackArrow onClick={() => onClickMove()}/>
      {/* <h2 onClick={() => onClickHome()}>Cmung</h2> */}
      <Logo onClick={() => onClickHome()} style={{margin: "20.41px -10px 13.59px"}} />
        <Menu/>
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  /* background-color: #F6F0EE; */
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 116px;

  /* border: 1px solid #ed9071; */
`;