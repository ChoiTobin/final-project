import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __getPostTime,
} from "../../../redux/modules/postSlice";
import "../../../App.css";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { ReactComponents as PostDate } from "../../../img/post-date.svg";
import { ReactComponents as PostLocal } from "../../../img/post-local.svg";
// import "../../../styles/postlist.css";
const PostList = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.post.response)
  
  useEffect(() => {
    dispatch(
      __getPostTime()
    );
  }, [dispatch]);

  return (
    <Layouts className="postwrap">
      {posts !== undefined &&
        posts.map((post) => {
          return (
            <Content
              onClick={() => {
                navigator(`/Detail/${post.id}`);
              }}
              key={post.id}
            >
              <Body className="wrap">
                <Text>
                  <Top className="top">
                    <TopLeft className="top-left">
                      <Category>{post.category}</Category>
                      <Main className="title">
                        <State style={{width: "50px"}}>{post.state}</State>
                        &nbsp;
                        <Title>{post.title}</Title>
                      </Main>
                      <Created>{post.createdAt}</Created>
                    </TopLeft>
                  </Top>

                  <Down className="down">
                    <DownLeft className="left">
                      <When>
                        {/* <PostDate/>{post.date} */}
                        <img src={require("../../../img/date.png")} alt="" />
                        {post.date}
                      </When>
                      <Places>
                        {/* <PostLocal/>{post.local} */}
                        <img src={require("../../../img/place.png")} alt="" />
                        {post.local}
                      </Places>
                    </DownLeft>
                    <DownRight className="right">
                      <Price>{post.price.toLocaleString("ko-KR")}원</Price>
                    </DownRight>
                  </Down>
                </Text>
              </Body>
            </Content>
          );
        })}
    </Layouts>
  );
};
export default PostList;

const Layouts = styled.div`
  width: 360px;
  height: 288px;
  margin: -50px auto 0;
  background-color: #fff;
  opacity: 96%;
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
`;

const Content = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  background-color: #fff;
  width: 360px;
  height: 111px;
  border-width: 0.1px 1px;
  border-style: solid;
  border-color: #f8d1c5;
  margin: 0 auto;
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  width: 317.36px;
  height: 72.23px;
  margin: auto;
`;

const Top = styled.div`
  width: 313px;
  height: 46px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 143px;
`;

const TopLeft = styled.div`
  width: 300px;
  height: 34.78px;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 19px;
  line-height: 16.24px;
  /* border: 1px solid #D3D3D3; */
  margin-top: -10px;
`;

const Category = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 13.53px;
  margin-bottom: 5px;
  margin-top: -5px;
`;

const State = styled.div`
  color: #fd9071;
  font-weight: 600;
  font-size: 16px;
  line-height: 16.24px;
  margin-bottom: 2px;
`;

const Title = styled.div`
  /* border: 1px solid #ed9071; */
  max-width: 170px;
  height: 20px;
  font-family: "Pretendard", sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 16.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2.78px;
`;

const Created = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 10.5px;
  font-weight: 200;
  line-height: 11.27px;
  margin-bottom: 9.87px;
`;

const When = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 12.5px;
  font-weight: 400;
  line-height: 16.26px;
`;

const Places = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 12.5px;
  font-weight: 400;
  line-height: 16.68px;
`;

const Price = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 19.09px;
`;

const Down = styled.div`
  /* background-color: lightcoral; */
  width: 317.9px;
  height: 27.95px;

  font-family: "Pretendard", sans-serif;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const DownLeft = styled.div`
  /* background-color: lightyellow; */
  width: 160px;
  height: 17px;

  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 11px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: left;
  font-size: 10px;
  gap: 8px;
  margin-top: -36px;
  margin-left: 10px;
  /* border: 1px solid #ED4576; */
`;

const DownRight = styled.div`
  width: 123.9px;
  height: 27.95px;
  line-height: 19px;
  border-radius: 2px;

  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  color: #ed9071;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  margin-top: -10px;
  margin-right: 10px;
`;