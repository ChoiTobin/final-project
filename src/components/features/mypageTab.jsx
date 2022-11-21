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
      <ul className="tab is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle
        })}
      </ul>
      <div>
        {tabContArr[activeIndex].tabCont}
      </div>
    </div>
  )
}

const TabTitle = styled.li`
  cursor: pointer;
`