import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPage, __getMyPet, __getMyPost } from "../redux/modules/mypageSlice";
import Mytab from "../components/features/Mypage/mypageTab";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ModalPortal from "../components/element/ModalPortal";
import AddPetInfo from "../components/features/Mypage/AddPetInfo";
import AddUserPic from "../components/features/Mypage/AddUserPic";
import Notice from "../components/features/Mypage/Notice"
import styled from "styled-components";
import "../components/element/MyPetModal.css";
import MyKakao from "../img/my-kakao.png";
import { ReactComponent as NoticeArrow } from "../img/my-arrow.svg";
import User from "../img/user.png"
import Banner from "../img/banner.png";
// 별추가
import { FaStar } from 'react-icons/fa';
// 전체 마이페이지 뷰 - 프로필사진, 닉네임, (평점), 내가 쓴 글 목록, 나의 반려동물 목록

const MyPage = () => {
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.mypage.myInfo);

  //별점 배열
  const ARRAY = [0, 1, 2, 3, 4];

  const [notie, setNotie] = useState(false);

  const openNotieModal = () => {
    setNotie(true);
  };

  const closeNotieModal = () => {
    setNotie(false);
  };

  const [photo, setPhoto] = useState(false);

  const openPicModal = () => {
    setPhoto(true);
  };

  const closePicModal = () => {
    setPhoto(false);
  };

  const [pets, setPets] = useState(false);

  const openPetModal = () => {
    setPets(true);
  };

  const closePetModal = () => {
    setPets(false);
  };

  // 로그아웃
  const Logout = () => {
    window.confirm("로그아웃 하시겠습니까?")
    localStorage.clear();
    window.alert("로그아웃되었습니다!")
    window.location.replace('/');
  };

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
        <Noticed onClick={openNotieModal}>
          <span>공지</span>
          <p>리뉴얼 업데이트 1.4v 관련</p>
          <NoticeArrow style={{ marginLeft: "82.78px" }}/>
        </Noticed>
        {notie && (
          <ModalPortal>
            <div className="MyModal">
              <Notice onClose={closeNotieModal} />
            </div>
          </ModalPortal>
        )}
        <Title>
          <UserImg
            src={myInfo.userImage !== undefined ? myInfo.userImage : User}
            alt="myPic"
          />
          <Info>
            <Account>
              <UserInfo>
                <span>{myInfo.nickname}</span>
                <img src={MyKakao} alt="" />
              </UserInfo>
              <span
                style={{
                  fontSize: "15px",
                  color: "#989593",
                  marginBottom: "10.04px",
                }}
              >
                평점:
                {ARRAY.map((id, i) => {
                  return (
                    //레이팅이 아닐때는 색깔이없는거고 레이팅이면 노란색으로 나오게
                    <FaStar
                      key={id}
                      style={i < myInfo.rating ? { color: "#fcc419" } : {}}
                    />
                  );
                })}
                {myInfo.rating}
              </span>
            </Account>
          </Info>
          <StateBtn>
            <button
              onClick={Logout}
              style={{
                color: "#A1A1A1",
                border: "1px solid #A1A1A1",
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
                  <AddUserPic onClose={closePicModal} />
                </div>
              </ModalPortal>
            )}
          </StateBtn>
        </Title>
        <PetBtn>
          <button onClick={openPetModal}>내 반려동물 정보 등록하기</button>
          {pets && (
            <ModalPortal>
              <div className="MyModal">
                <AddPetInfo onClose={closePetModal} />
              </div>
            </ModalPortal>
          )}
        </PetBtn>
        <Ad>
          <a
            href="https://www.instagram.com/cmung.official/"
            style={{ cursor: "pointer" }}
          >
            <img src={Banner} alt="banner" />
          </a>
          {/* <Banner/> */}
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

const Noticed = styled.div`
  width: 314.39px;
  height: 27.84px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px auto 28.07px;

  border: 1px solid rgba(173, 173, 173, 1);
  border-radius: 4px;

  cursor: pointer;

  span {
    font-family: "Pretendard", sans-serif;
    font-size: 13px;
    font-weight: 900;
    line-height: 15.51px;
    color: rgba(238, 139, 106, 1);
  }

  p {
    font-family: "Pretendard", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 15.51px;
    color: rgba(79, 79, 79, 1);

    margin-left: 30.84px;
    margin-top: 15px;
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
  justify-content: center;
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