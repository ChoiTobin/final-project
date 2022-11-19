import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deleteMyPet, __getMyPet } from "../../redux/modules/mypageSlice";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import EditPetInfo from "./EditPetInfo";

// 마이페이지 반려동물 정보 - 최대 3마리까지 가능함 (여기는 기본 정보 컨텐츠만)
// myPets: [{petId, name, age, categoryName}, {""}, {""}]

const PetInfo = ({ myPets }) => {
  const dispatch = useDispatch();
  
  console.log("형태가 뭐야 대체", myPets);

  const [modalOption, showModal] = useModal();

  const onClickModal = useCallback(() => {
    showModal(
      true,
      "안녕하세요",
      () => console.log("모달 on"),
      null,
      <EditPetInfo/>
    )
  }, [modalOption])


  // 나의 반려동물 삭제
  const onDeleteMyPet = (petId) => {
    dispatch(__deleteMyPet(petId));
    window.alert("반려동물 정보를 삭제하시겠습니까?");
    // window.location.reload();
  };

  // 반려동물 정보 조회
  useEffect(() => {
    dispatch(__getMyPet());
  }, [dispatch]);

  return (
    <div>
      {myPets !== undefined &&
        myPets.map((myPet) => {
          if (myPet !== "") {
            return (
              <Pet className="pet-info" key={myPet.petId}>
                <div>
                  <h3>{myPet.categoryName}</h3>
                  <span>{myPet.name}</span>
                </div>

                <div>
                  <span> {myPet.age}</span>
                </div>
                {/* 여기서 수정하기 버튼을 누르면 "EditPetInfo.jsx"로 이동해야 한다 */}
                <button onClick={onClickModal}>수정하기</button>
                <Modal modalOption={modalOption}/>

                <button onClick={() => onDeleteMyPet(myPet.petId)}>
                  삭제하기
                </button>
              </Pet>
            );
          } else {
            return (
              <div>
                <h3>반려동물을 등록해보세요</h3>
              </div>
            );
          }
        })}
    </div>
  );
};

export default PetInfo;

const Pet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
