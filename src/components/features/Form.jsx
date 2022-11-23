import React, {useState,useRef} from 'react'
import { useDispatch  } from "react-redux";
import { useNavigate } from 'react-router';
import styled from "styled-components"
import useImgUpload from '../hooks/useImgUpload'
import { __addPost } from "../../redux/modules/postSlice";	
import { $CombinedState } from 'redux';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import upload from "../../img/upload.png";
import { ReactComponent as Photo } from "../../img/photo.svg";

const Post = () => {
  const navigate = useNavigate
  const dispatch = useDispatch();
  const [conimal , setConimal] = useState({
    title:"",
    price:"",
    content:"",
    category:"",
    state:"진행중",
    local:"",
    date:"",
    // date:""
  })
  
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setConimal({...conimal,[name]: value,});
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
      })
    } else {
      formData.append("postImg", null);
    }
    // if (conimal.title === "") {
    //   alert("외쳐라 현홍갓.")
    //   return
    // }
    // if (conimal.content === "") {
    //   alert("외쳐라 현홍갓.")
    //   return
    // }
    // if (conimal.price === "") {
    //   alert("외쳐라 현홍갓.")
    //   return
    // }
    setConimal("")

    const data = {
      "title" : conimal.title,
      "content" : conimal.content,
      "category" : conimal.category,
      "price" : parseInt(conimal.price), // 문자string을 숫자로 변환해서 보내야할때 parseInt로 감싸서 보내주면된다.
      "state" : "진행중",
      "local" : conimal.local,
      "date" : conimal.date
    }
    //폼 데이터에 글작성 데이터 넣기
    formData.append("postImg",fileUrls);
    // data.files.forEach((fileUrls) => formData.append("postImg", fileUrls))
    formData.append("postRequestDto", new Blob([JSON.stringify(data)], {
      type: "application/json"
    }));
    dispatch(__addPost(formData));	  
  }
  // const data = {
  //   "name": name,
  //   "gender": gender,
  //   "birthday": birthday
  //   }
  //   frm.append("files", fileRef.current.files[0]);
  //   frm.append("data", new Blob([JSON.stringify(data)], {
  //   type: "application/json"
  //   }));
  
  return (
    <>
      <Layouts>
        <Header />
        <Form>
          <div>
            <label htmlFor="imgFile" />
            <Preview className="preview">
              {fileUrls.length !== 0 ? (
                /*previews map쓸곳*/
                fileUrls.map((val, i) => {
                  return <Img src={val} alt="image" key={i} />;
                })
              ) : (
                <PicNote>
                  <Photo /> <span>이미지 미리보기</span>
                </PicNote>
              )}
            </Preview>

            <input
              type="File"
              id="imgFile"
              name="imgFile"
              accept="image/*"
              style={{ display: "none" }}
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
              {/* <img src={upload} style={{ width: "30px" }} alt="" /> */}
              <Photo />
              <span>&nbsp;사진 업로드</span>
            </ImgUpload>
          </div>

          <Content>
            <Select>
              <select
                name="category"
                value={conimal.category || ""}
                onChange={onChangeHandler}
              >
                <option default value="반려동물 크기를 정해주세요">
                  크기 선택
                </option>
                <option value="대형">대형</option>
                <option value="중형">중형</option>
                <option value="소형">소형</option>
              </select>
            </Select>

            <label htmlFor="text" />
            <input
              type="text"
              maxLength={30}
              name="title"
              value={conimal.title || ""}
              onChange={onChangeHandler}
              placeholder="제목"
            />
            <input
              type="date"
              name="date"
              value={conimal.date || ""}
              onChange={onChangeHandler}
              data-placeholder="날짜 선택"
            />
            <div>
              <label htmlFor="text" />
              <Price
                type="number"
                name="price"
                value={conimal.price || ""}
                onChange={onChangeHandler}
                placeholder="희망 가격"
              />{" "}
              <Won>원</Won>
            </div>

            <Select>
              <select
                name="local"
                value={conimal.local || ""}
                onChange={onChangeHandler}
              >
                <option default value="지역을 선택해주세요">
                  위치 선택
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
            </Select>

            <label htmlFor="text" />
            <input
              type="text"
              maxLength={200}
              name="content"
              value={conimal.content || ""}
              onChange={onChangeHandler}
              placeholder="내용"
              style={{ minHeight: "100px" }}
            />

            <input
              type="hidden"
              name="state"
              value="진행중"
              onChange={onChangeHandler}
            />
          </Content>
        </Form>
      </Layouts>

      <Btns>
        <FormBtn style={{ backgroundColor: "#838383", color: "#fff" }}>
          취소하기
        </FormBtn>
        <FormBtn onClick={writeSubmit} style={{ backgroundColor: "#ED9071" }}>
          작성하기
        </FormBtn>
      </Btns>
      <Footer />
    </>
  );
}

export default Post;


const Layouts = styled.div`
  width: 360px;
  height: 594.84px;
  background-color: #f6f0ee;
  margin: auto;
  /* background-color: lightpink; */

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

const Form = styled.div`
  /* background-color: lightblue; */
  display: flex;
  flex-direction: column;
  width: 318.82px;
  margin: 40.34px auto 0;

`;

const Preview = styled.div`
  width: 318.82px;
  height: 166px;
  border: 1px solid #000;
  border-radius: 5px;
  
`;

const PicNote = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 65.33px;
`;

const ImgUpload = styled.button`
  /* background-color: yellowgreen; */
  width: 318.5px;
  height: 53.97px;
  border: 1px solid #696969;
  background-color: #F3F3F3;
  border-radius: 3px;
  margin: 12.23px auto 6.115px;
  img {
    align-items: center;
    justify-content: center;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  input {
    width: 295px;
    height: 33.78px;
    margin: 6.115px auto 6.115px;
    padding-left: 19.96px;
    border: 1px solid #929292;
    border-radius: 3px;
    ::placeholder {
      color: #5e5e5e;
      /* padding-left: 19.96px; */
      font-size: 16px;
    }
  }
`;

const Price = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Won = styled.span`
  margin-left: -30px;
  color: #787878;
  font-weight: 300;
  font-size: 16px;
`;

const Select = styled.div`
  margin: 6.115px auto 6.115px;
  select {
    border: 1px solid #696969;
    border-radius: 3px;
    width: 318px;
    height: 33.78px;
    padding-left: 19.96px;
    font-size: 16px;
    ::placeholder {
      color: #5e5e5e;
    }
    
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  background-size: cover;
`;

// 버튼 누르면 손모양 나오게 하는 마우스 커서
const FormBtn = styled.button`
  cursor: pointer;
  margin: 8.805px auto 0;
  width: 180px;
  height: 45.16px;
  border: none;
  font-size: 16px;
  font-weight: 590;
`;

const Btns = styled.div`
  width: 360px;
  margin: -9px auto 0;
`;