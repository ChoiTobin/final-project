import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MyContent from "./MyContent";
import PetInfo from "./PetInfo";

export default function Mytab() {
  const myPosts = useSelector((state) => state.mypage.myPost);
  const myPets = useSelector((state) => state.mypage.myPets);

  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
    
  };

  const tabContArr = [
    {
      tabTitle: (
        <TabTitle className={activeIndex === 0 ? "is-active" : ""} onClick={() => tabClickHandler(0)}>내 게시글</TabTitle>
      ),
      tabCont: (
        <MyContent myPost={myPosts} />
      )
    },
    {
      tabTitle: (
        <TabTitle className={activeIndex === 1 ? "is-active" : ""} onClick={() => tabClickHandler(1)}>나의 반려동물</TabTitle>
      ),
      tabCont: (
        <PetInfo myPets={myPets} />
      )
    }
  ];

  return (
    <div>
      <TabMain className="tab is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle
        })}
      </TabMain>
      <div>
        {tabContArr[activeIndex].tabCont}
      </div>
    </div>
  )
}


const TabMain = styled.ul`
  height: 49px;
  border-top: 1px solid #f1b5a2;
  border-bottom: 1px solid #f1b5a2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 15.67px;
`;

const TabTitle = styled.div`
  cursor: pointer;

  width: 135px;
  height: 23.13px;
  color: #ed9071;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 800;
  font-size: 12px;
  border: 1px solid #ed9071;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;