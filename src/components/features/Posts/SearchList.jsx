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
    <div>
      <div>
        <input
          onKeyPress={appKeyPress}
          type="text"
          name="search"
          defaultValue={getSearch.search || ""}
          onChange={onChangeHandler}
        /><Search/>
        {/* <Img
          onKeyPress={appKeyPress}
          onClick={onClickSearch}
          src={require("../../../img/")}
        /> */}
        <div onKeyPress={appKeyPress} onClick={onClickSearch} style={{ marginLeft: "315px", zIndex: 1,  position: "absolute" }} />
      </div>
      <div>
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
      </div>
      <Carouselwrap>
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
      </Carouselwrap>
    </div>
  );
};

export default Content;

const Carouselwrap = styled.div`
  position: relative;
  width: 360px;
  height: 120px;
`;

const SlideImg = styled.img`
  object-fit: cover;
  width: 360px;
  height: 140px;
`;
