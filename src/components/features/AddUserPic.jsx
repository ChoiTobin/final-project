import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useImgUpload from "../hooks/useImgUpload";
import upload from "../../img/upload.png"
import { __postMyImg } from "../../redux/modules/mypageSlice";

const AddUserPic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 이미지 업로드 훅
  const [userImage, imgsUrls, uploadHandle] = useImgUpload(1);

  // 이미지 업로드 인풋돔 선택 훅
  const imgRef = useRef();

  // submit
  const writeSubmit = () => {
    // request로 날릴 formData
    const formData = new FormData();

    // FormData에 파일 담기
    if (userImage.length > 0) {
      userImage.forEach((file) => {
        formData.append("userImg", file);
      });
    } else {
      formData.append("userImg", null);
    }

    formData.append("userImg", imgsUrls);


    // API 날리기
    dispatch(__postMyImg(formData));
    window.alert("프로필 사진이 수정되었습니다!");
    navigate("/mypage");
  };

  return (
    <div>
      <div>
        <label htmlFor="imgFile">
          {/* 이미지 업로더 */}
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            id="imgFile"
            name="imgFile"
            multiple
            onChange={uploadHandle}
            ref={imgRef}
          />
          <ImgUpload
            type="button"
            onClick={() => {
              imgRef.current.click();
            }}
          >
            <img src={upload} style={{ width: "30px" }} alt="" />
          </ImgUpload>
        </label>
      </div>

      <ImgPreview>
        {/* 이미지 미리보기 Preview */}
        <img src={imgsUrls} alt="" />

      </ImgPreview>
      <div>
        <button onClick={writeSubmit}>저장</button>
      </div>
    </div>
  );
}

export default AddUserPic;

const ImgUpload = styled.button`
  margin: 10px 0 10px 100px;
  border: none;
  border-radius: 10px;
  img {
    align-items: center;
    justify-content: center;
    margin: 10px 0 0 10px;
  }
`;

const ImgPreview = styled.div`
  width: 270px;
  height: 170px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  border: 1px solid #e2e2e2;
  border-radius: 10px;

  margin: 0 auto 10px;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;