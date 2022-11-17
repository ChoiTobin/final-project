import React from "react";
import styled from "styled-components";

// 마이페이지 상단에 나타나는 회원정보
// myInfo{id, nickname, userImage}

const UserInfo = ({ myInfo }) => {
  
  return (
    <div key={myInfo.id}>
      <UserImg>
        {/* 기본 이미지 디폴트값으로 주고, 유저이미지가 있으면 그걸로 보여준 후 수정기능이 들어갈 수 있도록 */}
        {myInfo.userImage !== undefined ? (<img src={myInfo.userImage} alt="profile-pic"/>) : (<img src="/src/img/user.png" alt="myPic"/>)}
      </UserImg>
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