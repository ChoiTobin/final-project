import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getMyPage } from "../../redux/modules/mypageSlice";

// 마이페이지 상단에 나타나는 회원정보
// myInfo{id, nickname, userImage}

const UserInfo = ({ myInfo }) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(__getMyPage())
  }, [])

  return (
    <div key={myInfo.id}>
      <UserImg>
        <img src={myInfo.userImage} alt="profile-pic" /></UserImg>
      <div>
        <h2>{myInfo.nickname}</h2>
        {/* <UserRate>회원평점 : {myInfo.rank}</UserRate> */}
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