import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "../../FullHTML.css";
import { useSelector } from "react-redux"
import postSlice, { __getPostTime, __getKeyword, __getCategory } from "../../redux/modules/postSlice"
import PostList from "../features/PostList"
import SearchList from  "../../components/features/SearchList"
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
// 검색
const Content = () => {
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

const Search = styled.div`
  width: 319.93px;
  height: 24.99px;
  border: 1px solid black;
  border-radius: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 14px auto 15px;

  input {
    width: 230px;
    border: none;
    background-color: transparent;
    margin-right: 10px;
  }
`

const MenuBtn = styled.div`
  width: 319.9px;
  height: 30px;
  margin: 0 20px;
`;

const Category = styled.button`
  box-sizing: border-box;

  width: 79.9px;
  height: 30px;
  /* left: 20px; */
  /* top: 108px; */

  font-family: "SFPro", sans-serif;
  font-size: 14px;
  font-weight: 550;

  background: #ed9071;
  border-radius: 15px;
  border: none;
  position: relative;
  z-index: 100;
`;

const ImgAll = styled.img`
  z-index: 0;
  margin-top: -15px;
`;