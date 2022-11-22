import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import postSlice, { __getDetail } from"../redux/modules/postSlice"
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';

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

      <Container style={{
        margin:" 0 auto",
        marginTop:"20px"
      }}>
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
          {/* {post.imgs} */}
        <ItemBox>
          <Text style={{fontWeight:600 , fontSize:16 }}>
            <Title>
              <Span>{post.state}</Span>
              {post.title} 
            </Title>
            <div style={{fontSize:14}} >{post.nickname}</div>
          </Text>
          <Text style={{fontSize:14}}>
            <div>{post.date}</div>
            <div>{post.createdAt}</div>
          </Text>
          <div>
            {post.content}
          </div>
          <div>
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
  padding: 20px 10px;
`

const Text = styled.div`
  display:flex;
  justify-content:space-between;
`
const Span = styled.span `
  color:#ED9071;
`
const Title = styled.div`

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
const Img = styled.img`
  object-fit: cover;
  width:360px;
  height:200px;
`