import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { __getDetail } from"../redux/modules/postSlice"

const Detail = () => {
  const navigator = useNavigate();
  const {id}  = useParams()
  const dispatch = useDispatch()	

  const posts = useSelector((state)=>state.post.post)
  
  console.log("sdfsd",posts)	

  useEffect(() => {	
    dispatch(__getDetail(id));	
  }, [dispatch]);	

  const onClickMove = () => {
    navigator(-1);
  };
  
  return (
      <>
        { posts.id === Number(id)  && (
          <>
          {
            posts.map((post) => ( 
            <div key={post.id}>
                <img src={post.imgs[0]} alt="#" />
                <p><strong>{post.state}</strong>{post.title}</p>
                <p>{post.date}</p>
                <p>{post.content}</p>
                <p>{post.price}</p>
                <p>{post.createdAt}</p>
            </div>
          )
          )
          }
          </>
        ) 
          
        }
        <button onClick={() => onClickMove()}>이전버튼</button>
      </>
  )
}

export default Detail ;


