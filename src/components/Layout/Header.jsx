import React from "react";
import { useNavigate } from "react-router-dom/dist";
import { ReactComponent as Logo } from "../../img/headerLogo.svg";

const Header = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/home");
  };

  return (
    <div>
      {/* <h2 onClick={() => onClickHome()}>Cmung</h2> */}
      <Logo
        onClick={() => onClickHome()}
        style={{ margin: "20.41px -10px 13.59px" }}
      />
    </div>
  );
};

export default Header;
