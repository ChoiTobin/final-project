import React from "react";
import styled from "styled-components";
// 브라우저 여백 없애기
import "../../FullHTML.css";

const Layout = (props) => {
  return (
    <>
      <Layouts className="layout">{props.children}</Layouts>
    </>
  );
};

export default Layout;

const Layouts = styled.div`
  max-width: 360px;
  height: 640px;
  margin: auto;
  /* background-color: #f6f0ee; */
`;
