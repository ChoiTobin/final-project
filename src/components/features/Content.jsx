import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "../../FullHTML.css";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import postSlice, { __getPostTime, __getKeyword, __getCategory } from "../../redux/modules/postSlice"
import PostList from "../features/PostList"
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { ReactComponent as SearchIcon } from "../../img/search.svg";
import SearchList from "../../components/features/SearchList"
import All from "../../img/all.png"
// 검색
const Content = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state)=>state.post.post)	  
  // const searchposts = useSelector((state) => state.post.post.response)
  
  return (
    <Layout>
      <Header />
      <SearchList />
      <PostList posts={posts} key={posts.postId} />
      <Footer />
    </Layout>
  );
}

export default Content

const Layout = styled.div`
  /* background-color: #ED9071; */
  max-width: 640px;
`

