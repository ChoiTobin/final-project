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
  }
  
  const onClickHandler = (data) => {
    setCategoryState(data);
  };

  const data = [ "전체", "대형", "중형", "소형" ]

  const [active, setActive] = useState(data[0]);

  return (
    <div className="wrap">
      <div className="search">
        <input
          className="search-input"
          onKeyPress={appKeyPress}
          type="text"
          name="search"
          aria-labelledby="search"
          aria-labelledby="search"
          defaultValue={getSearch.search || ""}
          onChange={onChangeHandler}
        />
        <label htmlFor="search" />
        <label htmlFor="search" />
        <img
          className="search-icon"
          onClick={() => onClickSearch()}
          onClick={() => onClickSearch()}
          src={require("../../../img/search.png")}
          alt=""
        />
      </div>

      <div className="btn-wrap">
        {data.map((type) => {
          return (
            <div className="tab-menu" key={type}>
              <input type="radio" style={{ display: "none" }} />
              <Tab
                active={active === type}
                onClick={() => {
                  onClickHandler(type);
                  setActive(type);
                }}
                htmlFor="category"
                className="tab-btn"
              >
                {type}
              </Tab>
            </div>
          );
        })}
      <div className="btn-wrap">
        {data.map((type) => {
          return (
            <div className="tab-menu" key={type}>
              <input type="radio" style={{ display: "none" }} />
              <Tab
                active={active === type}
                onClick={() => {
                  onClickHandler(type);
                  setActive(type);
                }}
                htmlFor="category"
                className="tab-btn"
              >
                {type}
              </Tab>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchList;

const Tab = styled.div`
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: #FFF;
    background-color: #ED9071;
  `}
const Tab = styled.div`
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: #FFF;
    background-color: #ED9071;
  `}
`;