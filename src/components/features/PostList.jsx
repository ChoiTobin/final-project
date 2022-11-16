import React, {useState} from 'react'	
import { useNavigate } from 'react-router-dom'	
import { useDispatch, useSelector } from 'react-redux'	
import { useEffect } from 'react'	
import { useInView } from "react-intersection-observer"
import { __getDetail, __getPostTime , __deletePost} from"../../redux/modules/postSlice"	
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
      </>	
  )	
}	
export default PostList ;	
// onClick={()=>{navigator(`/Detail/${post.postId}`)}}