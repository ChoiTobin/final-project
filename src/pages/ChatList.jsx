import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { __getinitialChatList, __getRoomList } from "../redux/modules/chattingSlice";
import { ReactComponent as UserPic } from "../img/user-chat.svg";
import { ReactComponent as PostImg } from "../img/post-pic.svg";


const ChatList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const Room = useSelector((state) => state.chatting.roomList);

  useEffect(() => {
    dispatch(__getRoomList());
  }, []);

  const onClickChatting = (item) => {
    navigator(`/ChatRoomPage/${item.postId}`);

    dispatch(
      __getinitialChatList({
        postId: item.postId,
        roomId: item.roomId,
      })
    );
  };
  //들어갈때 get요청

  return (
    <Layout>
      {Room !== undefined &&
        Room !== [] &&
        Room.map((item, i) => {
          return (
            <List key={i} onClick={() => onClickChatting(item)}>
              <Content>
                <UserPic style={{ marginRight: '18px' }} />
                <Info>
                  <Title>{item.title}</Title>
                  <Text>{item.title}</Text>
                </Info>
              </Content>
              <Pic>
                <PostImg/>
              </Pic>
            </List>
          );
        })}
    </Layout>
  );
};

export default ChatList;

const Layout = styled.div`
  width: 360px;
  max-height: 526.06px;
  background-color: #f6f0ee;
  border-top: 1px solid #ee8b6a;
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
    background-color: #d8d8d8;
    border-radius: 20px;
  }

  /* 스크롤바 뒷 배경에 대한 설정 */
  ::-webkit-scrollbar-track {
    background-color: #f6f0ee;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const List = styled.div`
  width: 360px;
  height: 61.76px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0px 13px 24px;
`;

const Title = styled.span`
  font-family: "Pretentard", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 20.83px;
  width: 186px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Text = styled.span`
  font-family: 'Pretentard', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 20.83px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
`;

const Pic = styled.span`
  margin-right: 21px;
`