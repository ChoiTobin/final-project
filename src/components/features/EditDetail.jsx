import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import regex from "../../shared/regex";
import ValidInput from "../element/ValidBtnInput";
import useImgUpload from "../hooks/useImgUpload";
import photoIMG from "../../img/photoIMG.png"
import { __putMyPost } from "../../redux/modules/mypageSlice";

// 내가 쓴 게시글 수정 및 삭제
// post{id}
// myPost[{id, title, content, price, categoryName, state, local, date, imgs:["URL"]}]

const EditDetail = () => {
  const [myPost, setMyPost] = useState({
    categoryName: "",
    title: "",
    price: "",
    local: "",
    content: "",
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onChangePost = (event) => {
    const { name, value } = event.target.value;
    setMyPost({...myPost, [name]: value})
  };

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
        formData.append("images", file);
      })
    } else {
      formData.append("images", null)
    }

    // 이미지와 함께 formData에 보낼 input onChange value
    if (myPost.categoryName === "") {
      alert("종류를 선택해주세요")
      return
    }
    if (myPost.title === "") {
      alert("제목을 입력해주세요")
      return
    }
    if (myPost.price === "") {
      alert("가격을 입력해주세요");
      return;
    }
    if (myPost.local === "") {
      alert("위치를 선택해주세요");
      return;
    }
    if (myPost.content === "") {
      alert("내용을 입력해주세요");
      return;
    }

    // formData에 작성한 데이터 넣기
    formData.append("post", JSON.stringify(myPost));

    // API 날리기
    dispatch(__putMyPost(formData));
  }

  return (
    <div>
      <div>
        <label>종류</label>
        <select onChange={onChangePost} value={myPost.categoryName}>
          <option defaultValue="all">전체</option>
          <option value="small">소형 - 6kg 이하 | 20cm 이하</option>
          <option value="medium">중형 - 8kg 이하 | 40cm 이하</option>
          <option value="big">대형 - 15kg 초과 | 80cm 초과</option>
        </select>
      </div>
      <div>
        <label htmlFor="imgFile">
          {/* 이미지 미리보기 Preview */}
          {filesUrls.map((imgs, id) => {
            return <img src={imgs} alt="업로드 사진 미리보기" key={id} />;
          })}

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
          <button
            type="button"
            onClick={() => {
              imgRef.current.click();
            }}
          >
            <img
              src={photoIMG}
              style={{ width: "200px", marginTop: "10px" }}
              alt=""
            />
          </button>
        </label>
      </div>

      <div>
        <label>제목</label>
        <ValidInput
          label="제목"
          value={myPost.title}
          setValue={setMyPost}
          maxValue={30}
          regexCheck={regex.title}
          onChange={onChangePost}
          defaultText="제목을 입력해주세요"
          successText="통과"
          errorText="제목은 30자 이내로 작성해야 합니다"
        />
      </div>

      <div>
        <span>가격</span>
        <input
          type="number"
          value={myPost.price}
          onChange={onChangePost}
          placeholder="예) 20000원"
        />
      </div>

      <div>
        <span>위치</span>
        <select onChange={onChangePost} value={myPost.local}>
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
        <label>내용</label>
        <ValidInput
          label="내용"
          value={myPost.content}
          setValue={setMyPost}
          regexCheck={regex.body}
          onChange={onChangePost}
          defaultText="내용을 입력해주세요"
          successText="통과"
          errorText="내용은 200자 이내로 작성해야 합니다."
        />
      </div>

      <button onClick={writeSubmit}>수정완료</button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        취소
      </button>
    </div>
  );
}
export default EditDetail;