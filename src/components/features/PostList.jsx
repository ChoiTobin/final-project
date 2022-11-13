import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { __getConimal } from"../../redux/modules/postSlice"

const PostList = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      __getConimal(mainList.length)
    );
  }, [dispatch]);
  
  const mainList = useSelector((state)=>state.postList.postList)

  console.log(mainList)

  //유즈이펙트가 비동기로 실행된다 우리는 디스패치가 순서대로 작동하길 원함 근데 그게 아니고 유지이펙트가 비동기처리로되면서 이니시스테이셜 값이 
  //유즈이펙트가 실행이되면  맵을 정상적으로 돌릴 수 있음
  
  



  return (
      <>
      리스트뽑
        {
          mainList.length > 0 &&
          mainList.map((post) =>  {
              // if (post.length !== 0)
              return(
                  <div onClick={()=>{navigator(`/Detail/${post.id}`)}} key={post.id}>
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
