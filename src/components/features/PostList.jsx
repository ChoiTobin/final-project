import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { __getPostTime } from"../../redux/modules/postSlice"

const PostList = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch()

  
  const posts = useSelector((state)=>state.post.post)

  console.log(posts)

  //유즈이펙트가 비동기로 실행된다 우리는 디스패치가 순서대로 작동하길 원함 근데 그게 아니고 유지이펙트가 비동기처리로되면서 이니시스테이셜 값이
  //유즈이펙트가 실행이되면  맵을 정상적으로 돌릴 수 있음
  
  useEffect(() => {
    dispatch(__getPostTime());
  }, [dispatch]);
  
  return (
      <>
      리스트뽑
        {
          posts.length > 0 &&
          posts.map((post) =>  {
              if (post.length !== 0)
              return(
                  <div onClick={()=>{navigator(`/detail/${post.postId}`)}} key={post.postId}>
                    <ul>
                      <li>{post.title}</li>
                      <li>{post.price}</li>
                      <li>{post.category}</li>
                      <li>{post.content}</li>
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
