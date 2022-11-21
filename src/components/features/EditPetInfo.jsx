import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { __putMyPet } from "../../redux/modules/mypageSlice";

// 마이페이지 반려동물 정보 수정
// myPets: [{id, name, age, categoryName}, {""}, {""}]

const EditPetInfo = () => {
  const [myPet, setMyPet] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 프로필 등록 - 반려동물 정보(이름, 나이, 종류)
  const onChangePetInfo = (event) => {
    const { name, value } = event.target;
    console.log("온체인지 펫", event.target);
    setMyPet({
      ...myPet,
      [name]: value,
    });
  };

  // 프로필 수정 - 반려동물 정보(이름, 나이, 종류)
  const onUpdateMyPets = () => {
    console.log("마이펫 디스패치", myPet);
    dispatch(__putMyPet(myPet));
    window.alert("반려동물 정보수정이 완료되었습니다!");
    // navigate("/mypage");
  };

  return (
    <Layout>
      {/* 등록 누르면 신규 정보 입력, 수정 버튼을 눌렀을 때, 인풋창에 수정하고 싶은 내용을 작성할 수 있는 페이지 */}
      <div className="edit-input">
        <div>
          <label>반려동물 이름 : &nbsp;</label>
          <input type="text" onChange={onChangePetInfo} name="name" value={myPet.name} />
        </div>
        <br />
        <div>
          <label>반려동물 나이 : &nbsp;</label>
          <input type="text" onChange={onChangePetInfo} name="age" value={myPet.age} />
        </div>
        <br />
        <div>
          <label>반려동물 종류 : &nbsp;</label>
          <select
            name="category"
            value={myPet.category}
            onChange={onChangePetInfo}
          >
            <option default value="all">전체</option>
            <option value="small">소형 - 6kg 이하 | 20cm 이하</option>
            <option value="medium">중형 - 8kg 이하 | 40cm 이하</option>
            <option value="big">대형 - 15kg 초과 | 80cm 초과</option>
          </select>
        </div>
        <br />
      </div>
      {/* 정보등록 */}
      <PlaceBtn>
        <button onClick={onUpdateMyPets}>완료</button>
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

export default EditPetInfo;

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