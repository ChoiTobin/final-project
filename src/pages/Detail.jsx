import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { __getConimal } from"../redux/modules/postSlice"

const Detail = () => {
  const navigator = useNavigate();
  const {id}  = useParams()
  const posts = useSelector((state)=>state.post.post)	
  const onClickMove = () => {
    navigator(-1);
  };
  
  return (
    <>
      <Layouts>
        <p>디테일페이지로이동했지롱</p>
      <BackBtn onClick={() => onClickMove()}>이전버튼</BackBtn>
        {
          posts.response.map((post) => (post.id === Number(id) ) && (
          <>
            <div key={post.id}>
                <p>{post.title}</p>
                <p>{post.content}</p>
                <p>{post.price}</p>
                <p>{post.category}</p>
            </div>
          </>  
          )
          )
        }
      </Layouts>
      
      </>
  )
}

export default Detail;

const Layouts = styled.div`
  width: 414px;
  max-height: 765px;
  margin: auto;
  overflow: auto;
  /* background-color: lightpink; */
`;

const BackBtn = styled.button`
  cursor: pointer;
`