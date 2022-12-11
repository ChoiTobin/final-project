import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// React BootStrap Library Import
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import useImgUpload from "../../hooks/useImgUpload";
import { ReactComponent as Photo } from "../../../img/form-add.svg";
import { __putMyPost } from "../../../redux/modules/mypageSlice";

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
        formData.append("imgs", file);
      });
    } else {
      formData.append("imgs", null);
    }

    const myPostData = {
      id: myPost.id,
      title: myPost.title,
      content: myPost.content,
      category: myPost.category,
      price: parseInt(myPost.price),
      local: myPost.local,
    };

    formData.append("imgs", imgUrls);

    // formData에 작성한 데이터 넣기
    formData.append(
      "post",
      new Blob([JSON.stringify(myPostData)], {
        type: "application/json",
      })
    );

    // API 날리기
    dispatch(__putMyPost(formData));
    window.alert("게시글이 수정되었습니다!");
    window.location.reload('/mypage')
  };

  return (
    <div>
      <Layouts>
        <div className="content">
          <Form>
            <Top>
              <label htmlFor="text" />
              <span>POST</span>
            </Top>
            <div>
              <label htmlFor="imgFile" style={{backgroundColor: "#F6F0EE"}}>
                <ImgPreview>
                  {/* <Carousel fade>
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
                  </Carousel> */}
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

            <Content>
              <Select>
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
              </Select>

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
                <Price
                  type="text"
                  name="price"
                  value={myPost.price}
                  onChange={onChangePost}
                  placeholder="희망 가격"
                />
                <Won>원</Won>
              </div>

              <Select>
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
              </Select>

              <div>
                <label htmlFor="text" />
                <Textarea
                  type="text"
                  name="content"
                  value={myPost.content}
                  maxLength={200}
                  onChange={onChangePost}
                  placeholder="내용"
                  style={{ minHeight: "100px" }}
                />
              </div>
            </Content>
          </Form>
        </div>
        <div>
          <FormBtn
            onClick={onClose}
            style={{ backgroundColor: "#838383", color: "#fff" }}
          >
            취소
          </FormBtn>
          <FormBtn onClick={writeSubmit} style={{ backgroundColor: "#ED9071" }}>
            저장
          </FormBtn>
        </div>
      </Layouts>
    </div>
  );
};
export default EditDetail;

const Layouts = styled.div`
  width: 340px;
  min-height: 514px;
  height: 514.3px;
  background-color: #f6f0ee;
  margin-bottom: 150px;

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
  display: flex;
  flex-direction: column;
  width: 318.82px;
  margin: 9.7px 0 0 -6px;
`;

const Top = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: 32px;
  font-weight: 110;
  line-height: 38.19px;
  color: rgba(237, 144, 113, 1);
  margin-bottom: 12.59px;
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const ImgUpload = styled.button`
  width: 318.5px;
  height: 53.97px;
  border: 1px solid #696969;
  background-color: #f3f3f3;
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
  span {
    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    color: rgba(57, 57, 57, 0.93);
  }
`;

const ImgPreview = styled.div`
  width: 318.82px;
  height: 166px;
  border: 1px solid #696969;
  border-radius: 5px;
  background-color: #f3f3f3;
`;

const Content = styled.div`
  input {
    width: 318px;
    height: 33.78px;
    margin: 6.115px auto 6.115px;
    padding-left: 19.96px;
    border: 1px solid #929292;
    border-radius: 3px;
    background-color: rgba(243, 243, 243, 0.64);
    ::placeholder {
      color: #5e5e5e;
      font-family: "Pretendard", sans-serif;
      font-size: 16px;
    }
  }
`;

const Price = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  padding-left: -10px;
`;

const Won = styled.span`
  margin-left: -35px;
  margin-right: 20px;
  color: #787878;
  font-family: "Pretendard", sans-serif;
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
    padding-left: 17px;
    background-color: rgba(243, 243, 243, 0.64);
    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    color: rgba(94, 94, 94, 1);
  }
`;

const Textarea = styled.textarea`
  margin: 6.115px auto 6.115px;
  width: 318.82px;
  height: 148.13px;
  border: 1px solid rgba(146, 146, 146, 0.95);
  border-radius: 3px;
  padding: 13.85px 0 0 19.96px;
  background-color: rgba(243, 243, 243, 0.64);
  ::placeholder {
    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    line-height: 19.09px;
    color: rgba(120, 120, 120, 1);
  }
`;

const FormBtn = styled.button`
  cursor: pointer;
  margin: 8.805px auto 0;
  width: 167.5px;
  height: 45.16px;
  border: none;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 590;
`;
