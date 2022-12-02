import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getMyPage } from "../../redux/modules/mypageSlice";

// 마이페이지 상단에 나타나는 회원정보

const UserInfo = ({ myInfo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMyPage());
  }, []);

  return (
    <div key={myInfo.id}>
      <div>
        <img src={myInfo.userImage} alt="profile-pic" />
      </div>
      <div>
        <h2>{myInfo.nickname}</h2>
      </div>
    </div>
  );
};

export default UserInfo;

