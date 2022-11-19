import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import postSlice, { __getDetail } from"../redux/modules/postSlice"
import { Carousel } from "react-bootstrap";
import bootstrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
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
  
  return (
      <Container>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="Carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <Img src="https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F06%2Fmarvel-unveil-marvels-avengers-expansion-black-panther-war-for-wakanda-cinematic-trailer-ft.jpg?w=960&cbr=1&q=90&fit=max" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <Img src="https://img.insight.co.kr/static/2021/08/30/700/img_20210830170024_l6qk4lx8.webp" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <Img src="https://modo-phinf.pstatic.net/20170316_143/1489592872362CGSYJ_JPEG/mosakni1lM.jpeg?type=w720" class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <ItemBox>
          <Text>
            <div style={{fontWeight:600 , fontSize:16 }}>
              <Span>{post.state}</Span>
              {/* {post.title} */} 저와 산책 같이 하실 분 모십니다.
            </div>
            <div style={{fontWeight:600}}>{post.nickname}</div>
          </Text>
          <Text>
            <div>{post.date}</div>
            <div style={{fontSize:14}}>{post.createdAt}</div>
          </Text>
          
          <div>
            {/* {post.content} */}
            객체배열이 아니냐 , 서버에러 
                물론 저와 단 둘만 산책을 하는 건 아닙니다.
                진돗개 두 마리를 동시에 산책하고 싶어서 도움 청해봅니다.
                금액의 경우 협의 가능합니다.
                가능한 빠른 연락 부탁드리며
                노쇼 시 후기 폭파시키겠습니다.
                노쇼 하지 않으실 분들만 찾습니다!

                참, 진돗개 두 마리 모두 순한 편입니다!
                입마개 착용하고 산책할 예정이라
                입마개 착용하실 수 있는 분들을 선호합니다.
                많이 찔러봐주세요~
          </div>
        </ItemBox>
        <Button type='button' onClick={() => onClickMove()}>이전버튼</Button>
      </Container>
  )
}

export default Detail ;
const Container = styled.div `
  width:95%;
  max-width:360px;
`
const ItemBox = styled.div`
  border-bottom: 1px solid #ED9071;
  border-top: 1px solid #ED9071;
  margin:20px 0; 
`

const Text = styled.div`
  display:flex;
  justify-content:space-between;
`
const Span = styled.span `
  color:#ED9071;
`
const Button = styled.button`
  width:100%;
  border:none;
  height:60px;
  font-size: 16px;
  font-weight:bold;
  box-sizing: border-box;
  background-color:#ED9071;
  cursor:pointer;
`

const Div = styled.div`
  max-width:100%;
  max-height:100%;
  object-fit:contain;
  swiper {
    width: 600px;
    height: 300px;
    }
`
const Img = styled.img`
  height:300px;
  img {
    height:300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`