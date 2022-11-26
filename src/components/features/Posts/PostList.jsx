import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPostTime } from "../../../redux/modules/postSlice";
import styled from "styled-components";
import "../../../App.css";

const PostList = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.post.response);
  useEffect(() => {
    dispatch(__getPostTime());
  }, [dispatch]);

  return (
    <Listmap>
      {posts !== undefined &&
        posts.map((post) => {
          return (
            <ListBox
              onClick={() => {
                navigator(`/Detail/${post.id}`);
              }}
              key={post.id}
            >
              <Div1>
                <div>
                  <Strong>{post.category}</Strong>
                  <Text1>
                    {post.state}
                    <Span>{post.title}</Span>
                  </Text1>
                  <Text2>{post.createdAt}</Text2>
                </div>
              </Div1>
              <Div1>
                <div>
                  <Strong style={{ fontWeight: 400 }}>
                    <img
                      style={{ marginRight: 5 }}
                      src={require("../../../img/calender.png")}
                      alt=""
                    />
                    {post.date}
                  </Strong>
                  <Strong style={{ fontWeight: 400, marginLeft: 10 }}>
                    <img
                      style={{ width: 11, marginRight: 5 }}
                      src={require("../../../img/markup.png")}
                      alt=""
                    />
                    {post.local}
                  </Strong>
                </div>
                <Flex2>
                  <PriceBox>
                    <p>{post.price.toLocaleString("ko-KR")}원</p>
                  </PriceBox>
                </Flex2>
              </Div1>
            </ListBox>
          );
        })}
    </Listmap>
  );
};
export default PostList;

const ListBox = styled.div`
  position: relative;
  background-color: #fff;
  padding: 19px 14px 19px 14px;
  margin-top: 10px;
`;
const Strong = styled.strong`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 13px;
`;

const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Flex2 = styled.div`
  margin-top: 5px;
`;
const Listmap = styled.div`
  background-color: yellowgreen;
  width: 360px;
  max-height: 344.96px;
  margin: auto;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Text1 = styled.p`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  color: #ed9071;
  font-weight: 600;
  font-size: 17px;
  margin: 0;
`;
const Text2 = styled.p`
  font-size: 14px;
  margin: 0;
`;
const Span = styled.span`
  color: #000;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 500;
`;
const PriceBox = styled.div`
  position: absolute;
  left: 230px;
  top: 77px;
  width: 100px;
  height: 36px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  line-height: 36px;
  background-color: #ed9071;
  border-radius: 3px;
`;
