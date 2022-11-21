import React from 'react'
import styled from 'styled-components'
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
  const posts = useSelector((state) => state.post.post)	
  console.log("@detail",posts);
  const onClickMove = () => {
    navigator(-1);
  };


  const onClickChatting = (post) =>{
    // console.log("포스트에 뭐찍히지",post)

    dispatch(__CreateRoom({
      postId:post.id,
      postTitle:post.title,
    }));
    navigator(`/ChatRoomPage/${post.id}`);
    

  }
  
  return (
    <>
      <Layouts>
        <p>디테일페이지로이동했지롱</p>
      <BackBtn onClick={() => onClickMove()}>이전버튼</BackBtn>
        {
          posts.response.map((post) => (post.id === Number(id) ) && (
            <div key={post.id}>
                {/* <img src={post.imgs[0]} alt="#" /> */}
                <p><strong>{post.state}</strong>{post.title}</p>
                <p>{post.date}</p>
                <p>{post.content}</p>
                <p>{post.price}</p>
                <p>{post.createdAt}</p>
                <button onClick={()=>onClickChatting(post)}>채팅하고</button>
            </div>
          )
          )
        }
      </Layouts>
      
      </>
  )
}

export default Detail;

const Layouts = styled.div`
  width: 360px;
  max-height: 640px;
  margin: auto;
  overflow: auto;
  /* background-color: lightpink; */
`;

const BackBtn = styled.button`
  cursor: pointer;
`