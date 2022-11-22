import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPage, __getMyPet, __getMyPost } from "../redux/modules/mypageSlice";
import User from "../img/user.png";
import AddPetInfo from "../components/features/AddPetInfo"
import Mytab from "../components/features/MypageTab";
import useModal from "../components/modal/useModal";
import Modal from "../components/modal/modal";
import AddUserPic from "../components/features/AddUserPic";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

// 전체 마이페이지 뷰 - 프로필사진, 닉네임, (평점), 내가 쓴 글 목록, 나의 반려동물 목록

// post{id}, myInfo{id, nickname, userImage}, myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}],
// myPic{userImage}, myPets: [{id, name, age, categoryName}, {""}, {""}]

const MyPage = () => {
  const dispatch = useDispatch();

  const all = useSelector((state) => state.mypage);
  const post = useSelector((state) => state.mypage.post);
  const myInfo = useSelector((state) => state.mypage.myInfo);
  const myPosts = useSelector((state) => state.mypage.myPost);
  const myPic = useSelector((state) => state.mypage.myPic);
  const myPets = useSelector((state) => state.mypage.myPets);

  console.log("전체 셀렉터", all);

  console.log("셀렉터post", post);
  console.log("셀렉터myInfo", myInfo);
  console.log("셀렉터myPosts", myPosts);
  console.log("셀렉터myPic", myPic);
  console.log("셀렉터myPets", myPets);

  console.log("프사 이미지 가져오나", myInfo.userImage);

  const [modalOption, showModal] = useModal();

    const onClickPic = useCallback(() => {
      showModal(
        true,
        "프로필 사진 변경",
        () => console.log("모달 on"),
        null,
        <AddUserPic />
      )
    }, [modalOption])

  const onClickPet = useCallback(() => {
    showModal(
      true,
      "반려동물 정보 등록",
      () => console.log("모달 ON"),
      null,
      <AddPetInfo />
    );
  }, [modalOption]);

  // 마이페이지 회원정보 조회
  useEffect(() => {
    dispatch(__getMyPage());
  }, []);

  // 마이페이지 내가 쓴 글 조회
  useEffect(() => {
    dispatch(__getMyPost());
  }, []);

  // 반려동물 정보 조회
  useEffect(() => {
    dispatch(__getMyPet());
  }, []);

  return (
    <Layouts>
      <Header/>
      <div className="user-info">
        <UserImg
          // src={myInfo.userImage}
          src={myInfo.userImage !== "" ? myInfo.userImage : User}
          alt="pic"
        />
        <button onClick={onClickPic}>프로필사진 변경</button>
        <Modal modalOption={modalOption} />

        <div>
          <h1>{myInfo.nickname}</h1>
          <div>
            <button onClick={onClickPet}>반려동물 등록</button>
            <Modal modalOption={modalOption} />
          </div>
        </div>
      </div>

      <div>
        <Mytab />
      </div>

      {/* 내가 쓴 게시글 여러개 붙이기 - myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}] */}
      {/* <MyContent myPost={myPosts} /> */}

      {/* <br /> */}
      {/* 반려동물 정보 여러개 붙이기 - myPets: [{id, name, age, categoryName}, {""}, {""}] */}
      {/* <div>
        <PetInfo myPets={myPets} />
      </div> */}
      <Footer/>
    </Layouts>
  );
};

export default MyPage;

const Layouts = styled.div`
  width: 95%;
  max-width: 360px;
  height: 640px;
  margin: auto;
  background-color: lightpink;
`;

const UserImg = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 100%;
`;