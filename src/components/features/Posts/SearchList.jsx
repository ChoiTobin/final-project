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

const Content = () => {
  const dispatch = useDispatch();

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
    console.log("검색:", getSearch.search);
  };

  const appKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };
  // const [page, setPage] = useState(0);
  // const [petsize, setPetsize] = useState();
  // let obj = {
  //   page:page,
  //   petsize:petsize
  // }

  let All = "전체검색";
  localStorage.setItem(All, "전체");
  const onClickAll = () => {
    //전체검색
    //dispatch(__getPostTime(setPage));//문제 온클릭했을때 셋이되기전에 겟을 먼저한다
    window.location.replace("/home");
    localStorage.setItem(All, "전체");

    //전체조회 눌렀을때 배열을 비우고 다시 0페이지인 배열을
    //뿌려줘야하는데... 어떻게해야할지 고민해봐야할듯
  };
  const onClickBig = () => {
    dispatch(__getCategory("대형"));
    localStorage.removeItem(All);
  };
  const onClickMiddle = () => {
    dispatch(__getCategory("중형"));
    localStorage.removeItem(All);
  };
  const onClickSmall = () => {
    dispatch(__getCategory("소형"));
    localStorage.removeItem(All);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          onKeyPress={appKeyPress}
          type="text"
          name="search"
          defaultValue={getSearch.search || ""}
          onChange={onChangeHandler}
        />
        <img
          onKeyPress={appKeyPress}
          onClick={onClickSearch}
          src={require("../../../img/search.png")}
        />
      </div>

      <div className="btn-group">
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

      {/* 캐러셀슬라이드 */}
      <Carouselwrap>
        <Carousel>
          <Carousel.Item>
            <img src={require("../../../img/all.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../../../img/big.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../../../img/middle.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../../../img/small.png")} />
          </Carousel.Item>
        </Carousel>
      </Carouselwrap>
    </div>
  );
};

export default Content;
const Carouselwrap = styled.div``;
