import React from "react";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import { ReactComponent as ArrowBack } from "../../img/arrow_back.svg";
import { ReactComponent as Logout } from "../../img/logout.svg";

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
      <button onClick={() => onClickMove()}>
        <ArrowBack />
      </button>
      <h2 onClick={() => onClickHome()}>Cmung</h2>
      <button>
        <Logout />
      </button>
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 90px;
`;