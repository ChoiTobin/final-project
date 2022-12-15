import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MyContent from "./MyContent";
import PetInfo from "./PetInfo";

// 마이페이지에서 반려동물과 내가 쓴 글을 볼 수 있는 탭
export default function Mytab() {
  const myPosts = useSelector((state) => state.mypage.myPost);
  const myPets = useSelector((state) => state.mypage.myPets);

  console.log("마이탭포스트", myPosts);
  console.log("마이탭펫등록", myPets);
  
  const [activeIndex, setActiveIndex] = useState(0);

  const [colors, setColors] = useState({
    post: true,
    pet: false,
  })

  const tabClickHandler = (index) => {
    setActiveIndex(index);
    setColors(!colors)
  };
      //
  const tabContArr = [
    {
      tabTitle: (
        <TabTitle
          name="post"
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => {
            tabClickHandler(0);
          }}
          style={colors ? { color: "#3C3C3C" } : { color: "#787878" }}
        >
          내 게시글
        </TabTitle>
      ),
      tabCont: <MyContent myPost={myPosts} />,
    },
    {
      tabTitle: (
        <TabTitle
          name="pet"
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => {
            tabClickHandler(1);
          }}
          style={colors ? { color: "#787878" } : { color: "#3C3C3C" }}
        >
          나의 반려동물
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
  width: 260px;
  height: 19.47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-top: 15.01px;
  margin-left: -22px;
`;

const TabTitle = styled.div`
  cursor: pointer;

  width: 250px;
  height: 19.47px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 16px;
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
