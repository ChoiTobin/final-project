import React, {useState,useRef} from 'react'
import { useDispatch  } from "react-redux";
import { useNavigate } from 'react-router';
import styled from "styled-components"
import useImgUpload from '../hooks/useImgUpload'
import { __addPost } from "../../redux/modules/postSlice";	
import { ButtonGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import upload from "../../img/upload.png";
const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [conimal , setConimal] = useState({
    title:"",
    price:"",
    content:"",
    category:"크기",
    state:"진행중",
    local:"",
    date:"",
    imgs:[""]
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
    if (conimal.title === "") {
      alert("제목을 입력해주세요.")
      return
    }
    if (conimal.content === "") {
      alert("내용을 입력해주세요.")
      return
    }
    if (conimal.price === "") {
      alert("의뢰비용을 입력해주세요.")
      return
    }
    setConimal("")

    const data = {
      "title" : conimal.title,
      "content" : conimal.content,
      "category" : conimal.category,
      "price" : parseInt(conimal.price), // 문자를  string숫자로 변환해서 보내야할때 parseInt로 감싸서 보내주면된다.
      "state" : "진행중",
      "local" : conimal.local,
      "date" : conimal.date
    }
    
    //폼 데이터에 글작성 데이터 넣기
    formData.append("postImg",fileUrls);
    formData.append("postRequestDto", new Blob([JSON.stringify(data)], {
      type: "application/json"
    }));
    dispatch(__addPost(formData));	  
    }
    
  return (
    <Bg>
      <Form>
      <p style={{fontWeight: 110, fontSize: 32, textAlign:"center", color:"#ED9071"}}>POST</p>
        <label htmlFor="imgFile" />
            <Carousel fade >
                { 
                  fileUrls.map((img) => {
                    return (
                      <Carousel.Item key={img.id} 
                        style={{
                        height: "166px",
                        objectFit: "contain",
                      }}>            
                        <Img style={{width:'550px'}} src={img ? img : ""} />  
                      </Carousel.Item>)
                    })
                }
            </Carousel>
        <InputImg type="File" 
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
          <img src={upload} style={{ width: "60px" }} alt="" />
        </ImgUpload>
        <Select name="category" value={conimal.category || ""} onChange={onChangeHandler} required>
            <option default value="크기">크기 선택</option>
            <option value="대형">대형- 15kg초과</option>
            <option value="중형">중형- 7kg초과</option>
            <option value="소형">소형- 5kg초과</option>
        </Select>
        <Input type="text" maxLength={30} name="title" value={conimal.title || ""} onChange={onChangeHandler} required placeholder="제목"/> 
        <Input2 type="date" name="date" value={conimal.date || ""} onChange={onChangeHandler} />
        <One>
          <Input style={{width:"100%"}}
            type="number" 
            name="price" 
            value={conimal.price || ""} 
            onChange={onChangeHandler} 
            placeholder="희망가격"
            required
          />
          <P2>원</P2>
        </One>

        <Select2  name="local" value={conimal.local || ""} required onChange={onChangeHandler} >
            <option default value='지역을 선택해주세요'>위치</option>
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
        </Select2>
        <textarea style={{width:"100%",height:"8em",resize:"none",border:"none", textIndent:10,outline:"none"}} 
          name="content" 
          value={conimal.content || ""} 
          onChange={onChangeHandler} 
          required placeholder="내용"
        />
        <input type="hidden" name="state" value="진행중" onChange={onChangeHandler} />
        <ButtonGroup style={{marginTop:14}}>
        <FormBtn1 onClick={() => navigate("/home")}>취소하기</FormBtn1>
        <FormBtn2 onClick={writeSubmit}>업로드</FormBtn2>
        </ButtonGroup>
      </Form>
      
    </Bg>
  )
}

export default Post;
const Buttongroup = styled.div`
  display : flex;
  margin-top:14px;
`
const One = styled.div`
  display:flex;
  position:relative;
` 
const P2 = styled.p`
  position:absolute;
  right:0;
  left:333px;
  top:5px;
  color:#787878;
`
const Input4 =styled.input`
  width:100%;
  height:36px;
  text-indent:8px;
  outline: none;
  border:1px solid #d8d8d8;
  border-radius:3px;
  margin-bottom:12px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`
const Bg = styled.div`
  width:95%;
  min-width:360px;
  margin: 0 auto;
  background-color:#f6f0ee;
`
const ImgUpload = styled.button`
  border: none;
  border-radius: 10px;
  margin:13px 0;
  border:1px solid #666;
  img {
    align-items: center;
    justify-content: center;
    /* margin: 10px 0 0 10px; */
  }
`
const Form = styled.div`
  width:95%;
  max-width:360px;   
  margin: 0 auto;
  display:flex;
  flex-direction:column;
`
const Img = styled.img`
  object-fit: contain;
`
const FormBtn1 = styled.button`
  display:block;
  border:none;
  width:180px;
  height:50px;
  cursor: pointer;
  font-size:18px;
  font-weight:600;
  background-color:#838383;
  color:#fff;
`
const FormBtn2 = styled.button`
outline: none;
  display:block;
  border:none;
  width:180px;
  height:50px;
  cursor: pointer;
  font-size:18px;
  font-weight:600;
  background-color:#ED9071;
`
 
const Input = styled.input`
  height:36px;
  margin-bottom:12px;
  text-indent:8px;
  outline: none;
  border:1px solid #d8d8d8;
  border-radius:3px;
`
const Input2 = styled.input`
  height:36px;
  margin-bottom:12px;
  text-indent:5px;
  border:none;
  outline: none;
  border:1px solid #333;
  border-radius:3px;
`

const Select = styled.select`
  margin-bottom:12px;
  border-radius:3px;
  height:36px;
  text-indent:5px;
  outline: none;
  border:1px solid #696969;
`
const Select2 = styled.select`
  margin-bottom:12px;
  height:36px;
  text-indent:8px;
  outline: none;
  border:none;
  border:1px solid #666;
  border-radius:3px;
  
`
const InputImg = styled.input`
  display:none;
  height: 40px;
  background: #fff;
  cursor: pointer;
`


