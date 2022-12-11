import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getPostTime,
  __getKeyword,
  __getCategory,
} from "../../../redux/modules/postSlice";
import styled from "styled-components";
import "../../../App.css";
import Carousel from "react-bootstrap/Carousel";
import "../../../../src/index.css";
import "../../../styles/searchlist.css";

const SearchList = ({setCategoryState,setSearchState}) => {
  const dispatch = useDispatch()
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
    setSearchState(getSearch.search);
    setCategoryState("검색");
  };

  const appKeyPress = (e) => {
    if (e.key === 'Enter') {
    onClickSearch()
        }
  }
  
  const onClickHandler = (data) => {
    setCategoryState(data);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          className="search-input"
          onKeyPress={appKeyPress}
          type="text"
          name="search"
          defaultValue={getSearch.search || ""}
          onChange={onChangeHandler}
        />
        <img
          className="search-icon"
          onClick={()=>onClickSearch()}
          src={require("../../../img/search.png")}
          alt=""
        />
      </div>

      {/* <div className="btn-group">
        <button type="button" onClick={onClickAll}>
          전체
        </button>
        <button type="button" name="대형" onClick={onClickBig}>
          대형
        </button>
        <button type="button" name="중형" onClick={onClickMiddle}>
          중형
        </button>
        <button type="button" name="소형" onClick={onClickSmall}>
          소형
        </button>
      </div> */}

      <div className="tab-menu">
        <input type="radio" style={{ display: "none" }}  />
        <label value="전체" onClick={()=>onClickHandler("전체")} htmlFor="category" className="tab-btn">
          전체
        </label>

        <input value="대형" type="radio" style={{ display: "none" }} name="대형" />
        <label onClick={()=>onClickHandler("대형")} htmlFor="category" className="tab-btn">
          대형
        </label>

        <input value="중형" type="radio" style={{ display: "none" }} name="중형" />
        <label onClick={()=>onClickHandler("중형")} htmlFor="category" className="tab-btn">
          중형
        </label>

        <input value="소형" type="radio" style={{ display: "none" }} name="소형" />
        <label onClick={()=>onClickHandler("소형")} htmlFor="category" className="tab-btn">
          소형
        </label>
      </div>

      {/* 캐러셀슬라이드 */}
      {/* <Carouselwrap>
        <Carousel>
          <Carousel.Item>
            <SlideImg src={require("../../../img/all.png")} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <SlideImg src={require("../../../img/big.png")} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <SlideImg src={require("../../../img/middle.png")} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <SlideImg src={require("../../../img/small.png")} alt="" />
          </Carousel.Item>
        </Carousel>
      </Carouselwrap> */}
    </div>
  );
};

export default SearchList;

const Carouselwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 360px;
  height: 120px;
  margin-top: 17px;
`;

const SlideImg = styled.img`
  object-fit: cover;
  width: 360px;
  height: 140px;
`;
