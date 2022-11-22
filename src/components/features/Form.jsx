import React, {useState,useRef} from 'react'
import { useDispatch  } from "react-redux";
import { useNavigate } from 'react-router';
import styled from "styled-components"
import useImgUpload from '../hooks/useImgUpload'
import { __addPost } from "../../redux/modules/postSlice";	
import { $CombinedState } from 'redux';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

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
        <Header/>
        <Form>
        <label htmlFor="imgFile" />
          <div className="preview">
                {/*previews map쓸곳*/
                  fileUrls.map((val, i) => {
                    return (
                      <Img src={val} alt="image" key={i} />
                    )
                  })
                }
            </div>
            <input type="File" 
              id="imgFile"
              name="imgFile"
              accept="image/*" 
              onChange={onChangeImage}
              ref={imgRef} 
              multiple 
            />
            <label htmlFor="text">제목</label>
            <input type="text" maxLength={30} name="title" value={conimal.title || ""} onChange={onChangeHandler} placeholder="제목"/> 
            <label htmlFor="text">금액</label>
            <input type="text" name="price" value={conimal.price || ""} onChange={onChangeHandler} placeholder="희망금액"/>
            <label htmlFor="text">내용</label>
          <input type="text" maxLength={200} name="content" value={conimal.content || ""} onChange={onChangeHandler} placeholder="내용" style={{ minHeight: "100px"}} />
            <select name="category" value={conimal.category || ""} onChange={onChangeHandler} >
                <option default value='반려동물 크기를 정해주세요'>반려동물 크기를 정해주세요</option>
                <option value="대형">대형</option>
                <option value="중형">중형</option>
                <option value="소형">소형</option>
            </select>
            <select name="local" value={conimal.local || ""} onChange={onChangeHandler} >
                <option default value='지역을 선택해주세요'>지역을 선택해주세요</option>
                <option value='서울특별시'>서울특별시</option>
                <option value='강원도'>강원도</option>
                <option value='경기도'>경기도</option>
                <option value='경상남도'>경상남도</option>
                <option value='경상북도'>경상북도</option>
                <option value='광주광역시'>광주광역시</option>
                <option value='대구광역시'>대구광역시</option>
                <option value='대전광역시'>대전광역시</option>
                <option value='부산광역시'>부산광역시</option>
                <option value='울산광역시'>울산광역시</option>
                <option value='인천광역시'>인천광역시</option>
                <option value='전라남도'>전라남도</option>
                <option value='전라북도'>전라북도</option>
                <option value='충청남도'>충청남도</option>
                <option value='충청북도'>충청북도</option>
            </select>
            <input type="date"  name="date" value={conimal.date || ""} onChange={onChangeHandler} />
            <input type="hidden" name="state" value="진행중" onChange={onChangeHandler} />
          </Form>
          <div>
            <FormBtn onClick={writeSubmit}>작성하기</FormBtn>
            <FormBtn>취소하기</FormBtn>
        </div>
        <Footer/>
      </Layouts>
      
    </>
  )
}

export default Post;

const Form = styled.div`
  // width:375px;
  width:500px;
  display:flex;
  flex-direction:column;
`
const Img = styled.img`
  width:100px;
  height:100px;
  background-size:cover;
`

// 버튼 누르면 손모양 나오게 하는 마우스 커서
const FormBtn = styled.button`
  cursor: pointer;
`
const Layouts = styled.div`
  width: 95%;
  max-width: 360px;
  height: 640px;
  margin: auto;
  /* background-color: lightpink; */
`;