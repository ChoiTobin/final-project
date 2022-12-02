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
      <div>
        <ul>
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
        </ul>
      </div>
    </>
  );
};

export default Footer;
