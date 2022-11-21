import React, { useState } from "react";
import styled, { css } from "styled-components";
//import { ReactComponent as SendIcon } from "../../img";

// 채팅방 메시지 보내기 컴포넌트
function ChatSubmitBox({ sock, room, ws, token, memberId }) {
  const [chatBody, setChatBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const createdAt = Date.now().toString();
    console.log(createdAt);
    const content = {
      content: chatBody,
      memberId: memberId,
      createdAt: "2022-01-01",
      roomInfoId: room,
    };
    //roomId에 해당하는 채팅방으로 구독하고
    // ws.subscribe(`sub/chat/room/${room}`, {}, { token: token });
    // 해당하는 채팅방에 메시지 보내기
    ws.send(`/pub/chat/room/${room}`, JSON.stringify(content), {
      token: token,
    });
    setChatBody("");
  };

  return (
    <StboxContainer>
      <StChatForm>
        <input
          placeholder="메세지를 입력해주세요."
          onChange={(e) => {
            setChatBody(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
          value={chatBody}
        />
        <div onClick={handleSubmit} />
      </StChatForm>
    </StboxContainer>
  );
}

export default ChatSubmitBox;

const StboxContainer = styled.div`
  width: 100%;
  height: max-content;
  background-color: #9e9e9e;
`;

const StChatForm = styled.form`
  width: 100%;
  height: max-content;
  background-color: #9e9e9e;
  height: 4.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  input {
    overflow-y: hidden;
    text-align: justify;
    resize: none;
    border: none;
    font-size: 1.3rem;
    padding-left: 1rem;
    height: 3.4rem;
    width: 36rem;
    border-radius: 0.6rem;
    :focus {
      outline: none;
      text-decoration: none;
      color: black;
    }
  }
  button {
    position: absolute;
    bottom: 1.5rem;
    right: 0;
    margin-right: 1rem;
    width: 4.8rem;
    height: 2.8rem;
    background-color: #ffec42;
    border: 1px solid #e8d73f;
    border-radius: 0.5rem;
    ${({ chatLength }) => {
      switch (chatLength > 0) {
        case true:
          return css`
            color: rgba(0, 0, 0, 1);
          `;
        default:
          return css`
            color: rgba(0, 0, 0, 0.3);
          `;
      }
    }}
  }
`;

// const StSendIcon = styled(SendIcon)`
//   position: absolute;
//   width: 1.9rem;
//   height: 1.6rem;
//   right: 2rem;
//   bottom: 1.4rem;
// `;