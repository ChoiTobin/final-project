import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  __getPostTime,
  __getKeyword,
  __getCategory,
} from "../../../redux/modules/postSlice";
import styled from "styled-components";
import "../../../App.css";
import Carousel from "react-bootstrap/Carousel";
import { ReactComponent as Search } from "../../../img/search.svg";

const Content = () => {
  const dispatch = useDispatch();
  // const searchposts = useSelector((state) => state.post.post.response)
  // const {posts} = useSelector((state)=>state.post)

  //검색
  const [getSearch, setGetSearch] = useState({ search: "" });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setGetSearch({ ...getSearch, [name]: value });
  };

  //키워드검색 #제목 #내용 #지역
  const onClickSearch = () => {
    if (getSearch.search.trim() === "") {
      return alert("내용을 입력해주세요.");
    }
    dispatch(__getKeyword(getSearch.search));
  };

  const appKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
      // setGetSearch("")
    }
  };

  const [current, setCurrent] = useState(0);
  const tabs = ['전체', '대형', '중형', '소형']
  const selected = { style: { backgroundColor: "ED9071" } }
  
  const onClickTab = (index) => {
    const pics = ['../../../img/all.png', '../../../img/big.png', '../../../img/medium.png', '../../img/small.png']
    setCurrent(pics[index])
  }
  

  const onClickAll = () => {
    //전체검색
    // props.setState(0)
    // console.log("vmfka",props.state)
    dispatch(__getPostTime()); //문제 온클릭했을때 셋이되기전에 겟을 먼저한다
  };
  const onClickBig = () => {
    dispatch(__getCategory("대형"));
  };
  const onClickMiddle = () => {
    dispatch(__getCategory("중형"));
  };
  const onClickSmall = () => {
    dispatch(__getCategory("소형"));
  };

  return (
    <SearchListWrap>
      <InputBox>
        <Input
          onKeyPress={appKeyPress}
          type="text"
          name="search"
          defaultValue={getSearch.search || ""}
          onChange={onChangeHandler}
        />
        <Search
          onKeyPress={appKeyPress}
          onClick={onClickSearch}
          style={{ marginLeft: "315px", zIndex: 1, position: "absolute", cursor: 'pointer' }}
        />
      </InputBox>
      <Buttongroup>
        <Button type="button" onClick={onClickAll}>
          전체
        </Button>
        <Button type="button" name="대형" onClick={onClickBig}>
          대형
        </Button>
        <Button type="button" name="중형" onClick={onClickMiddle}>
          중형
        </Button>
        <Button type="button" name="소형" onClick={onClickSmall}>
          소형
        </Button>
      </Buttongroup>
      <div>
        {tabs.map((tab, index) => {
          <ul>
            <li key={index} onClick={() => onClickTab(index)}
            style={current === index ? selected : {}}>
            {`Tab${index +1}`}
            </li>
            <span><img src={tab[index]}alt=""/></span>
          </ul>
          
        })}
      </div>
      {/* <Carouselwrap>
        <Carousel id="carousel">
          <Carousel.Item>
            <SlideImg src={require("../../../img/all.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <SlideImg src={require("../../../img/big.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <SlideImg src={require("../../../img/medium.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <SlideImg src={require("../../../img/small.png")} />
          </Carousel.Item>
        </Carousel>
      </Carouselwrap> */}
    </SearchListWrap>
  );
};

export default Content;

const SearchListWrap = styled.div`
  position: relative;
  height: 172px;
`;
const Buttongroup = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40px;
`;

const Button = styled.button`
  width: 90.02px;
  height: 26px;
  border: none;
  background-color: #fff;
  border-radius: 9px 9px 0 0;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 16.71px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: #ed9071;
    color: #5a5a5a;
  }
`;
const Carouselwrap = styled.div`
  position: relative;
  width: 360px;
  height: 120px;
  margin-top: 36px;
`;

const Input = styled.input`
  position: relative;
  border: none;
  outline: none;
  border: 1px solid #6f6f6f;
  border-radius: 4px;
  width: 95%;
  min-width: 340px;
  text-indent: 12px;
  margin-left: 10px;
  background-color: transparent;
`;

const InputBox = styled.div`
  width: 313.01px;
  height: 30px;
  position: relative;
  align-items: center;
  margin: 6px 0 8px;
  display: flex;
  flex-direction: row;

`;
const Img = styled.img`
  width: 360px;
  height: 109.28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 37px;
`;
const SlideImg = styled.img`
  object-fit: cover;
  width: 360px;
  height: 140px;
`;
