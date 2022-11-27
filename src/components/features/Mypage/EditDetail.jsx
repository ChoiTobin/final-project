import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import useImgUpload from "../hooks/useImgUpload";
import { ReactComponent as Photo } from "../../img/photo.svg";
import { __putMyPost } from "../../redux/modules/mypageSlice";

// 내가 쓴 게시글 수정 및 삭제

const EditDetail = () => {
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
    <Layouts>
      <Form>
        <div>
          <label htmlFor="text" />
        </div>
        <div>
          <label htmlFor="imgFile">
            <ImgPreview>
              {/* 이미지 미리보기 Preview */}
              {imgUrls.length !== 0 ? (
                imgUrls.map((imgs, id) => {
                  return <img src={imgs} alt="업로드 사진 미리보기" key={id} />;
                })
              ) : (
                <PicNote>
                  <Photo /> <span>이미지 미리보기</span>
                </PicNote>
              )}
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
            <select onChange={onChangePost} name="local" value={myPost.local}>
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
        </Content>
      </Form>

      <FormBtn style={{ backgroundColor: "#838383", color: "#fff" }}>
        취소
      </FormBtn>
      <FormBtn onClick={writeSubmit} style={{ backgroundColor: "#ED9071" }}>
        저장
      </FormBtn>
    </Layouts>
  );
};
export default EditDetail;

const Layouts = styled.div`
  width: 360px;
  min-height: 514px;
  height: 514.3px;
  background-color: #f6f0ee;
  margin: auto;

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
  margin: 40.34px auto 0;
`;

const PicNote = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 65.33px;
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
`;

const ImgPreview = styled.div`
  width: 318.82px;
  height: 166px;
  border: 1px solid #000;
  border-radius: 5px;
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
      font-family: "Spoqa Han Sans Neo", sans-serif;
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
  font-family: "Spoqa Han Sans Neo", sans-serif;
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
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-size: 16px;
    ::placeholder {
      color: #5e5e5e;
    }
  }
`;

// 버튼 누르면 손모양 나오게 하는 마우스 커서
const FormBtn = styled.button`
  cursor: pointer;
  margin: 8.805px auto 0;
  width: 177px;
  height: 45.16px;
  border: none;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 16px;
  font-weight: 590;
`;
