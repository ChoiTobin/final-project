import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getMyPage, __getMyPet, __getMyPost } from "../redux/modules/mypageSlice";
import Mytab from "../components/features/Mypage/mypageTab";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styled from "styled-components";
import { ReactComponent as Kakao } from "../img/myKakao.svg";
import { ReactComponent as NoticeArrow } from "../img/noticeArrow.svg";
import User from "../img/user.png";
import Banner from "../img/banner.png";
import ModalPortal from "../components/element/ModalPortal";
import AddPetInfo from "../components/features/Mypage/AddPetInfo";
import "../components/element/MyPetModal.css";

// 전체 마이페이지 뷰 - 프로필사진, 닉네임, (평점), 내가 쓴 글 목록, 나의 반려동물 목록

const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const [pets, setPets] = useState(false)

  const openPetModal = () => {
    setPets(true)
  }

  const closePetModal = () => {
    setPets(false)
  }

  const Logout = () => {
    localStorage.clear()
    navigate("/")
  }

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
        <Notice>
          <span>공지</span>
          <p>리뉴얼 업데이트 1.4v 관련</p>
          <NoticeArrow style={{ marginLeft: "82.78px" }} />
        </Notice>
        <Title>
          <UserImg
            // src={myInfo.userImage}
            src={myInfo.userImage !== undefined ? myInfo.userImage : User}
            alt="myPic"
          />
          <Info>
            <Account>
              <UserInfo>
                <span>{myInfo.nickname}</span>
                <Kakao />
              </UserInfo>
              <span
                style={{
                  fontSize: "15px",
                  color: "#989593",
                  marginBottom: "10.04px",
                }}
              >
                평점: ⭐⭐⭐⭐⭐
              </span>
            </Account>
          </Info>
          <StateBtn>
            <button
              onClick={Logout}
              style={{
                color: "rgba(185, 185, 185, 1)",
                border: "1px solid rgba(185, 185, 185, 1)",
              }}
            >
              로그아웃
            </button>
            <button
              style={{
                color: "rgba(108, 108, 108, 1)",
                border: "1px solid rgba(108, 108, 108, 1)",
              }}
            >
              사진수정
            </button>
          </StateBtn>
        </Title>
        <PetBtn>
          <button onClick={openPetModal}>내 반려동물 정보 등록하기</button>
          {pets && (
            <ModalPortal>
              <div className="MyModal">
                <AddPetInfo onClose={closePetModal}/>
              </div>
            </ModalPortal>
          )}
        </PetBtn>
        <Ad>
          <img src={Banner} alt="banner" />
        </Ad>

        <div></div>
      </div>

      <div>
        <Mytab />
      </div>
      <Footer />
    </Layouts>
  );
};

export default MyPage;

const Layouts = styled.div`
  max-width: 360px;
  height: 640px;
  margin: auto;
  background-color: #f6f0ee;
`;

const Notice = styled.div`
  width: 314.39px;
  height: 27.84px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px auto 28.07px;

  border: 1px solid rgba(173, 173, 173, 1);
  border-radius: 4px;

  span {
    font-family: "Pretendard", sans-serif;
    font-size: 13px;
    font-weight: 900;
    line-height: 15.51px;
    color: rgba(238, 139, 106, 1);
    /* margin-left: 15.68px; */
  }

  p {
    font-family: "Pretendard", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 15.51px;
    color: rgba(79, 79, 79, 1);

    margin-left: 30.84px;
  }
`;

const Title = styled.div`
  width: 314.39px;
  height: 58.84px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 28.07px 23.8px 10.04px 25.79px;
  gap: 13.45px;
`;

const PetBtn = styled.div`
  width: 314.39px;
  height: 33.68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto 19.84px;
  background-color: rgba(237, 144, 113, 1);
  border: none;
  border-radius: 1px;
  button {
    color: #fff;
    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    font-weight: 450;
    line-height: 18.15px;
    border: none;
    background-color: transparent;
  }
`;

const UserImg = styled.img`
  width: 57.17px;
  height: 56.5px;
  border-radius: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  width: 126.91px;
  height: 58.84px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 13.45px;
  margin-right: 8px;

  button {
    width: 135.78px;
    height: 21.61px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-family: "Pretendard", sans-serif;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 3.9px;
    border-radius: 1px;
    border: none;
  }
`;

const StateBtn = styled.div`
  width: 79.09px;
  height: 52.91px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  button {
    width: 79.09px;
    height: 21px;
    font-family: "Pretendard", sans-serif;
    font-weight: 700;
    font-size: 11px;
    background-color: transparent;
    border-radius: 1px;
  }
`;

const Account = styled.div`
  width: 144.47px;
  height: 53.39px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 5.96px;
  span {
    font-family: "Pretendard", sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 17.9px;
    color: rgba(0, 0, 0, 0.38);
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-family: "Pretendard", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23.87px;
    margin-right: 13.09px;
    color: rgba(51, 51, 51, 1);
  }
`;

const Ad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
