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
import '../../../styles/List.css'

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
    <div className="list-wrap">
      <div className="search-box">
        <input
          className="search-input"
          onKeyPress={appKeyPress}
          type="text"
          name="search"
          defaultValue={getSearch.search || ""}
          onChange={onChangeHandler}
        />
        <Search
          className="search-icon"
          onKeyPress={appKeyPress}
          onClick={onClickSearch}
        />
      </div>
      {/* <Buttongroup>
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
      </Buttongroup> */}
      <div className="tab-menu">
        <input type="radio" style={{ display: "none" }} checked />
        <label onClick={onClickAll} htmlFor="category" className="tab-btn">
          전체
        </label>

        <input type="radio" style={{ display: "none" }} name="대형" />
        <label onClick={onClickBig} htmlFor="category" className="tab-btn">
          대형
        </label>

        <input type="radio" style={{ display: "none" }} name="중형" />
        <label onClick={onClickMiddle} htmlFor="category" className="tab-btn">
          중형
        </label>

        <input type="radio" style={{ display: "none" }} name="소형" />
        <label onClick={onClickSmall} htmlFor="category" className="tab-btn">
          소형
        </label>
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
    </div>
  );
};

export default Content;

const Buttongroup = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40px;
  margin-left: -24.5px;
  input[type='radio'] {
    display: none;
  }
  input[type='radio']:checked {
    background-color: #ED9071;
    color: #000;
  }
`;

const Radio = styled.label`
  width: 90.02px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;
  /* background-color: #ed9071; */
  color: #000;
  border-radius: 9px 9px 0 0;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 16.71px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :last-child {
    border-right: none;
  }
`;

const Carouselwrap = styled.div`
  position: relative;
  width: 360px;
  height: 120px;
  margin-top: 36px;
`;