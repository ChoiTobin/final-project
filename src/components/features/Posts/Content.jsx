import React, { useEffect, useState } from "react";
import "../../../FullHTML.css";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import PostList from "../Posts/PostList";
import SearchList from "../Posts/SearchList";

const Content = () => {

  const [categoryState,setCategoryState] = useState("전체")
  const [searchState,setSearchState] = useState("")

  useEffect(() => {
    setCategoryState(categoryState)
  }, [categoryState])

  useEffect(() => {
    setSearchState(searchState)
  }, [searchState])

  return (
    <>
      <Header/>
      <SearchList setCategoryState={setCategoryState} setSearchState={setSearchState}/>
      <PostList categoryState={categoryState} setCategoryState={setCategoryState} searchState={searchState} setSearchState={setSearchState} />
      <Footer/>
    </>
  );
};

export default Content;
