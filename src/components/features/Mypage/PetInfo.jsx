import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deleteMyPet, __getMyPet } from "../../../redux/modules/mypageSlice";
import { ReactComponent as Edit } from "../../../img/edit.svg";
import { ReactComponent as Delete } from "../../../img/delete.svg";
import ModalPortal from "../../element/ModalPortal";
import EditPetInfo from "../Mypage/EditPetInfo"
import "../../element/MyModal.css";
// 마이페이지 반려동물 정보 - 최대 3마리까지 가능함 (여기는 기본 정보 컨텐츠만)

const PetInfo = ({ myPets }) => {
  const dispatch = useDispatch();

  console.log("형태가 뭐야 대체", myPets);
  console.log("길이가 나오나", myPets.length);

  // 나의 반려동물 삭제
  const onDeleteMyPet = (id) => {
    dispatch(__deleteMyPet(id));
    window.alert("반려동물 정보를 삭제하시겠습니까?");
    window.location.reload();
  };

  const [edit, setEdit] = useState(false);

  const openEditModal = () => {
    setEdit(true);
  };

  const closeEditModal = () => {
    setEdit(false);
  };

  // 반려동물 정보 조회
  useEffect(() => {
    dispatch(__getMyPet());
  }, []);

  return (
    <>
      <div>
        {myPets !== undefined &&
          myPets.map((pet) => {
            if (pet.length !== 0) {
              return (
                <div key={pet.id}>
                  <div>
                    <span>{pet.category}</span>
                    {/* <Category>
                      
                    </Category> */}
                    <div>
                      <div>
                        <span>{pet.name}</span>
                      </div>
                      <div>
                        <span> {pet.age}살</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* 여기서 수정하기 버튼을 누르면 "EditPetInfo.jsx"로 이동해야 한다 */}
                    <Edit
                      onClick={openEditModal}
                      style={{ cursor: "pointer" }}
                    />
                    {edit && (
                      <ModalPortal>
                        <div className="MyModal">
                          <EditPetInfo onClose={closeEditModal} />
                        </div>                        
                      </ModalPortal>
                    )}
                    <Delete
                      onClick={() => onDeleteMyPet(pet.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </>
  );
};

export default PetInfo;
