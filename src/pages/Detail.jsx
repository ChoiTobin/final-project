import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { __getConimal } from"../../redux/modules/postSlice"

const Detail = () => {
  // const navigator = useNavigate();
  const dispatch = useDispatch()
  const {id}  = useParams()

  const mainList  = useSelector((state) => state.conimalList.postList)
  
  useEffect(() => {
    dispatch(
      __getConimal()
    );
  }, []);
  
  return (
      <>
        {mainList.map((post) =>  {(post.id === Number(id) ) && (
            <div key={post.id} >
              <ul>
                <li>{post.postimg}</li>  
                <li>{post.title}</li>
                <li>{post.price}</li>
                <li>{post.category}</li>
                <li>{post.content}</li>
              </ul>
            </div>
        )})}
      </>
  )
}

export default Detail ;

