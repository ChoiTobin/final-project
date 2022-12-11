import React, { useEffect, useState } from "react";
import "../../../FullHTML.css";
import PostList from "../Posts/PostList";
import SearchList from "../Posts/SearchList";

const Content = () => {


  const [categoryState,setCategoryState] = useState("전체")
  const [searchState,setSearchState] = useState("")


  useEffect(() => {
    setCategoryState(categoryState)
    console.log("카테고리 바뀌었나?",categoryState);
  }, [categoryState])

  useEffect(() => {
    setSearchState(searchState)
    console.log("검색어는?",searchState);
  }, [searchState])

  return (
    <>
      <SearchList setCategoryState={setCategoryState} setSearchState={setSearchState}/>
      <PostList categoryState={categoryState} setCategoryState={setCategoryState} searchState={searchState} setSearchState={setSearchState}/>
    </>
  );
};

export default Content;
