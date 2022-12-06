import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styled from "styled-components";
import postSlice, { __getDetail } from"../redux/modules/postSlice"
import mypageSlice, { __getMyPage } from"../redux/modules/mypageSlice"
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import { __CreateRoom } from "../../src/redux/modules/chattingSlice"
// import FullHTML from '../FullHTML.css'
import User from "../img/user.png";
import { FaStar } from 'react-icons/fa';
import "../css/detail.css"
const Detail = () => {
  const navigator = useNavigate();
  const {id}  = useParams()
  const dispatch = useDispatch()	
  const post = useSelector((state)=>state.post.post)
  // console.log("post",post)	
  
  useEffect(() => {	
    dispatch(__getDetail(id));	
  }, [dispatch]);	
  
  const onClickMove = () => {
    navigator(-1);
    
  };
  // const ARRAY = [0, 1, 2, 3, 4];
  
  
  return (
    <Layout>
      <Header/>
        <Bg>
          <Form>
            <Carousel fade >
              {post.imgs !== undefined &&
                  post.imgs.map((pic) => {
                  if (post.imgs.length !== 0) {
                  return (
                  <Carousel.Item>
                  <Img src={pic} alt="postImg" />
                  </Carousel.Item>
                  );
                  }
                  })
                }
            </Carousel>

            <div className='item-box'>
              <h3>
                { post.price !== undefined && (
                  <>
                    {post.price.toLocaleString('ko-KR')}원
                  </>
                )}
              </h3>
              <p>{post.state}<span style={{marginLeft:8}}>{post.title}</span></p>
              <div className='date'> 
                <p><img src={require("../img/calender.png")} alt="" />{post.date}</p>
                <p><img src={require("../img/markup.png")} alt="" />{post.local}</p>
                <h6 className='createdAt'>{post.createdAt}</h6>
              </div>
            </div>

            <div className='content'>
              <img style={{marginRight:5}} src={require("../img/text.png")} alt=""  />
              {post.content}
            </div>

            <div className='profile'>
              <Userimg src={post.userImg !== undefined ? post.userImg : User} alt=""  />
              <div className='profile-name'>
                <p>{post.nickname}</p>
                <p>
                  {/* {	ARRAY.map((id,i) => { 
                        return( //레이팅이 아닐때는 색깔이없는거고 레이팅이면 노란색으로 나오게
                      <FaStar key={id} style={i < post.rating ? { color: "#fcc419"}:{}} />
                      )
                    })
                  } */}
                  <FaStar style={{color:"#fcc419",marginRight:6}} />
                  {post.rating}
                </p>
              </div>
            </div>
          </Form>
        </Bg>
        <button class="chatBtn">크멍톡</button>
      <Footer/>
    </Layout>
  )
}

export default Detail ;

const Layout = styled.div`
  width: 360px;
  margin: 0 auto;
  background-color: #f6f0ee;
`;
const Form = styled.div`
  width: 360px;
  margin: 12.59px auto 0;
  display: flex;
  flex-direction: column;
`;
const Bg = styled.div`
  max-height: 514.32px;
  overflow-x: hidden;
  overflow-y: auto;
  /* 스크롤바 영역에 대한 설정 */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤바 막대에 대한 설정 */
  ::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: #d8d8d8;
    border-radius: 20px;
  }

  /* 스크롤바 뒷 배경에 대한 설정 */
  ::-webkit-scrollbar-track {
    background-color: #f6f0ee;
  }
  // background-color: purple;
`;
const Img = styled.img`
  object-fit: cover;
  width:360px;
  height:200px;
`
const Userimg = styled.img`
  width:50px;
  height:50px;
  border-radius:30px;
`