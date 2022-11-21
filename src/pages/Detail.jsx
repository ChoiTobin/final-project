import React from 'react'
import styled from 'styled-components'
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
  const posts = useSelector((state) => state.post.post)	
  console.log("@detail",posts);
  const onClickMove = () => {
    navigator(-1);
  };
  
  return (

      <Container style={{
        margin:" 0 auto",
        marginTop:"20px"
      }}>
        {/* <Carousel >
          <Carousel.Item style={{

        }}>
            <Img
              className="d-block w-100"
              // src="holder.js/800x400?text=First slide&bg=373940"
              src={require("../img/big.png")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{

        }}>
            <Img
              className="d-block w-100"
              // src="holder.js/800x400?text=First slide&bg=373940"
              src={require("../img/big.png")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{

        }}>
            <Img
              className="d-block w-100"
              // src="holder.js/800x400?text=First slide&bg=373940"
              src={require("../img/big.png")}
              alt="First slide"
            />
          </Carousel.Item>
      </Carousel> */}
        <ItemBox>
          <Text style={{fontWeight:600 , fontSize:16 }}>
            <Title>
              <Span>{post.state}</Span>
              {/* {post.title} */} 저와 산책 같이 하실 분 모십니다.
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
  object-fit: contain;
  // repeat: no-repeat;
  // position: center;
  // size: contain;
  
`