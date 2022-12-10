import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useImgUpload from "../../hooks/useImgUpload";
import { ReactComponent as Upload } from "../../../img/form-add.svg";
import { ReactComponent as Photo } from "../../../img/uploadPic.svg";
import { __postMyImg } from "../../../redux/modules/mypageSlice";

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
    window.location.reload("/mypage");
  };

  return (
    <Layout>
      <div>
        <label htmlFor="imgFile" style={{backgroundColor: "#FFF"}}>
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
            {/* <img src={upload} style={{ width: "30px" }} alt="" /> */}
            <Upload />
          </ImgUpload>
        </label>
      </div>

      <ImgPreview>
        {/* 이미지 미리보기 Preview */}
        {/* <img src={imgsUrls} style={imgsUrls !== "" ? { visibility: "visible"} : {visibility: "hidden"}} alt="" /> */}
        {imgsUrls.length !== 0 ? (
          imgsUrls.map((imgs, id) => {
            return <img src={imgs} alt="업로드 사진 미리보기" key={id} />;
          })
        ) : (
          <PicNote>
            <Photo /> <span>&nbsp;이미지 미리보기</span>
          </PicNote>
        )}
      </ImgPreview>
      <Btns >
        <button
          onClick={onClose}
          style={{ borderRadius: "0 0 0 15px", backgroundColor: "#E6E6E6" }}
        >
          취소
        </button>
        <button
          onClick={writeSubmit}
          style={{
            borderRadius: "0 0 15px 0",
            backgroundColor: "#ED9071",
            color: "#fff",
          }}
        >
          저장
        </button>
      </Btns>
    </Layout>
  );
};

export default AddUserPic;

const Layout = styled.div`
  width: 330px;
  height: 250px;
  margin: auto;
  background-color: #fff;
    /* background-color: yellow; */
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const ImgUpload = styled.button`
  /* margin: 10px 0 10px 100px; */
  border: none;
  border-radius: 10px;
  margin: 10px auto 12px;
  background-color: #E2E2E2;
  img {
    align-items: center;
    justify-content: center;
    /* margin: 10px 0 0 10px; */
  }
`;

const ImgPreview = styled.div`
  width: 200px;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  border: 1px solid #e2e2e2;
  border-radius: 10px;
  background-color: #fff;

  margin: 0 auto 30px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`;

const Btns = styled.div`
  margin-bottom: -20px;
  button {
    width: 165px;
    height: 40px;
    border: none;
    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.09px;
  }
`;
const PicNote = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* margin-top: 65.33px; */
  span {
    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    color: rgba(57, 57, 57, 0.93);
  }
`;
