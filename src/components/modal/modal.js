import React from "react";
import styled from "styled-components";

const Modal = ({ modalOption }) => {
  return (
    <>
      {
        modalOption?.show && (
          <Wrapper>
            <Background onClick={() => modalOption.onClose()} />
            
            <Contents>
              <Content>
                <h2>{modalOption?.title}</h2>
                {modalOption?.element}
              </Content>

              <ButtonBox>
                <button onClick={() => modalOption.onSubmit()}>확인</button>
                <button onClick={() => modalOption.onClose()}>닫기</button>
              </ButtonBox>
            </Contents>
          </Wrapper>
        )
    }
    </>
  )
}

export default Modal;


const Wrapper = styled.div`
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const Background = styled.div`
    position: absolute;
    left:0;
    top:0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
`
const Contents = styled.div`
  width: 300px;
  padding: 15px 40px;
  background-color: #fff;
`
const Content = styled.div`
  
`
const ButtonBox = styled.div`
  display :flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

`