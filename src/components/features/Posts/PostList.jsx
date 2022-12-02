import React, { useEffect } from 'react'	
import { useNavigate } from 'react-router-dom'		
import { useDispatch, useSelector } from 'react-redux'
import { __getPostTime } from"../../../redux/modules/postSlice"	
import styled from "styled-components";
import { ReactComponent as Date } from "../../../img/mainDate.svg";
import { ReactComponent as Place } from "../../../img/mainPlace.svg";
import '../../../App.css';

const PostList = () => {	
  const navigator = useNavigate();	
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.post.response)
  // console.log("유즈셀렉",posts)
  useEffect(() => {
    dispatch(
      __getPostTime()
    );
  }, [dispatch]);
  
  return (	
      <div>
        { posts !== undefined &&
          posts.map((post) =>  {	
            return (
              <div
                onClick={() => {
                  navigator(`/Detail/${post.id}`);
                }}
                key={post.id}
              >
                <div className="wrap">
                  <div>
                    <div className="top">
                      <div className="top-left">
                        <span>
                          {post.category}
                        </span>
                        <div className="title">
                          <span>
                            {post.state}
                          </span>
                          &nbsp;
                          <span>{post.title}</span>
                        </div>
                        <span>
                          {post.createdAt}
                        </span>
                      </div>
                    </div>

                    <div className="down">
                      <div className="left">
                        <span>
                          <Date /> {post.date}
                        </span>
                        <span>
                          <Place /> {post.local}
                        </span>
                      </div>
                      <div className="right">
                        <span>{post.price.toLocaleString("ko-KR")}원</span>                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
        })   
        }
      </div>
  )	
}	
export default PostList ;	
