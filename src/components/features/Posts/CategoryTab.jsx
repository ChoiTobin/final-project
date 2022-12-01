import React, { useState } from "react";
import styled from "styled-components";

const Footer = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabArr = [
    { name: "전체", content: "전체" },
    { name: "대형", content: "대형" },
    { name: "중형", content: "중형" },
    { name: "소형", content: "소형" },
  ];

  const selectTabHandler = (index) => {
    // 함수에도 index를 전달한다
    setCurrentTab(index);
  };

  return (
    <>
      <Layout>
        <Tab>
          {tabArr.map((page, index) => {
            return (
              // 삼항연산자 렌더링
              <li
                className={currentTab === index ? "submenu focused" : "submenu"}
                // onClick event에서 index를 매개변수로 전달해준다
                onClick={() => selectTabHandler(index)}
              >
                {page.name}
              </li>
            );
          })}
        </Tab>
      </Layout>
    </>
  );
};

export default Footer;

const Layout = styled.div`
  height: 55.7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 58px;
  cursor: pointer;
  background-color: #fff;

  border: 1px solid #ed9071;
`;

const Tab = styled.ul`
  background-color: #fff;
  display: flex;
  padding: 0px;

  .submenu {
    list-style: none;
    color: #fff;
    font-weight: bold;
    width: 100%;
    border: none;
    padding: 15px 10px;
    cursor: pointer;
    text-align: center;
  }
  .focused {
    background-color: #ed9071;
    color: rgba(255, 255, 255, 1);
    transition: 0.3s;
  }
`;
