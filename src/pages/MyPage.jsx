import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deleteMyPet, __deleteMyPost, __getMyPage, __getMyPet, __getMyPost, __postMyImg } from "../redux/modules/mypageSlice";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import MyPosts from "../components/features/MyPosts";
import PetInfo from "../components/features/PetInfo"

// 전체 마이페이지 뷰 - 프로필사진, 닉네임, (평점), 내가 쓴 글 목록, 나의 반려동물 목록

// post{id}, myInfo{id, nickname, userImage}, myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}],
// myPic{userImage}, myPets: [{petId, name, age, categoryName}, {""}, {""}]

const MyPage = () => {
  const [updateMyPic, setUpdateMyPic] = useState("");
  const dispatch = useDispatch();

  const post = useSelector((state) => state.mypage.post);
  const myInfo = useSelector((state) => state.mypage.myInfo);
  const myPosts = useSelector((state) => state.mypage.myPost);
  const myPic = useSelector((state) => state.mypage.myPic);
  const myPets = useSelector((state) => state.mypage.myPets);
  
  console.log("post", post);
  console.log("myInfo", myInfo);
  console.log("myPosts", myPosts);
  console.log("myPic", myPic);
  console.log("myPets", myPets);

  // 프로필 사진 업로드
  const onSaveImg = () => {
    if (updateMyPic === "") {
      return alert("이미지를 선택해 주세요");
    }
    dispatch(__postMyImg(setUpdateMyPic("")));
  };

  // 나의 반려동물 삭제
  const onDeleteMyPet = (petId) => {
    dispatch(__deleteMyPet(petId));
    window.alert("반려동물 정보를 삭제하시겠습니까?");
    window.location.reload();
  };

  // 내가 쓴 글 삭제
  const onDeleteMyPost = (id) => {
    dispatch(__deleteMyPost(id));
    window.alert("해당 게시글을 삭제하시겠습니까?");
    window.location.reload();
  };

  // 마이페이지 회원정보 조회
  useEffect(() => {
    dispatch(__getMyPage);
  }, [dispatch]);

  return (
    <Layouts>
      <Header />
      <div className="user-info">
        <img src={myPic.userImage} alt="mypic-now" />
        <div>
          <UserImg src={myInfo.userImage} alt="userImg" />
          <input
            type="file"
            name="userImage"
            value={updateMyPic}
            onChange={(event) => {
              setUpdateMyPic(event.target.value);
            }}
          />
        </div>

        <div>
          <h2>{myInfo.nickname}</h2>
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
      {myPosts !== undefined &&
        myPosts.map((myPost) => {
          if (myPost !== "") {
            return (
              <div>
                <MyPosts key={myPost.id} myPost={myPost} />
                <div>
                  <button>수정하기</button>
                  <button onClick={() => onDeleteMyPost(post.id)}>
                    삭제하기
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <img src="/src/img/online.png" alt="posting-list" />
                <h2>아직 작성한 글이 없습니다</h2>
              </div>
            );
          }
        })}
      {/* 반려동물 정보 여러개 붙이기 - myPets: [{petId, name, age, categoryName}, {""}, {""}] */}
      {myPets !== undefined &&
        myPets.map((myPet) => {
          if (myPet !== "") {
            return (
              <div>
                <PetInfo key={myPet.petId} myPet={myPets} />
                <button>수정하기</button>
                <button onClick={() => onDeleteMyPet(myPet.petId)}>
                  삭제하기
                </button>
              </div>
            );
          } else {
            return (
              <div>
                <img src="/src/img/pets.png" alt="petInfo" />
                <h2>반려동물의 정보를 입력하세요</h2>
              </div>
            );
          }
        })}
      <Footer />
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