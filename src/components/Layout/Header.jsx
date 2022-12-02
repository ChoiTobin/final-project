import React from "react";
import { useNavigate } from "react-router-dom/dist";
import { ReactComponent as BackArrow } from "../../img/backarrow.svg";
import { ReactComponent as Menu } from "../../img/menu.svg";
import { ReactComponent as Logo } from "../../img/headerLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const onClickMove = () => {
    navigate(-1);
  };

  const onClickHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <BackArrow onClick={() => onClickMove()} />
      {/* <h2 onClick={() => onClickHome()}>Cmung</h2> */}
      <Logo
        onClick={() => onClickHome()}
        style={{ margin: "20.41px -10px 13.59px" }}
      />
      <Menu />
    </div>
  );
};

export default Header;
