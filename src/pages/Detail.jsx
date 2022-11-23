import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { __getConimal } from"../redux/modules/postSlice"
import { __CreateRoom } from "../../src/redux/modules/chattingSlice"

const Detail = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const {id}  = useParams()
  const posts = useSelector((state)=>state.post.post)	
  const onClickMove = () => {
    navigator(-1);
  };


  const onClickChatting = (post) =>{
    dispatch(__CreateRoom({
      postId:post.id,
      postTitle:post.title,
    }));
    navigator(`/ChatRoomPage/${post.id}`);
  }

  
  return (
      <>
      <p>디테일페이지로이동했지롱</p>
        {
          posts.response.map((post) => (post.id === Number(id) ) && (
            <div key={post.id}>
                <p><strong>{post.state}</strong>{post.title}</p>
                <p>{post.date}</p>
                <p>{post.content}</p>
                <p>{post.price}</p>
                <p>{post.createdAt}</p>
                <button onClick={()=>onClickChatting(post)}>채팅하고</button>
                {/* { 
                  post.nickname == localStorage.getItem("user-nickname")  ?
                  null:
                <button onClick={()=>onClickChatting(post)}>채팅하고</button>
              } */}
                </div>
          )
          )
        }
        <button onClick={() => onClickMove()}>이전버튼</button>
      </>
  )
}

export default Detail ;