import React from "react";
import styled from "styled-components";

const Footers = () => {
  const htmlElements = document.querySelectorAll("li");

  htmlElements.forEach((li) => {
    li.addEventListener("click", ({ target }) => {
      target.parentNode.className = "";
      target.parentNode.classList.add(target.id);
    });
  });


  return (
    <Layout>
      <Body>
        <Ul>
          <Home id="home">Home</Home>
          <Chat id="chat">Chat</Chat>
          <Post id="post">Post</Post>
          <Mypage id="mypage">Mypage</Mypage>
        </Ul>
      </Body>
    </Layout>
  );
}

export default Footers

const Layout = styled.div`
  width: 360px;
  height: 55.7px;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Pretendard", sans-serif;
`;

const Body = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  place-items: center;

  ul, li {
    height: 100%;
    width: 100%;
    text-align: center;
    display: grid;
    place-items: center;
    font-size: 14px;
    position: relative;
    z-index: 1;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  height: 50px;
  width: 360px;
  display: flex;

  background: #f2f2f2;
  list-style: none;
  border-radius: 40px;
  position: relative;
  padding: 2.5px;

  ::before {
    content: "";
    height: 45px;
    width: calc(100% / 3);
    background: #fff;
    position: absolute;
    border-radius: 40px;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    transition: transform 0.5s cubic-bezier(0.15, 0.88, 0.15, 0.97);
  }
`;

const Home = styled.li`
  ::before {
    transform: translate3d(0px, 0px, 0px);
  }
`;
const Chat = styled.li`
  ::before {
    transform: translate3d(117px, 0px, 0px);
  }
`;
const Post = styled.li`
  ::before {
    transform: translate3d(235px, 0px, 0px);
  }
`;
const Mypage = styled.li`
  ::before {
    transform: translate3d(350px, 0px, 0px);
  }
`;

