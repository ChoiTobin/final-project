import React, { useEffect , useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import postSlice, { __getPostTime , __getKeyword , __getCategory } from "../../redux/modules/postSlice"
import styled from "styled-components";
import { ButtonGroup } from "react-bootstrap";
import '../../App.css';

const Content = () => {
  const dispatch = useDispatch()
  // const searchposts = useSelector((state) => state.post.post.response)
  // const {posts} = useSelector((state)=>state.post)
  //검색
  const [ getSearch , setGetSearch ] = useState({search:""});
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setGetSearch({...getSearch,[name]: value,});
  };
  
  //키워드검색 #제목 #내용 #지역
  const onClickSearch = () =>{ 
    if (getSearch.search.trim() === "" )  {
      return alert("내용을 입력해주세요.");
    } 
    dispatch(__getKeyword(getSearch.search));
  }
  // useEffect(() => {	
  //   dispatch(__getPostTime());	
  // }, [dispatch])

  const onClickAll = () =>{ //전체검색
    dispatch(__getPostTime());
  }
  
  // 카테고리검색
  const onClickBig = () =>{ 
    dispatch(__getCategory("대형"));
  } 
  const onClickMiddle = () =>{ 
    dispatch(__getCategory("중형"));
  } 
  const onClickSmall = () =>{ 
    dispatch(__getCategory("소형"));
  } 
  
  return (
      <div>
        <InputBox>
          <Input type="text" name="search" defaultValue={getSearch.search || ""} onChange={onChangeHandler} />
          <Img onClick={onClickSearch} src={require("../../img/search.png")} />
        </InputBox>
        <ButtonGroup>
            <li><Button type='button' onClick={onClickAll}>전체</Button></li>
            <li><Button type='button' name="대형" onClick={onClickBig}>대형</Button></li>
            <li><Button type='button' name="중형" onClick={onClickMiddle}>중형</Button></li>
            <li><Button type='button' name="소형" onClick={onClickSmall}>소형</Button></li>
        </ButtonGroup>
      </div> 
  )
}

export default Content

const Input = styled.input`
  position:relative;
  border:none;
  border:1px solid #666;
  border-radius:30px;
  width:95%;
  height:36px;
  text-indent:12px;
`
const Button =styled.button`
  width:90px;
  height:36px;
  border:none;
  background-color:#ddd;
  border-radius:30px;
  font-weight:600;
  // :hover{
  //   background-color:#ED9071;
  //   color:#fff;
  // }
`
const InputBox = styled.div`
  position:relative;
`
const Img = styled.img`
  position:absolute;
  top:8px;
  right:30px;
  width:20px;
`
