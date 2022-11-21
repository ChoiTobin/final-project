import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deleteMyPet, __getMyPet } from "../../redux/modules/mypageSlice";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import EditPetInfo from "./EditPetInfo";

// 마이페이지 반려동물 정보 - 최대 3마리까지 가능함 (여기는 기본 정보 컨텐츠만)
// myPets: [{id, name, age, categoryName}, {""}, {""}]

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
      <EditPetInfo/>
    )
  }, [modalOption])


  // 나의 반려동물 삭제
  const onDeleteMyPet = (id) => {
    dispatch(__deleteMyPet(id));
    window.alert("반려동물 정보를 삭제하시겠습니까?");
    // window.location.reload();
  };

  // 반려동물 정보 조회
  useEffect(() => {
    dispatch(__getMyPet());
  }, []);

  return (
    <>
      {myPets !== undefined &&
        myPets.map((item) => {
          if (item.length !== 0) {
            return (
              <div key={item.id}>
                <div>
                  <span>{item.category}</span>
                  <span>{item.name}</span>
                </div>
                <div>
                  <span> {item.age}</span>
                </div>
                {/* 여기서 수정하기 버튼을 누르면 "EditPetInfo.jsx"로 이동해야 한다 */}
                <button onClick={onClickModal}>수정하기</button>
                <Modal modalOption={modalOption} />

                <button onClick={() => onDeleteMyPet(item.id)}>삭제하기</button>
              </div>
            );
          } else {
            return null;
          }
        })}
    </>
  );
};

export default PetInfo;
