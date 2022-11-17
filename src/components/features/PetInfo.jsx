import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deleteMyPet, __getMyPet } from "../../redux/modules/mypageSlice";
import EditPetInfo from "./EditPetInfo";

// 마이페이지 반려동물 정보 - 최대 3마리까지 가능함 (여기는 기본 정보 컨텐츠만)
// myPets: [{petId, name, age, categoryName}, {""}, {""}]

const PetInfo = ({ myPets }) => {
  const dispatch = useDispatch();


  // 나의 반려동물 삭제
  const onDeleteMyPet = (petId) => {
    dispatch(__deleteMyPet(petId));
    window.alert("반려동물 정보를 삭제하시겠습니까?");
    window.location.reload();
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
              <Pet className="pet-info">
                <div>
                  <h3>{myPets.categoryName}</h3>
                  <span>{myPets.name}</span>
                </div>

                <div>
                  <span> {myPets.age}</span>
                </div>
                {/* 여기서 수정하기 버튼을 누르면 "EditPetInfo.jsx"로 이동해야 한다 */}
                <button>수정하기</button>
                <button onClick={() => onDeleteMyPet(myPets.petId)}>
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
