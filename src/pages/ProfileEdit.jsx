import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { __deleteMyPet } from "../redux/modules/mypageSlice";

const ProfileEdit = () => {

  const [profile, setProfile] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const petInfos = useSelector((state) => state.mypage.profile)

  const onChangeProfile = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const ondeletePetInfo = (petId) => {
    dispatchEvent(__deleteMyPet(petId))
    window.alert("반려동물 정보를 삭제하시겠습니까?")
    navigate("/mypage")
  }

  return (
    <Layout>
      <Header />
      <div className="profile">
        <Account className="top-info">
          <div>
            <UserImg
              src="https://cdn-icons-png.flaticon.com/512/366/366266.png"
              alt="profile"
            />
          </div>
          <div className="name">
            <h2>푸딩이언니</h2>
            <h3>푸딩</h3>
            <span>푸들/3살/소형견</span>
          </div>
        </Account>
        <div>
          <EditProfile>이미지 수정</EditProfile>
        </div>
      </div>
      <br />
      <br />
      <div className="edit-input">
        <div>
          <label>닉네임 : &nbsp;</label>
          <input
            type="text"
            onChange={onChangeProfile}
            placeholder="ex) 푸딩이 언니"
          />
        </div>
        <br />
        <div>
          <label>반려동물 이름 : &nbsp;</label>
          <input
            type="text"
            onChange={onChangeProfile}
            placeholder="ex) 푸딩"
          />
        </div>
        <br />
        <div>
          <label>반려동물 나이 : &nbsp;</label>
          <input type="text" onChange={onChangeProfile} placeholder="4살" />
        </div>
        <br />
        <div>
          <label>반려동물 종류 : &nbsp;</label>
          <select onChange={onChangeProfile}>
            <option value="big">대형견</option>
            <option value="medium">중형견</option>
            <option value="small">소형견</option>
          </select>
        </div>
        <br />
      </div>
      <PlaceBtn>
        <button>수정완료</button>
        <button onClick={() => {navigate(-1)}}>취소</button>
        <button onClick={() => ondeletePetInfo(profile.petId)}>삭제</button>
      </PlaceBtn>
      <Footer />
    </Layout>
  );
}

export default ProfileEdit;

const Layout = styled.div`
  width: 95%;
  max-width: 414px;
  height: 785px;
  margin: auto;
`;

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

const EditProfile = styled.button`
  float: left;
  margin-left: 100px;
`;

const PlaceBtn = styled.div`
  width: 200px;
  height: 40px;
  gap: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 10px auto 20px;
`;