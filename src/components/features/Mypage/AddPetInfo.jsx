import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addMyPet } from "../../../redux/modules/mypageSlice";
import "../../element/MyModal.css";

// 마이페이지 반려동물 정보 등록

const AddPetInfo = ({ onClose }) => {
  const [myPet, setMyPet] = useState("");
  const dispatch = useDispatch();

  const myPets = useSelector((state) => state.mypage.myPets);

  // 프로필 등록 - 반려동물 정보(이름, 나이, 종류)
  const onChangePetInfo = (event) => {
    const { name, value } = event.target;
    setMyPet({
      ...myPet,
      [name]: value,
    });
  };

  console.log("우리강아지", myPet);

  const onAddMyPets = (event) => {
    event.preventDefault();
    if (myPet.name === "" || myPet.age === "" || myPet.category === "") {
      return alert("모든 항목을 입력해주세요!");
    }
    console.log("마이펫", myPet);
    dispatch(__addMyPet(myPet));
    // window.location.reload("/mypage");
  };

  return (
    <div>
      <Layout>
        <Content className="content">
          <span>반려동물 정보 등록 및 수정</span>
          {/* 등록 누르면 신규 정보 입력, 수정 버튼을 눌렀을 때, 인풋창에 수정하고 싶은 내용을 작성할 수 있는 페이지 */}
          <Form className="edit-input">
            <div>
              <label>이름</label>
              <input
                type="text"
                name="name"
                value={myPet.name || ""}
                onChange={onChangePetInfo}
                placeholder="백호"
                style={{ width: "159.51px", height: "20px" }}
              />
            </div>
            <div>
              <label>나이</label>
              <input
                type="text"
                name="age"
                value={myPet.age || ""}
                onChange={onChangePetInfo}
                placeholder="4"
                style={{ width: "136.72px", height: "20px" }}
              />
              &nbsp;&nbsp;&nbsp;살
            </div>
            <div>
              <label>종류</label>
              <select
                name="category"
                value={myPet.category || ""}
                onChange={onChangePetInfo}
                style={{ width: "159.51px", height: "20px" }}
              >
                <option default value="all">전체</option>
                <option value="small">소형 - 6kg 이하 | 20cm 이하</option>
                <option value="medium">중형 - 8kg 이하 | 40cm 이하</option>
                <option value="big">대형 - 15kg 초과 | 80cm 초과</option>
              </select>
            </div>
          </Form>
        </Content>

        {/* 정보등록 */}
        <PlaceBtn>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "rgba(175, 175, 175, 1)",
              borderRadius: "0px 0px 0px 4px",
            }}
          >
            취소
          </button>
          <button
            onClick={onAddMyPets}
            style={{
              backgroundColor: "rgba(237, 144, 113, 1)",
              color: "rgba(255, 255, 255, 1)",
              borderRadius: "0px 0px 4px 0px",
            }}
          >
            완료
          </button>
        </PlaceBtn>
      </Layout>
    </div>
  );
};

export default AddPetInfo;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Content = styled.div`
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  justify-content: left;
  span {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 17.9px;
    margin: 15.06px 0 19.39px -70px;
  }
  label {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.32px;
    margin-right: 15.5px;
  }
  input {
    padding: 4px 0 4px 13.54px;
    border: 0.5px solid rgba(237, 144, 113, 1);
    border-radius: 4px;
    margin: 2.95px 0 2.95px 0;
    ::placeholder {
      font-family: "Spoqa Han Sans Neo", sans-serif;
      font-size: 10px;
      font-weight: 400;
      line-height: 11.93px;
      color: rgba(86, 86, 86, 1);
    }
  }
  select {
    /* padding: 4px 0 4px 13.54px; */
    padding-left: 9.54px;
    border: 0.5px solid rgba(237, 144, 113, 1);
    border-radius: 4px;
    margin: 2.95px 0 20.04px 0;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 11.93px;
    color: rgba(86, 86, 86, 1);
  }
`;

const Form = styled.div`
  /* background-color: springgreen; */
  text-align: left;
`

const PlaceBtn = styled.div`
margin-top: -5px;
  button {
    width: 135.07px;
    height: 27.42px;
    border: none;
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.32px;
  }
`;