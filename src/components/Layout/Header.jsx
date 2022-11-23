import React from "react";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import { ReactComponent as BackArrow } from "../../img/backarrow.svg";
import { ReactComponent as Menu } from "../../img/menu.svg";
import Pet from "../../img/pet.png";

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
      <Logo src={Pet} alt="logo" onClick={() => onClickHome()} />
        <Menu/>
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 116px;

  /* border: 1px solid #ed9071; */
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`