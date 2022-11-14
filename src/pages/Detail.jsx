import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { __getConimal } from"../redux/modules/postSlice"

const Detail = () => {
  const navigator = useNavigate();
  const {id}  = useParams()
  const  mainList  = useSelector((state) => state.postList.postList)
  const onClickMove = () => {
    navigator(-1);
  };
  
  return (
      <>
      <p>디테일페이지로이동했지롱</p>
      <button onClick={() => onClickMove()}>이전버튼</button>
        {
          mainList.map((post) => (post.id === Number(id) ) && (
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
      </>
  )
}

export default Detail ;


