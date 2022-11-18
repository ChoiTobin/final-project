import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//mport { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow_back_ios.svg";
//import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import Modal from "../modalfolder/Modal";

const GlobalHeaderChat = () => {
  const navigate = useNavigate();

  const member = localStorage.getItem("user-nickname");
  const obj = member
  //JSON.parse(member);
  const nickname = obj

  return (
    <NavbarWrapper>
      <Navbar>
        <NavItem>
          <div onClick={() => navigate(-1)} />
          {nickname}
        </NavItem>
        <NavItem></NavItem>
        <NavItem>
          <div>승락버튼
              <Modal></Modal>

          </div>
          <ExitButton>나가기</ExitButton>
        </NavItem>
      </Navbar>
    </NavbarWrapper>
  );
};

export default GlobalHeaderChat;

const NavbarWrapper = styled.div`
  position: fixed;
  height: 4.8rem;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 5;
`;

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.headerMainColor};
  color: ${({ theme }) => theme.headerTxtColor};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  gap: 2rem;
  cursor: pointer;
  width: fit-content;
  color: black;
`;

const ExitButton = styled.button`
  background: #9e9e9e;
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 0.4rem;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 9.3rem;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 9.3rem;
  }
  @media (max-width: 767px) {
    /* Mobile */
    width: 8rem;
  }
`;