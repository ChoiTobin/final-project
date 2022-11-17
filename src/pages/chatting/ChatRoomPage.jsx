import styled, { css } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ChatSubmitBox from "./ChatSubmitBox";
import ChatCard from "./ChatCard";
import { __getinitialChatList } from "../../redux/modules/chattingSlice";
import { postChat, clearChat } from "../../redux/modules/chattingSlice";
import GlobalHeaderChat from "./element/GlobalHeaderChat";
import { v4 as uuidv4 } from "uuid";
import { set } from "react-hook-form";
//import moment from "moment";
import { getCookie ,setCookie, delCookie } from "../../shared/Cookie";

function ChatRoomPage() {
  // 소켓 연결
  const sock = new SockJS("https://3.35.47.137/wss");
  let subscription;
  const ws = webstomp.over(sock);

  // access-token
  const token = getCookie("Access_Token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // stompClient
  const stompClient = useRef(null);
  //
  const prevDate = useRef(0);
  // 채팅 내역 리스트
  const listRef = useRef();
  const chatList = useSelector((state) => state.chatting.chatList);

  // 방
  const [room, setRoom] = useState();

  const member = localStorage.getItem("user-nickname");
  const obj = member
  //JSON.parse{member);
  const loginMemberId = obj;
  const itemId = localStorage.getItem("user-userId");

  // useEffect(() => {
  //   setChatList2(chatList)
  // },[setChatList2, chatList])

  // 컴포넌트 마운트시에 소켓 연결 , 채팅방 생성
  useEffect(() => {
    dispatch(__getinitialChatList(itemId));
    waitForConnection(ws, wsConnectSubscribe());
    makeRoom();
    return () => {
      wsDisConnectUnsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   listRef.current.scrollTop = listRef.current.scrollHeight;
  // }, [chatList]);

  // 웹소켓 연결, 구독
  function wsConnectSubscribe() {
    try {
      ws.connect(
        {
          token: token,
        },
        () => {
          // 채팅방 만들기(memberId) -> 방 만드는 사람의 아이디(로그인한 사람의 아이디)
          // send랑 똑같은 멤버 아이디
          let num = 0;
          const chatroom = ws.subscribe(
            `/sub/room/founder/${loginMemberId}`,
            function (frame) {
              console.log(frame);
              const data = JSON.parse(frame.body);
              const roomId = data.roomInfoId;
              num = roomId;
              setRoom(num);
              console.log(num);
              console.log("채팅방 생성");
            }
          );

          setTimeout(() => {
            chatroom.unsubscribe();
            subscription = ws.subscribe(
              `/sub/chat/room/${num}`,
              function (frame) {
                dispatch(postChat(JSON.parse(frame.body)));
                console.log(frame);
              },
              {
                token: token,
              },
              function (payload) {
                console.log(payload);
                ws.disconnect();
              }
            );
            return () => {
              dispatch(clearChat());
              prevDate.current = null;
              const headers = { memberId: loginMemberId, room: room };
              subscription.unsubscribe(headers);
              ws.current.disconnect();
            };
          }, 500);
        },
        [dispatch]
      );
    } catch (error) {
      console.log(error);
    }
  }

  // 연결해제, 구독해제
  function wsDisConnectUnsubscribe() {
    try {
      ws.disconnect(
        () => {
          ws.unsubscribe("sub-0");
        },
        { token: token }
      );
    } catch (error) {
      console.log(error);
    }
  }

  // 웹소켓이 연결될 때 까지 실행하는 함수
  function waitForConnection(ws, callback = () => {}) {
    setTimeout(
      function () {
        // 연결되었을 때 콜백함수 실행
        if (ws.ws.readyState === 1) {
          callback();
          // 연결이 안 되었으면 재호출
        } else {
          waitForConnection(ws, callback);
        }
      },
      1 // 밀리초 간격으로 실행
    );
  }

  // 방 생성하기
  function makeRoom() {
    try {
      // token이 없으면 로그인 페이지로 이동
      if (!token) {
        alert("토큰이 없습니다. 다시 로그인 해주세요.");
        navigate("/login");
      }
      // 데이터 보내기
      waitForConnection(ws, function () {
        // 초대하는 사람의 멤버 아이디
        // 방을 만드는 사람(로그인한 사람) , 두번째가 초대되는 사람(글 쓴 사람) , 초대되는사람 닉네임
        // itemId 추가
        ws.send(
          `/pub/room/founder/${loginMemberId}`,
          JSON.stringify({
            memberId: localStorage.getItem("itemMemberId"),
            nickname: localStorage.getItem("itemNickname"),
            itemId: localStorage.getItem("itemId"),
            title: localStorage.getItem("title"),
          }),
          {
            token: token,
          }
        );
        // 채팅만든 사람의 memberId 방에 들어가있는 리스트
        // ws.send(`/pub/room/15`, {}, { token: token });
        // console.log(ws.ws.readyState);
      });
    } catch (error) {
      console.log(error);
      console.log(ws.ws.readyState);
    }
  }
  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [chatList]);

  return (
    <>
      <GlobalHeaderChat />
      <StChatRoomPage>
        <StChatListContainer ref={listRef}>
          {chatList.map((chat) => {
            const convertToDate = new Date(chat.createdAt);
            console.log(convertToDate);
            //moment.locale("ko");
            if (
              prevDate.current < convertToDate.getDate() ||
              prevDate.current == null
            ) {
              prevDate.current = convertToDate.getDate();
              return (
                <>
                  {/* <p key={chat.chatId}>{moment(convertToDate).format("LL")}</p> */}
                  <ChatCardWrapper
                    key={chat.chatId}
                    author={
                      chat.memberId === parseInt(loginMemberId)
                        ? "me"
                        : "friend"
                    }
                  >
                    <ChatCard
                      author={
                        chat.memberId === parseInt(loginMemberId)
                          ? "me"
                          : "friend"
                      }
                      body={chat.content}
                      createdAt={
                        //moment
                        (convertToDate).format("LT")}
                      nickname={chat.nickname}
                    />
                  </ChatCardWrapper>
                </>
              );
            } else {
              prevDate.current = convertToDate.getDate();
              return (
                <ChatCardWrapper
                  key={chat.chatId}
                  author={
                    chat.memberId === parseInt(loginMemberId) ? "me" : "friend"
                  }
                >
                  <ChatCard
                    author={
                      chat.memberId === parseInt(loginMemberId)
                        ? "me"
                        : "friend"
                    }
                    body={chat.content}
                    createdAt={
                      //moment
                      (convertToDate).format("LT")}
                    nickname={chat.nickname}
                  />
                </ChatCardWrapper>
              );
            }
          })}
        </StChatListContainer>
        <ChatSubmitBox
          sock={sock}
          ws={ws}
          room={room}
          token={token}
          memberId={loginMemberId}
        />
      </StChatRoomPage>
    </>
  );
}

const StChatRoomPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

// display: flex;
// flex-direction: column-reverse;
const StChatListContainer = styled.div`
  width: 100vw;
  padding: 6rem 1rem;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column-reverse;
  p {
    align-self: center;
    margin-top: 20px;
    width: 60%;
    background-color: #ffffff88;
    border-radius: 15px;
    font-size: 0.9rem;
    padding: 2px 0;
    letter-spacing: 0.2rem;
    display: flex;
  }
`;
const ChatCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${({ author }) => {
    switch (author === "me") {
      case true:
        return css`
          justify-content: flex-end;
        `;
      default:
        return css`
          justify-content: flex-start;
        `;
    }
  }}
`;
export default ChatRoomPage;