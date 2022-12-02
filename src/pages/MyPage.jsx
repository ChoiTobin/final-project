import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getMyPage, __getMyPet, __getMyPost } from "../redux/modules/mypageSlice";
import Mytab from "../components/features/Mypage/mypageTab";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { ReactComponent as MyKakao } from "../img/kakaoMy.svg";
import { ReactComponent as NoticeArrow } from "../img/noticeArrow.svg";
import User from "../img/user.png";
import Banner from "../img/banner.png";
import ModalPortal from "../components/element/ModalPortal";
import AddPetInfo from "../components/features/Mypage/AddPetInfo";
import "../components/element/MyPetModal.css";
import AddUserPic from "../components/features/Mypage/AddUserPic";

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

  const [photo, setPhoto] = useState(false);

  const openPicModal = () => {
    setPhoto(true)
  }

  const closePicModal = () => {
    setPhoto(false)
  }

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
    <div>
      <Header />
      <div className="user-info">
        <div>
          <span>공지</span>
          <p>리뉴얼 업데이트 1.4v 관련</p>
          <NoticeArrow style={{ marginLeft: "82.78px" }} />
        </div>
        <div>
          <UserImg
            // src={myInfo.userImage}
            src={myInfo.userImage !== undefined ? myInfo.userImage : User}
            alt="myPic"
          />
          <div>
            <div>
              <div>
                <span>{myInfo.nickname}</span>
                <MyKakao />
              </div>
              <span
                style={{
                  fontSize: "15px",
                  color: "#989593",
                  marginBottom: "10.04px",
                }}
              >
                평점: ⭐⭐⭐⭐⭐
              </span>
            </div>
          </div>
          <div>
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
              onClick={openPicModal}
              style={{
                color: "rgba(108, 108, 108, 1)",
                border: "1px solid rgba(108, 108, 108, 1)",
              }}
            >
              사진수정
            </button>
            {photo && (
              <ModalPortal>
                <div className="MyModal">
                  <AddUserPic onClose={closePicModal}/>
                </div>                
              </ModalPortal>
            )}
          </div>
        </div>
        <div>
          <button onClick={openPetModal}>내 반려동물 정보 등록하기</button>
          {pets && (
            <ModalPortal>
              <div className="MyModal">
                <AddPetInfo onClose={closePetModal}/>
              </div>
            </ModalPortal>
          )}
        </div>
        <div>
          <img src={Banner} alt="banner" />
        </div>
      </div>

      <div>
        <Mytab />
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;


const UserImg = styled.img`
  width: 57.17px;
  height: 56.5px;
  border-radius: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;