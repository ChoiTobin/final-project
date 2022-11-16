import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../components/features/UserInfo";
import MyPosts from "../components/features/MyPosts";
import PetInfo from "../components/features/PetInfo";
import Portal from "../components/modal/Portal";
import Modal from "../components/modal/Modal";
import { __deleteMyPet } from "../redux/modules/mypageSlice";

// 전체 마이페이지 뷰
const MyPage = (props) => {
  const mypage = useSelector((state) => state.mypage.mypage);
  const mypost = useSelector((state) => state.mypage.mypost);
  console.log("마이페이지 정보", mypage);
  console.log("내가쓴 글 정보", mypost);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // 모달창 띄우기 - 수정
  const [modalOn, setModalOn] = useState(false);
  const handleModal = () => {
    setModalOn(!modalOn);
  }

  // 반려동물 정보 삭제
  const onDeletePetInfo = () => {
    dispatch(__deleteMyPet(mypage.petId))
    window.confirm("정말로 삭제하시겠습니까?")
    navigate("/mypage")
  }

  const [toggle, setToggle] = useState("true");

  const onToggleBtn = () => {
    setToggle(!toggle)
  }


  return (
    <Layouts>
      <div className="user-info">
        {/* <UserInfo key={mypage.userId} mypage={mypage}  /> */}
        <button>프로필 사진</button>
      </div>

      <div>
        <hr />
        <button onClick={onToggleBtn}>내가 쓴 글</button>
        <button onClick={onToggleBtn}>반려동물 정보</button>
        <hr/>
      </div>
      
      <div toggle={toggle}>
        {/* 내가 쓴 게시글 여러개 붙이기 */}
        {/* {mypost.map((post) => {
          if (post.length !== 0)
            return (
              <MyPosts key={post.postId} post={post}/>
            )
        })} */}
      </div>

      <div toggle={toggle}>
        {/* 반려동물 정보 여러개 붙이기 */}
        {/* {mypage.map((petInfo) => {
          if (petInfo.length !== 0)
          return (
            <PetInfo key={petInfo.petId} petInfo={petInfo}/>
          )
        })} */}
        <div>
          <button onClick={handleModal}>수정</button>
          <button onClick={onDeletePetInfo}>삭제</button>
        </div>
        <Portal>{modalOn && <Modal setModalOn={setModalOn}/>}</Portal>
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