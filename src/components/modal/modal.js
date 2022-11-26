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
              <div>
                <h2>{modalOption?.title}</h2>
                {modalOption?.element}
              </div>

              {/* <ButtonBox>
                <button onClick={() => modalOption.onSubmit()}>확인</button>
                <button onClick={() => modalOption.onClose()}>닫기</button>
              </ButtonBox> */}
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
  /* left:0;
  top:0;
  right:0;
  bottom:0;     */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 360px;
  height: 640px;
`

const Background = styled.div`
  position: fixed;
  /* left:0; */
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  width: 360px;
  height: 640px;
  background-color: rgba(0,0,0,0.3);
`
const Contents = styled.div`
  width: 270.59px;
  height: 171.71px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

const ButtonBox = styled.div`
  background-color: yellowgreen;
  /* display: flex;
  justify-content: center;
  align-items: center; */

`