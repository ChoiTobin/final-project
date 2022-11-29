import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getDetail } from "../redux/modules/postSlice";
import { __CreateRoom } from "../../src/redux/modules/chattingSlice";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";

// React Bootstrap Library
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

// import FullHTML from '../FullHTML.css'
const Detail = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);

  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch]);

  const onClickMove = () => {
    navigator(-1);
  };
  const onClickChatting = (post) => {
    dispatch(
      __CreateRoom({
        postId: post.id,
        postTitle: post.title,
      })
    );

    navigator(`/ChatRoomPage/${post.id}`);
  };

  return (
    <Layout>
      <Header />
      <Container style={{ margin: " 0 auto", marginTop: "20px" }}>
        <Overflow>
          <Carousel fade>
            {post.imgs !== undefined &&
              post.imgs.map((pic) => {
                if (post.imgs.length !== 0) {
                  return (
                    <Carousel.Item>
                      <Img src={pic} alt="postImg" />
                    </Carousel.Item>
                  );
                }
              })}
          </Carousel>
          <ItemBox>
            <Span style={{ fontSize: 24, fontWeight: 590 }}>
              {post.price !== undefined && (
                <>{post.price.toLocaleString("ko-KR")}원</>
              )}
            </Span>
            <Text style={{ fontWeight: 600, fontSize: 20 }}>
              <Title>
                {post.state}
                <span style={{ marginLeft: 6, fontWeight: 500 }}>
                  {post.title}{" "}
                </span>
              </Title>
            </Text>
            <Text style={{ fontSize: 14 }}>
              <div style={{ marginTop: 10 }}>
                <img
                  style={{ marginRight: 5 }}
                  src={require("../img/calender.png")}
                  alt=""
                />
                {post.date}
                <img
                  style={{ width: 11, marginRight: 5, marginLeft: 10 }}
                  src={require("../img/markup.png")}
                  alt=""
                />
                {post.local}
              </div>
              <div style={{ marginTop: 10 }}>{post.createdAt}시간</div>
            </Text>
          </ItemBox>
          <ContentBox>
            <img
              style={{ marginRight: 5 }}
              src={require("../img/text.png")}
              alt=""
            />
            {post.content}
            {/* 진돗개 두 마리를 동시에 산책하고 싶어서 도움
            청해봅니다. 금액의 경우 협의 가능합니다. 가능한 빠른 연락 부탁드리며
            노쇼 하지 않으실 분들만 찾습니다! 진돗개 두 마리를 동시에 산책하고
            싶어서 도움 청해봅니다. */}
          </ContentBox>
        </Overflow>
        <ProfileBox>
          <Userimg
            style={{ marginRight: 5 }}
            src={require("../img/user.png")}
            alt=""
          />
          <Profilename>
            <div style={{ marginLeft: 10 }}>{post.nickname}</div>
            <div style={{ marginLeft: 10 }}>⭐⭐⭐⭐⭐</div>
          </Profilename>
        </ProfileBox>
        <Button type="button" onClick={() => onClickMove()}>
          이전버튼(크멍톡)
        </Button>
        <Button onClick={() => onClickChatting(post)}>채팅하고</Button>
        {/* { 
          post.nickname == localStorage.getItem("user-nickname")  ?
          null:
          <button onClick={()=>onClickChatting(post)}>채팅하기</button>
        } */}
      </Container>
      <Footer />
    </Layout>
  );
};

export default Detail;

const Overflow = styled.div`
  overflow: auto;
  height: 411px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Container = styled.div`
  width: 95%;
  max-width: 360px;

  background-color: #f6f0ee;
`;
const ItemBox = styled.div`
  border-bottom: 1px solid #ed9071;
  border-top: 1px solid #ed9071;
  padding: 20px 10px;
`;
const ContentBox = styled.div`
  border-bottom: 1px solid #ed9071;
  padding: 20px 10px;
`;
const ProfileBox = styled.div`
  display: flex;
  border-bottom: 1px solid #ed9071;
  padding: 20px 10px;
`;
const Text = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  color: #ed9071;
`;
const Title = styled.div``;
const Button = styled.button`
  width: 100%;
  border: none;
  height: 60px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  box-sizing: border-box;
  background-color: #ed9071;
  cursor: pointer;
  margin-top: 20px;
`;
const Img = styled.img`
  object-fit: cover;
  width: 360px;
  height: 200px;
`;
const Userimg = styled.img`
  width: 50px;
`;
const Profilename = styled.div`
  display: flex;
  flex-direction: column;
`;
