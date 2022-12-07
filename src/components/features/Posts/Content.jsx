import React from "react"
import "../../../FullHTML.css";
import PostList from "../Posts/PostList"
import SearchList from  "../Posts/SearchList"

const Content = () => {
  
  return (
    <>
      <SearchList />
      <PostList  /> 
    </>
  );
}

export default Content