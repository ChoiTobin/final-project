import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import EditPetInfo from "./EditPetInfo";
import { __deleteMyPet, __getMyPet } from "../../redux/modules/mypageSlice";
import { ReactComponent as DateColor } from "../../img/datecolor.svg";
import { ReactComponent as Edit } from "../../img/edit.svg";
import { ReactComponent as Delete } from "../../img/delete.svg";


// 마이페이지 반려동물 정보 - 최대 3마리까지 가능함 (여기는 기본 정보 컨텐츠만)

const PetInfo = ({ myPets }) => {
  const dispatch = useDispatch();
  
  console.log("형태가 뭐야 대체", myPets);
  console.log("길이가 나오나", myPets.length);

  const [modalOption, showModal] = useModal();

  const onClickModal = useCallback(() => {
    showModal(
      true,
      "반려동물 정보 수정",
      () => console.log("모달 on"),
      null,
    )
  }, [modalOption])


  // 나의 반려동물 삭제
  const onDeleteMyPet = (id) => {
    dispatch(__deleteMyPet(id));
    window.alert("반려동물 정보를 삭제하시겠습니까?");
    window.location.reload();
  };

  // 반려동물 정보 조회
  useEffect(() => {
    dispatch(__getMyPet());
  }, []);

  return (
    <>
      <Layout>
        {myPets !== undefined &&
        myPets.map((pet) => {
          if (pet.length !== 0) {
            return (
              <Content key={pet.id}>
                <Main>
                  <Category>{pet.category}</Category>
                  <Name>{pet.name}</Name>
                </Main>

                <Down>
                  <div>
                  <Age> {pet.age}살</Age>
                  </div>
                  <Icon>
                    {/* 여기서 수정하기 버튼을 누르면 "EditPetInfo.jsx"로 이동해야 한다 */}
                    <Edit onClick={onClickModal} />
                    <Modal modalOption={modalOption} />

                    <Delete onClick={() => onDeleteMyPet(pet.id)} />
                  </Icon>
                </Down>
              </Content>
            );
          } else {
            return null;
          }
        })}
      </Layout>
      
    </>
  );
};

export default PetInfo;

const Layout = styled.div`
  min-height: 225px;
  max-height: 226px;
  overflow-x: hidden;
  overflow-y: auto;
  /* 스크롤바 영역에 대한 설정 */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤바 막대에 대한 설정 */
  ::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: #d8d8d8;
    border-radius: 20px;
  }

  /* 스크롤바 뒷 배경에 대한 설정 */
  ::-webkit-scrollbar-track {
    background-color: #f6f0ee;
  }
`;
const Content = styled.div`
  width: 360px;
  height: 66px;
  background-color: #fff;
  align-items: center;
  border: none;
  border-radius: 4px;
  margin: 9px auto 1.59px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 12px 40px 10.59px 38px;
`;

const Main = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const Category = styled.span`
  color: #ed9071;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 15px;
  font-weight: 900;
  margin-right: 7px;
`;

const Name = styled.span`
  width: 130px;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 15px;
`;

const Down = styled.div`
  display: flex;
  flex-direction: row;
  gap: 220px;
`;

const Age = styled.span`
  width: 73px;
  height: 12px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 10px;
  color: "#B0B0B0";
  margin-top: 10px;
`;

const Icon = styled.div`
  gap: 8.31px;
`;