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
import { useNavigate } from "react-router-dom";
import { ReactComponent as Kakao } from "../img/kakao.svg";
import { ReactComponent as Banner } from "../img/banner.svg";

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

  const navigate = useNavigate();

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
      <Header />
      <div className="user-info">
        <Title>
          <UserImg
            // src={myInfo.userImage}
            src={myInfo.userImage !== undefined ? myInfo.userImage : User}
            alt="myPic"
          />
          <Info>
            <Account>
              <UserInfo>
                <span style={{ fontSize: "20px", marginRight: "39.48px" }}>
                  {myInfo.nickname}
                </span>
                <Kakao style={{ width: "22.87px", height: "21.08px" }} />
              </UserInfo>
              <span
                style={{
                  fontSize: "15px",
                  color: "#989593",
                  marginBottom: "12.02px",
                }}
              >
                평점: ⭐⭐⭐⭐⭐
              </span>
            </Account>

            <button
              onClick={() => {
                navigate(`/signout`);
              }}
              style={{
                color: "#B9B9B9",
                border: "1px solid #B9B9B9",
                borderRadius: "1px",
              }}
            >
              로그아웃
            </button>
            <button
              onClick={onClickPic}
              style={{
                color: "#6C6C6C",
                border: "1px solid #6C6C6C",
                borderRadius: "1px",
              }}
            >
              사진수정
            </button>
            <Modal modalOption={modalOption} />
            <div>
              <button
                onClick={onClickPet}
                style={{
                  color: "#ED9071",
                  border: "1px solid #ED9071",
                  borderRadius: "1px",
                }}
              >
                반려동물 등록
              </button>
              <Modal modalOption={modalOption} />
            </div>
          </Info>
        </Title>
        <Ad>
          <Banner />
        </Ad>

        <div></div>
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
      <Footer />
    </Layouts>
  );
};

export default MyPage;

const Layouts = styled.div`
  max-width: 360px;
  height: 640px;
  margin: auto;
  background-color: #F6F0EE;
`;

const Title = styled.div`
  width: 275.8px;
  height: 129.04px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 45.82px auto 30.5px;
  gap: 10px;
`;

const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  width: 144.47px;
  height: 103.57px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 135.78px;
    height: 21.61px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-family: "SFPro", sans-serif;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 3.9px;
    border-radius: 1px;
    border: none;
  }
`;

const Account = styled.div`
  width: 144.47px;
  height: 53.39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.96px;
  /* justify-content: center; */
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */

  span {
    font-family: 'SFPro', sans-serif;
    font-weight: 700;
  }
`;

const AddPet = styled.div`
  
`;

const Ad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;