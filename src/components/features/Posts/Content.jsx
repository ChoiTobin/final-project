import React, { useEffect, useState } from "react";
import "../../../FullHTML.css";
import PostList from "../Posts/PostList";
import SearchList from "../Posts/SearchList";

const Content = () => {
  const [categoryState, setCategoryState] = useState("")
  const [searchState, setSearchState] = useState("")

  useEffect(() => {
    setSearchState(searchState)
  }, [searchState])
  useEffect(() => {
    setCategoryState(categoryState)
  }, [categoryState])

  return (
    <>
      <SearchList
        categoryState={categoryState}
        setCategoryState={setCategoryState}
        searchState={searchState}
        setSearchState={setSearchState}
      />
      <PostList
        categoryState={categoryState}
        setCategoryState={setCategoryState}
        searchState={searchState}
        setSearchState={setSearchState}
      />
    </>
  );
};

export default Content;
