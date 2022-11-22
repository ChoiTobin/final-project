import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import useImgUpload from "../hooks/useImgUpload";
import upload from "../../img/upload.png";
import { __putMyPost } from "../../redux/modules/mypageSlice";

// 내가 쓴 게시글 수정 및 삭제
// post{id}
// myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}]

const EditDetail = () => {
  const [myPost, setMyPost] = useState({
    imgs:[""],
    category: "",
    title: "",
    price: "",
    local: "",
    content: "",
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onChangePost = (event) => {
    const { name, value } = event.target;
    setMyPost({ ...myPost, [name]: value })
  };

  console.log("온체인지 포스트", myPost);

  // 이미지 업로드 훅
  const [files, filesUrls, uploadHandle] = useImgUpload(5);

  // 이미지 업로드 인풋돔 선택 훅
  const imgRef = useRef();

  // submit
  const writeSubmit = () => {
    
  // request로 날릴 formData
  const formData = new FormData();

  // FormData에 파일 담기
  if (files.length > 0) {
    files.forEach((file) => {
      console.log("이미지 파일 올라가나", file);
      formData.append("postImg", file);
    })
  } else {
    formData.append("postImg", null)
    }

  setMyPost("")

    const myPostData = {
    "id": myPost.id,
    "title": myPost.title,
    "content": myPost.content,
    "category": myPost.category,
    "price": parseInt(myPost.price),
    "local": myPost.local,
    }
    
    console.log("전체내용", myPostData);
    console.log("이미지들", filesUrls);

  formData.append("mypostImg", filesUrls);

  // formData에 작성한 데이터 넣기
  formData.append("post", new Blob([JSON.stringify(myPostData)], {
    type: "application/json"
  }));

    console.log("폼데이터", formData);
    
  // API 날리기
    dispatch(__putMyPost(formData));
    window.alert("게시글이 수정되었습니다!");
}

  return (
    <div>
      <div>
        <label htmlFor="text">종류</label>
        <select onChange={onChangePost} name="category" value={myPost.category}>
          <option defaultValue="all">전체</option>
          <option value="small">소형 - 6kg 이하 | 20cm 이하</option>
          <option value="medium">중형 - 8kg 이하 | 40cm 이하</option>
          <option value="big">대형 - 15kg 초과 | 80cm 초과</option>
        </select>
      </div>
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
            <img src={upload} style={{ width: "60px" }} alt="" />
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
        <label htmlFor="text">제목</label>
        <input
          type="text"
          name="title"
          value={myPost.title}
          maxLength={30}
          onChange={onChangePost}
          placeholder="제목을 입력해주세요"
        />
      </div>

      <div>
        <label htmlFor="text">가격</label>
        <input
          type="text"
          name="price"
          value={myPost.price}
          onChange={onChangePost}
          placeholder="예) 20000원"
        />
      </div>

      <div>
        <label htmlFor="text">위치</label>
        <select onChange={onChangePost} name="local" value={myPost.local}>
          <option defaultValue="">---지역을 선택해주세요---</option>
          <option value="강원도">강원도</option>
          <option value="경기도">경기도</option>
          <option value="경상남도">경상남도</option>
          <option value="경상북도">경상북도</option>
          <option value="광주광역시">광주광역시</option>
          <option value="대구광역시">대구광역시</option>
          <option value="대전광역시">대전광역시</option>
          <option value="부산광역시">부산광역시</option>
          <option value="서울특별시">서울특별시</option>
          <option value="울산광역시">울산광역시</option>
          <option value="인천광역시">인천광역시</option>
          <option value="전라남도">전라남도</option>
          <option value="전라북도">전라북도</option>
          <option value="충청남도">충청남도</option>
          <option value="충청북도">충청북도</option>
        </select>
      </div>

      <div>
        <label htmlFor="text">내용</label>
        <input
          type="text"
          name="content"
          value={myPost.content}
          maxLength={200}
          onChange={onChangePost}
          placeholder="내용을 입력해주세요"
          style={{ minHeight: "100px" }}
        />
      </div>

      <button onClick={writeSubmit}>저장</button>
    </div>
  );
}
export default EditDetail;

const ImgUpload = styled.button`
  /* background-color: yellowgreen; */
  margin: 10px 0 10px 100px;
  border: none;
  border-radius: 10px;
  img {
    align-items: center;
    justify-content: center;
    /* margin: 10px 0 0 10px; */
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

  border: 1px solid #E2E2E2;
  border-radius: 10px;

  margin: 0 auto 10px;
  
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;