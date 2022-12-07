import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

// React BootStrap Library Import
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import useImgUpload from "../../hooks/useImgUpload";
import { __addPost } from "../../../redux/modules/postSlice";
import { ReactComponent as Photo } from "../../../img/form-preview.svg";
import "../../../styles/form.css";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [conimal, setConimal] = useState({
    title: "",
    price: "",
    content: "",
    category: "대형",
    state: "진행중",
    local: "",
    date: "",
    imgs: [""],
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setConimal({ ...conimal, [name]: value });
  };

  //여기서부터 이미지훅
  const [files, fileUrls, onChangeImage] = useImgUpload(5, true, 0.3, 1000);
  //이미지 업로드 인풋돔 선택 훅
  const imgRef = useRef();
  //submit
  const writeSubmit = () => {
    //request로 날릴 폼데이터
    const formData = new FormData();
    //폼 데이터에 파일 담기
    if (files.length > 0) {
      files.forEach((file) => {
        formData.append("postImg", file);
      });
    } else {
      formData.append("postImg", null);
    }
    if (conimal.title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (conimal.content === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    if (conimal.price === "") {
      alert("의뢰비용을 입력해주세요.");
      return;
    }
    if (conimal.date === "") {
      alert("희망날짜를 선택해주세요.");
      return;
    }
    if (conimal.local === "") {
      alert("의뢰지역을 선택해주세요.");
      return;
    }
    if (conimal.category === "") {
      alert("견종크기를 선택해주세요.");
      return;
    }

    setConimal("");

    const data = {
      title: conimal.title,
      content: conimal.content,
      category: conimal.category,
      price: parseInt(conimal.price), // 문자를  string숫자로 변환해서 보내야할때 parseInt로 감싸서 보내주면된다.
      state: "진행중",
      local: conimal.local,
      date: conimal.date,
    };

    //폼 데이터에 글작성 데이터 넣기
    formData.append("postImg", fileUrls);
    formData.append(
      "postRequestDto",
      new Blob([JSON.stringify(data)], {
        type: "application/json",
      })
    );
    dispatch(__addPost(formData));
    // console.log("이게가는지?",formData)
  };
  return (
    <Layout>
      <Header />
      <Bg>
        <Form>
          <h1>POST</h1>
          <label htmlFor="imgFile" />
          <Carousel fade>
            {fileUrls.map((img) => {
              return (
                <Carousel.Item
                  key={img.id}
                  style={{
                    height: "166px",
                    objectFit: "contain",
                  }}
                >
                  <Img src={img ? img : ""} />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <InputImg
            type="File"
            id="imgFile"
            name="imgFile"
            accept="image/*"
            onChange={onChangeImage}
            ref={imgRef}
            multiple
          />
          <ImgUpload
            type="button"
            onClick={() => {
              imgRef.current.click();
            }}
          >
            <Photo
              style={{
                width: "25.88px",
                height: "24.18px",
                objectFit: "cover",
              }}
            />
            <span>사진 업로드</span>
          </ImgUpload>
          <span className="desk">*최대 사진 5장 업로드 가능</span>
          <input
            type="text"
            maxLength={30}
            name="title"
            value={conimal.title || ""}
            onChange={onChangeHandler}
            required
            placeholder="제목"
          />
          <textarea
            name="content"
            value={conimal.content || ""}
            onChange={onChangeHandler}
            required
            placeholder="내용"
          />
          <input
            type="number"
            name="price"
            value={conimal.price || ""}
            onChange={onChangeHandler}
            placeholder="희망가격"
            required
          />
          <input
            className="date"
            type="date"
            name="date"
            data-placeholder="희망 날짜를 입력해주세요."
            required
            aria-required="ture"
            value={conimal.date || ""}
            onChange={onChangeHandler}
          />
          <select
            name="local"
            value={conimal.local || ""}
            required
            onChange={onChangeHandler}
          >
            <option default value="지역을 선택해주세요.">
              희망 위치를 선택해주세요.
            </option>
            <option value="서울특별시">서울특별시</option>
            <option value="강원도">강원도</option>
            <option value="경기도">경기도</option>
            <option value="경상남도">경상남도</option>
            <option value="경상북도">경상북도</option>
            <option value="광주광역시">광주광역시</option>
            <option value="대구광역시">대구광역시</option>
            <option value="대전광역시">대전광역시</option>
            <option value="부산광역시">부산광역시</option>
            <option value="울산광역시">울산광역시</option>
            <option value="인천광역시">인천광역시</option>
            <option value="전라남도">전라남도</option>
            <option value="전라북도">전라북도</option>
            <option value="충청남도">충청남도</option>
            <option value="충청북도">충청북도</option>
          </select>
          <select
            name="category"
            value={conimal.category || ""}
            onChange={onChangeHandler}
            required
          >
            <option default value="">
              견종의 크기를 선택해주세요.
            </option>
            <option value="대형">대형- 15kg초과</option>
            <option value="중형">중형- 7kg초과</option>
            <option value="소형">소형- 5kg초과</option>
          </select>
          <input
            type="hidden"
            name="state"
            value="진행중"
            onChange={onChangeHandler}
          />
        </Form>
      </Bg>
      <div className="btngroup">
        <button onClick={() => navigate("/home")}>취소하기</button>
        <button onClick={writeSubmit}>업로드</button>
      </div>
      <Footer />
    </Layout>
  );
};

export default Post;

const Layout = styled.div`
  width: 360px;
  margin: 0 auto;
  background-color: #f6f0ee;
`;
const Form = styled.div`
  width: 318.82px;
  margin: 12.59px auto 0;
  display: flex;
  flex-direction: column;
`;
const Bg = styled.div`
  max-height: 514.32px;
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
  // background-color: purple;
`;

const ImgUpload = styled.button`
  width: 318.82px;
  height: 54.99px;
  border-radius: 10px;
  border: 1px solid rgba(105, 105, 105, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 12.59px auto 12.23px;
  background-color: rgba(243, 243, 243, 0.64);
  img {
    align-items: center;
    justify-content: center;
    margin: 10px 0 0 10px;
  }
  span {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    margin-left: 11px;
  }
  ::placeholder {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 19.09px;
  }
`;

const InputImg = styled.input`
  display: none;
  height: 40px;
  /* background: #fff; */
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  background-color: #ed9071;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;
