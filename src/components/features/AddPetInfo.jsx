import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addMyPet } from "../../redux/modules/mypageSlice";

// 마이페이지 반려동물 정보 등록

const ProfileEdit = () => {
  const [myPet, setMyPet] = useState("");
  const dispatch = useDispatch();

  // 프로필 등록 - 반려동물 정보(이름, 나이, 종류)
  const onChangePetInfo = (event) => {
    const { name, value } = event.target;
    setMyPet({
      ...myPet,
      [name]: value,
    });
  };
  

  const onAddMyPets = (event) => {
    event.preventDefault();
    if (
      myPet.name === "" ||
      myPet.age === "" ||
      myPet.category === ""
    ) {
      return alert("모든 항목을 입력해주세요!");
    }
    dispatch(__addMyPet(myPet));
    window.location.reload("/mypage");
  };

  return (
    <Layout>
      {/* 등록 누르면 신규 정보 입력, 수정 버튼을 눌렀을 때, 인풋창에 수정하고 싶은 내용을 작성할 수 있는 페이지 */}
      <div className="edit-input">
        <div>
          <label>반려동물 이름 : &nbsp;</label>
          <input
            type="text"
            name="name"
            value={myPet.name || ""}
            onChange={onChangePetInfo}
          />
        </div>
        <br />
        <div>
          <label>반려동물 나이 : &nbsp;</label>
          <input
            type="text"
            name="age"
            value={myPet.age || ""}
            onChange={onChangePetInfo}
          />
        </div>
        <br />
        <div>
          <label>반려동물 종류 : &nbsp;</label>
          <select
            name="category"
            value={myPet.category || ""}
            onChange={onChangePetInfo}
          >
            <option defaultValue="all">전체</option>
            <option value="small">소형 - 6kg 이하 | 20cm 이하</option>
            <option value="medium">중형 - 8kg 이하 | 40cm 이하</option>
            <option value="big">대형 - 15kg 초과 | 80cm 초과</option>
          </select>
        </div>
        <br />
      </div>
      {/* 정보등록 */}
      <PlaceBtn>
        <button onClick={onAddMyPets}>추가하기</button>
      </PlaceBtn>
    </Layout>
  );
};

export default ProfileEdit;

const Layout = styled.div`
  width: 95%;
  max-width: 360px;
  height: 640px;
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