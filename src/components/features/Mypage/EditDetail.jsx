import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// React BootStrap Library Import
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import useImgUpload from "../../hooks/useImgUpload";
import { ReactComponent as Photo } from "../../../img/uploadPic.svg";
import { __putMyPost } from "../../../redux/modules/mypageSlice";
// import "../../element/MyModal.css";

// 내가 쓴 게시글 수정 및 삭제

const EditDetail = ({ onClose }) => {
  const [myPost, setMyPost] = useState({
    category: "",
    title: "",
    price: "",
    local: "",
    content: "",
  });

  const dispatch = useDispatch();

  const onChangePost = (event) => {
    const { name, value } = event.target;
    setMyPost({ ...myPost, [name]: value });
  };

  console.log("온체인지 포스트", myPost);

  // 이미지 업로드 훅
  const [imgs, imgUrls, uploadHandle] = useImgUpload(5, true, 0.3, 1000);

  // 이미지 업로드 인풋돔 선택 훅
  const imgRef = useRef();

  const writeSubmit = () => {
    // request로 날릴 formData
    const formData = new FormData();

    // FormData에 파일 담기
    if (imgs.length > 0) {
      imgs.forEach((file) => {
        console.log("이미지 파일 올라가나", file);
        formData.append("imgs", file);
      });
    } else {
      formData.append("imgs", null);
    }

    console.log("폼데이터에 이미지 넣기", formData);

    const myPostData = {
      id: myPost.id,
      title: myPost.title,
      content: myPost.content,
      category: myPost.category,
      price: parseInt(myPost.price),
      local: myPost.local,
    };

    console.log("전체내용", myPostData);
    console.log("이미지들", imgUrls);

    formData.append("imgs", imgUrls);

    // formData에 작성한 데이터 넣기
    formData.append(
      "post",
      new Blob([JSON.stringify(myPostData)], {
        type: "application/json",
      })
    );

    console.log("폼데이터 글 넣어서 디스패치", formData);

    // API 날리기
    dispatch(__putMyPost(formData));
    window.alert("게시글이 수정되었습니다!");
  };

  return (
    <div>
      <div>
        <div className="content">
          <div>
            <div>
              <label htmlFor="text" />
              <span>POST</span>
            </div>
            <div>
              <label htmlFor="imgFile">
                <ImgPreview>
                  {/* 이미지 미리보기 Preview */}
                  {/* {imgUrls.length !== 0 ? (
                    imgUrls.map((imgs, id) => {
                      return (
                        <img src={imgs} alt="업로드 사진 미리보기" key={id} />
                      );
                    })
                  ) : (
                    <PicNote>
                      <Photo /> <span>이미지 미리보기</span>
                    </PicNote>
                  )} */}
                  {/* <Carousels imgUrls={imgUrls} /> */}

                  <Carousel fade>
                    {imgUrls.map((img) => {
                      return (
                        <Carousel.Item
                          key={img.id}
                          style={{
                            height: "169.13px",
                            width: 318.82,
                            objectFit: "contain",
                          }}
                        >
                          <img src={img ? img : ""} alt=""/>
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </ImgPreview>

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
                  <Photo />
                  <span>&nbsp;사진 업로드</span>
                </ImgUpload>
              </label>
            </div>

            <div>
              <div>
                <select
                  onChange={onChangePost}
                  name="category"
                  value={myPost.category}
                >
                  <option defaultValue="all">크기 선택</option>
                  <option value="small">소형 - 6kg 이하 | 20cm 이하</option>
                  <option value="medium">중형 - 8kg 이하 | 40cm 이하</option>
                  <option value="big">대형 - 15kg 초과 | 80cm 초과</option>
                </select>
              </div>

              <div>
                <label htmlFor="text" />
                <input
                  type="text"
                  name="title"
                  value={myPost.title}
                  maxLength={30}
                  onChange={onChangePost}
                  placeholder="제목"
                />
              </div>

              <div>
                <label htmlFor="text" />
                <input
                  type="text"
                  name="price"
                  value={myPost.price}
                  onChange={onChangePost}
                  placeholder="희망 가격"
                />
                <span>원</span>
              </div>

              <div>
                <label htmlFor="text" />
                <select
                  onChange={onChangePost}
                  name="local"
                  value={myPost.local}
                >
                  <option defaultValue="">위치 선택</option>
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
                <label htmlFor="text" />
                <textarea
                  type="text"
                  name="content"
                  value={myPost.content}
                  maxLength={200}
                  onChange={onChangePost}
                  placeholder="내용"
                  style={{ minHeight: "100px" }}
                />
              </div>
            </div>
          </div>

          {/* <FormBtn
            onClick={onClose}
            style={{ backgroundColor: "#838383", color: "#fff" }}
          >
            취소
          </FormBtn>
          <FormBtn onClick={writeSubmit} style={{ backgroundColor: "#ED9071" }}>
            저장
          </FormBtn> */}
        </div>
        <div>
          <button
            onClick={onClose}
            style={{ backgroundColor: "#838383", color: "#fff" }}
          >
            취소
          </button>
          <button onClick={writeSubmit} style={{ backgroundColor: "#ED9071" }}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditDetail;

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