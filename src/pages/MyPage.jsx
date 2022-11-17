import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPage, __getMyPet, __getMyPost, __postMyImg } from "../redux/modules/mypageSlice";
import PetInfo from "../components/features/PetInfo";
import User from "../img/user.png";
import MyContent from "../components/features/MyContent";

// 전체 마이페이지 뷰 - 프로필사진, 닉네임, (평점), 내가 쓴 글 목록, 나의 반려동물 목록

// post{id}, myInfo{id, nickname, userImage}, myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}],
// myPic{userImage}, myPets: [{petId, name, age, categoryName}, {""}, {""}]

const MyPage = () => {
  const [userPic, setUserPic] = useState(false)
  const [updateMyPic, setUpdateMyPic] = useState("");
  const dispatch = useDispatch();

  const all = useSelector((state) => state.mypage);
  const post = useSelector((state) => state.mypage.post);
  const myInfo = useSelector((state) => state.mypage.myInfo);
  const myPosts = useSelector((state) => state.mypage.myPost);
  const myPic = useSelector((state) => state.mypage.myPic);
  const myPets = useSelector((state) => [state.mypage.myPets]);

  console.log("kkk", all);

  console.log("셀렉터post", post);
  console.log("셀렉터myInfo", myInfo);
  console.log("셀렉터myPosts", myPosts);
  console.log("셀렉터myPic", myPic);
  console.log("셀렉터myPets", myPets);

  // 프로필 사진 업로드
  const onSaveImg = () => {
    if (updateMyPic === "") {
      return alert("이미지를 선택해 주세요");
    }
    dispatch(__postMyImg(
      setUpdateMyPic("")
    ));
    setUserPic(true);
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
      <div className="user-info">
        <UserImg src={userPic ? myInfo.userImage : User} alt="pic"/>
        <div>
          <input
            type="file"
            name="userImage"
            value={myInfo.userImage}
            onChange={(event) => {
              setUpdateMyPic(event.target.value);
            }}
          />
        </div>

        <div>
          <h1>{myInfo.nickname}</h1>
          <button onClick={onSaveImg}>프로필 사진 수정</button>
        </div>
      </div>

      <div>
        <hr />
        <button>내가 쓴 글</button>
        <button>반려동물 정보</button>
        <hr />
      </div>

      {/* 내가 쓴 게시글 여러개 붙이기 - myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}] */}
      <MyContent myPost={myPosts} />

      <br/>
      {/* 반려동물 정보 여러개 붙이기 - myPets: [{petId, name, age, categoryName}, {""}, {""}] */}
      <div>
        <PetInfo myPets={myPets} />
      </div>
    </Layouts>
  );
};

export default MyPage;

const Layouts = styled.div`
  width: 95%;
  max-width: 414px;
  height: 785px;
  margin: auto;
  /* background-color: lightpink; */
`;

const UserImg = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 100%;
`;