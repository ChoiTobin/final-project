import React from "react";
// 브라우저 여백 없애기
import "../../FullHTML.css";

const Layout = (props) => {
  return (
    <>
      <div className="layout">{props.children}</div>
    </>
  );
};

export default Layout;
