import React from "react";
import styled, { css } from "styled-components";
//import image from "../../assets/images/KakaoTalk_logo.svg";
//import { ReactComponent as ProfileIcon } from "../../assets/icons/profile_img_sm.svg";

// 채팅 메시지 컴포넌트
const ChatCard = (frame) => {
  const author = frame.author;
  const nickname = frame.nickname;
  const createdAt = frame.createdAt;
  const body = frame.body;

  return (
    <STchatCardWrapper>
      {author === "friend" && (
        <StUserBox>
          <UserImgBox>
            <div />
          </UserImgBox>
        </StUserBox>
      )}
      {author === "me" && <span>{createdAt}</span>}
      <STcontentWrapper author={author}>
        {author === "friend" && <h3>{nickname}</h3>}
        <STchatCard author={author}>{body}</STchatCard>
      </STcontentWrapper>
      {author === "friend" && <span>{createdAt}</span>}
    </STchatCardWrapper>
  );
};

export default ChatCard;

// 만약 상대방이 보낸 메시지 이면 반대쪽에서 보여지게 css 작업

const STchatCardWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: calc(100% - 80px);
  padding: 0.7rem;
  img {
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 41%;
    margin-right: 1.8rem;
  }
  span {
    margin-right: 0.5rem;
    margin-top: 2.8rem;
    justify-content: end;
    color: ${({ theme }) => theme.darkgray};
  }
  align-items: center;
`;

// display: flex;
// flex-direction: column-reverse;

const STcontentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 0.9rem;
    font-weight: 400;
    padding-bottom: 0.5rem;
  }
  ${({ author }) => {
    switch (author === "me") {
      case true:
        return css`
          align-self: flex-end;
          background-color: ${({ theme }) => theme.mainColor};
          justify-content: flex-end;
          color: white;
          border-radius: 0.8rem 0 0.8rem 0.8rem;
          padding: 0.3rem 0.6rem;
          gap: 10px;
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.lightgray};
          justify-content: flex-start;
          color: black;
          border-radius: 0 0.8rem 0.8rem 0.8rem;
          padding: 0.3rem;
        `;
    }
  }}
`;

const STchatCard = styled.div`
  text-align: justify;
  display: inline-block;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  padding: 0.5rem;
`;

const StUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-bottom: 3rem;
  margin-right: 1rem;
  @media screen and (min-width: 1024px) {
    /* Desktop */
    display: flex;
    align-content: center;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Tablet */
    display: flex;
    align-content: center;
    justify-content: center;
  }
  @media (max-width: 767px) {
    /* Mobile */
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const UserImgBox = styled.div`
  border-radius: 70%;
  overflow: hidden;
  @media (min-width: 768px) {
    /* Tablet */ /* Desktop */
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 767px) {
    /* Mobile */
    width: 4rem;
    height: 4rem;
  }
`;

// const StProfileIcon = styled(ProfileIcon)`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   circle {
//     fill: #cbcbcb;
//   }
// `;