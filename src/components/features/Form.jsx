import React, {useState,useRef} from 'react'
import { useDispatch  } from "react-redux";
import styled from "styled-components"
import useImgUpload from '../hooks/useImgUpload'
import { __postConimal} from "../../redux/modules/postSlice"

const Post = () => {
  const dispatch = useDispatch();
  const [conimal , setConimal] = useState({
    title:"",
    price:"",
    content:"",
    category:"대형"
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
        formData.append("images", file);
      })
    } else {
      formData.append("images", null);
    }
    if (conimal.title === "") {
      alert("제목을 입력해주세요.")
      return
    }
    if (conimal.content === "") {
      alert("내용을 입력해주세요.")
      return
    }
    if (conimal.price === "") {
      alert("가격을 입력해주세요.")
      return
    }
    setConimal("")
    
    //폼 데이터에 글작성 데이터 넣기
    formData.append("postImg",fileUrls);
    formData.append("title",conimal.title);
    formData.append("content",conimal.content);
    formData.append("category",conimal.category);
    formData.append("price",conimal.price);
    dispatch(__postConimal(formData));
  }
  
  return (
    <>
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
        <input type="text" maxLength={30} name="title" value={conimal.title || ""} onChange={onChangeHandler} placeholder="제목"/> 
        <select name="category" value={conimal.category || ""} onChange={onChangeHandler} >
            <option value="대형">대형</option>
            <option value="중형">중형</option>
            <option value="소형">소형</option>
        </select>
        <input type="text" name="price" value={conimal.price || ""} onChange={onChangeHandler} placeholder="희망가격"/>
        <input type="text" maxLength={200} name="content" value={conimal.content || ""} onChange={onChangeHandler} placeholder="내용"/>
      </Form>
      <div>
        <button onClick={writeSubmit}>작성하기</button>
        <button>취소하기</button>
      </div>
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
  hegith:100px;
  background-size:cover;
`