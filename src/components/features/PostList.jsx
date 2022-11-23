import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// yarn add react-intersection-observer
import { useInView } from "react-intersection-observer";
import { __getPostTime } from "../../redux/modules/postSlice";
import { ReactComponent as Date } from "../../img/date.svg";
import { ReactComponent as Place } from "../../img/place.svg";
import { ReactComponent as ColorArrow } from "../../img/colorarrow.svg";

const PostList = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.post);
  // console.log("포스츠",posts)

  useEffect(() => {
    dispatch(__getPostTime());
  }, [dispatch]);

  return (
    <>
      <Layouts>
        {posts.response !== undefined &&
          posts.response.map((post) => {
            // if (post.length !== 0)
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
                        <div style={{ fontSize: "10px" }}>{post.category}</div>
                        <div className="title">
                          <span style={{ fontWeight: "590", color: "#FD9071" }}>
                            {post.state}
                          </span>
                          &nbsp;
                          <span>{post.title}</span>
                        </div>
                        <span style={{ fontSize: "9px", fontWeight: "thin" }}>
                          {post.createdAt}
                        </span>
                      </TopLeft>
                    </Top>

                    <Down className="down">
                      <DownLeft className="left">
                        <span>
                          <Date /> {post.date}
                        </span>
                        <span>
                          <Place /> {post.local}
                        </span>
                      </DownLeft>
                      <DownRight className="right">{post.price}원</DownRight>
                    </Down>
                  </Text>
                </Body>
              </Content>
            );
          })}
      </Layouts>
    </>
  );
};
export default PostList;
// onClick={()=>{navigator(`/Detail/${post.postId}`)}}

const Layouts = styled.div`
  width: 360px;
  min-height: 370px;
  max-height: 375px;
  margin: auto;

  overflow-x: hidden;
  overflow-y: auto;
  /* 스크롤바 영역에 대한 설정 */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤바 막대에 대한 설정 */
  ::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: #D8D8D8;
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
  height: 100.53px;
  margin: 9px auto 10.47px;
  padding-top: 15px;
`;

const Text = styled.div`
  /* background-color: lightgray; */
  width: 317.36px;
  height: 72.23px;
  margin: auto;
`;

const Top = styled.div`
  /* background-color: lightgreen; */

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
  /* background-color: lightblue; */
  width: 300px;
  height: 44.78px;
  font-family: "SFPro", sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 16.24px;
`;

const Down = styled.div`
  /* background-color: lightcoral; */
  width: 317.9px;
  height: 27.95px;

  font-family: "SFPro", sans-serif;
  font-weight: medium;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 84px;
`;

const DownLeft = styled.div`
  /* background-color: lightyellow; */
  width: 150px;
  height: 17px;

  font-family: "SFPro", sans-serif;
  font-weight: 540;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  gap: 8px;
  margin-top: 9.87px;
`;

const DownRight = styled.div`
  background-color: #ed9071;
  width: 83.9px;
  height: 27.95px;
  line-height: 19px;
  border-radius: 2px;

  font-family: "SFPro", sans-serif;
  font-size: 16px;
  font-weight: 590;
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;