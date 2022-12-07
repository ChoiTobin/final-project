import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postMyImg } from "../../../redux/modules/mypageSlice";
import useImgUpload from "../../hooks/useImgUpload";
import { ReactComponent as Upload } from "../../../img/form-add.svg";
import { ReactComponent as UserPic } from "../../../img/user-my.svg";

const AddUserPic = ({ onClose }) => {
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
    <Layout>
      <Content>
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
          </ImgUpload>
        </label>
        <ImgPreview>
          {/* 이미지 미리보기 Preview */}
          <Upload />
          {userImage.length !== 0 ? <img src={imgsUrls} alt="" /> : <UserPic />}
        </ImgPreview>
      </Content>

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
          onClick={writeSubmit}
          style={{
            backgroundColor: "rgba(237, 144, 113, 1)",
            color: "rgba(255, 255, 255, 1)",
            borderRadius: "0px 0px 4px 0px",
          }}
        >
          저장
        </button>
      </PlaceBtn>
    </Layout>
  );
};

export default AddUserPic;

const Layout = styled.div`
  width: 271px;
  height: 190.08px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #FFF;
  border-radius: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 218.45px;
  height: 139.25px;
`;

const ImgUpload = styled.button`
  margin: 0px 0 10px 100px;
  border: none;
  border-radius: 10px;
  img {
    align-items: center;
    justify-content: center;
    margin: 10px 0 0 10px;
  }
`;

const ImgPreview = styled.div`
  width: 170px;
  height: 220px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  border: 1px solid #e2e2e2;
  border-radius: 10px;
  margin: 0 auto 50px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const PlaceBtn = styled.div`
  margin-bottom: -22px;
  button {
    width: 135.07px;
    height: 27.42px;
    border: none;
    font-family: "Pretendard", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.32px;
  }
`;