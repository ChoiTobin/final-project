import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getMyPage } from "../../redux/modules/mypageSlice";

// 마이페이지 상단에 나타나는 회원정보
const UserInfo = ({ mypage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMyPage());
  }, [dispatch]);

  return (
    <div>
      <div>
          {/* 등록된 유저이미지가 없으면 기본 이미지를 보여주고, 유저이미지가 있으면 그걸로 보여준다 */}
          {mypage.UserImg.length === 0 ? (
            <img src="../../img/user.png" alt="userImg" />
          ) : (
            <UserImg src={mypage.UserImg} alt="profile" />
          )}
      </div>
      <div>
        <h2>{mypage.nickname}</h2>
        <UserRate>회원평점 : {mypage.rank}</UserRate>
      </div>
      

    </div>
  );
}

export default UserInfo;

const UserImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const UserRate = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px 0 20px 80px;
`;