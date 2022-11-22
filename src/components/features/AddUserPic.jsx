import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useImgUpload from "../hooks/useImgUpload";
import upload from "../../img/upload.png"
import User from "../../img/user.png"
import { __postMyImg } from "../../redux/modules/mypageSlice";

const AddUserPic = () => {
  const [myPhoto, setMyPhoto] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 이미지 업로드 훅
  const [files, filesUrls, uploadHandle] = useImgUpload(1);

  // 이미지 업로드 인풋돔 선택 훅
  const imgRef = useRef();

  // submit
  const writeSubmit = () => {
    // request로 날릴 formData
    const formData = new FormData();

    // FormData에 파일 담기
    if (files.length > 0) {
      files.forEach((file) => {
        console.log("프사 파일 올라가나", file);
        formData.append("postImg", file);
      });
    } else {
      formData.append("postImg", null);
    }

    setMyPhoto("");

    const myPhotoData = {
      title: myPhoto.title,
    };

    console.log("프로필사진", filesUrls);

    formData.append("myImg", filesUrls);

    // formData에 작성한 데이터 넣기
    formData.append(
      "post",
      new Blob([JSON.stringify(myPhotoData)], {
        type: "application/json",
      })
    );

    console.log("폼데이터", formData);

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
            <img
              src={upload}
              style={{ width: "100px" }}
              alt=""
            />
          </ImgUpload>
        </label>
      </div>

      <ImgPreview>
        {/* 이미지 미리보기 Preview */}
        {filesUrls.map((imgs, id) => {
          return <img src={imgs} alt="업로드 사진 미리보기" key={id} />;
        })}
      </ImgPreview>
      <div>
        <button onClick={writeSubmit}>저장</button>
      </div>
    </div>
  );
}

export default AddUserPic;

const ImgUpload = styled.button`
  /* background-color: yellowgreen; */
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