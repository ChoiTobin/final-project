import React from "react"
import styled from "styled-components"
import MyPage from "../../pages/MyPage"

const Modal = (props) => {
  return (
    <Background>
      <Content>
        <MyPage setModalOn={props.setModalOn} />
      </Content>
    </Background>
  )
}

export default Modal

//아래는 styled-components를 통한 스타일링

const Background = styled.div`
  height: 510px;
  width: 606px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
`

const Content = styled.div`
  height: 100%;
  width: 950px;
  margin-top: 70px;
  position: relative;
  top: 25%;
  left: 100%;
  overflow: none;
  background: #141414;
  box-shadow: 0px 4px 8px #eee;
`