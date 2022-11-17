import React, {useState, useEffect, useCallback} from 'react'	
import { useNavigate } from 'react-router-dom'	
import { useDispatch, useSelector } from 'react-redux'	
import { __getDetail, __getPostTime , __deletePost} from"../../redux/modules/postSlice"	


const PostList = () => {	
  const navigator = useNavigate();	
  const dispatch = useDispatch()	
  const posts = useSelector((state)=>state.post.post)
  

  return (	
      <>	
        {	
          posts.response !== undefined &&  
          posts.response.map((post) =>  {	
              // if (post.length !== 0)	
              return(	
                  <div onClick={()=>{navigator(`/Detail/${post.id}`)}} key={post.id}>	
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
        })}
      </>	
  )	
}	
export default PostList ;	
// onClick={()=>{navigator(`/Detail/${post.id}`)}}