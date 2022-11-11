import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getMyPage } from "../../redux/modules/mypageSlice";
import { useNavigate } from "react-router-dom";

// 여기에 있는 마이페이지 프로필에 담기는 정보들을 props로 다른 컴포넌트에 전달한다. (자식이 부모한테)
// 받는(다른) 컴포넌트에서는 import해서 사용한다.
const Profile = ({ myInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // GET으로 리스트에 붙일 마이페이지 정보들을 받아와서 브라우저에 뿌려준다.
  useEffect(() => {
    dispatch(__getMyPage());
  }, [dispatch]);

  return (
    <div>
      <Account className="top-info">
        <div>
          <UserImg src={myInfo.UserImg} alt="profile" />
        </div>
        <div>
          <h2>{myInfo.nickname}</h2>

          <div className="mypetInfo">
            <div>
              <h3>{myInfo.name}</h3>

              {/* 마이페이지에서 반려동물 정보 수정할 수 있는 버튼 */}
              <div className="petinfo-btn">
                <button onClick={()=> {navigate("")}}>등록</button>
                <button>수정</button>
                <button>삭제</button>
              </div>
            </div>

            <span>
              {myInfo.age}, {myInfo.catecory}
            </span>
          </div>
        </div>
      </Account>
      <UserRate className="rateSelect">
        <span>평점 : {myInfo.rate}</span>
      </UserRate>
    </div>
  );
};

export default Profile;

const Account = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const UserImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const UserRate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px 0 20px 80px;
`;
