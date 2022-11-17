import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'	
import { useDispatch, useSelector } from 'react-redux'	
import { useEffect } from 'react'	
// yarn add react-intersection-observer
import { useInView } from "react-intersection-observer"
import { __getPostTime } from "../../redux/modules/postSlice";
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
const PostList = () => {	
  const navigator = useNavigate();	
  const dispatch = useDispatch()	
  const [ref, inView] = useInView()	
  const posts = useSelector((state)=>state.post.post)	
  // console.log("포스츠",posts)	
  
  useEffect(() => {	
    dispatch(__getPostTime());	
  }, [dispatch]);	
  
  return (	
    <>
      <Layouts>
        <Header />
        {	
          posts.response !== undefined &&  
          posts.response.map((post) =>  {	
              // if (post.length !== 0)	
              return(	
                  <div ref={ref} key={post.id}>	
                    <ul>	
                      <li>{post.state},{post.title}</li>	
                      {/* <img src={post.imgs[0]} alt="#" /> */}
                      <li>{post.content}</li>
                      <li>{post.category}</li>
                      <li>{post.price}원</li>		
                      <li>{post.date}</li>		
                      <li>{post.local}</li>		
                      <li>{post.createdAt}</li>	
                    </ul>	
                  </div>	
                )	
          })	
        }	
        <Footer/>
      </Layouts>
    </>	
  )	
}	
export default PostList ;	
// onClick={()=>{navigator(`/Detail/${post.postId}`)}}

const Layouts = styled.div`
  width: 95%;
  max-width: 414px;
  height: 785px;
  margin: auto;
  /* background-color: lightpink; */
`;