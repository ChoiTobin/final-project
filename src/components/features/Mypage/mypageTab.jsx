import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MyContent from "./MyContent";
import PetInfo from "./PetInfo";

export default function Mytab() {
  const myPosts = useSelector((state) => state.mypage.myPost);
  const myPets = useSelector((state) => state.mypage.myPets);

  console.log("포스트들어와라", myPosts);
  console.log("동물들도 들어와", myPets);

  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <TabTitle
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          내가 쓴 글
        </TabTitle>
      ),
      tabCont: <MyContent myPost={myPosts} />,
    },
    {
      tabTitle: (
        <TabTitle
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          반려동물 정보
        </TabTitle>
      ),
      tabCont: <PetInfo myPets={myPets} />,
    },
  ];

  return (
    <div>
      <TabMain className="tab is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </TabMain>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
}

const TabMain = styled.ul`
  width: 220px;
  height: 19.47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 12.59px;
  margin-top: 23.01px;
  margin-left: -10px;
`;

const TabTitle = styled.div`
  cursor: pointer;

  width: 200px;
  height: 19.47px;
  color: rgba(116, 116, 116, 1);
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 510;
  font-size: 14px;
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
