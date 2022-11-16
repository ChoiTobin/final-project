import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { __putMyPet } from "../redux/modules/mypageSlice";
import Image from "../components/element/Image";

// 마이페이지 반려동물 정보 수정
const ProfileEdit = () => {
  const [petInfo, setPetInfo] = useState({
    name: "",
    age: 0,
    category: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangePetInfo = (event) => {
    const { name, value } = event.target;
    setPetInfo({
      ...petInfo,
      [name]: value,
    })

  }

  // 프로필 수정 - 반려동물 정보(이름, 나이, 종류)
  const onUpdatePetInfo = () => {
    dispatch(__putMyPet(petInfo));
    window.alert("반려동물 정보수정이 완료되었습니다!")
    navigate("/mypage");
  };

  return (
    <Layout>
      <div className="user-img">
        <Image />
      </div>
      {/* 등록 누르면 신규 정보 입력, 수정 버튼을 눌렀을 때, 인풋창에 수정하고 싶은 내용을 작성할 수 있는 페이지 */}
      <div className="edit-input">
        <div>
          <label>반려동물 이름 : &nbsp;</label>
          <input
            type="text"
            name="name"
            value={petInfo.name}
            onChange={onChangePetInfo}
            placeholder="ex) 푸딩"
          />
        </div>
        <br />
        <div>
          <label>반려동물 나이 : &nbsp;</label>
          <input
            type="text"
            name="age"
            value={petInfo.age}
            onChange={onChangePetInfo}
            placeholder="4살"
          />{" "}
          살
        </div>
        <br />
        <div>
          <label>반려동물 종류 : &nbsp;</label>
          <select
            name="category"
            value={petInfo.category}
            onChange={onChangePetInfo}
          >
            <option value="big">대형견</option>
            <option value="medium">중형견</option>
            <option value="small">소형견</option>
          </select>
        </div>
        <br />
      </div>
      {/* 정보수정 */}
      <PlaceBtn>
        <button onClick={onUpdatePetInfo}>저장</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          취소
        </button>
      </PlaceBtn>
    </Layout>
  );
};

export default ProfileEdit;

const Layout = styled.div`
  width: 95%;
  max-width: 414px;
  height: 785px;
  margin: auto;
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
