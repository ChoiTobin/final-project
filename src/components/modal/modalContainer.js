import React, { useState, ReactDOM } from "react";
import styled from "styled-components";

const ModalContainer = ({ setOpen, data, setData }) => {
  const [localData, setLocalData] = useState(data);
  const { Clicks } = localData;
  
  const close = () => {
    setOpen(false);
  }

  const submit = () => {
    setData({
      Clicks,
    });
    close();
  }

  const content = new Array(1).fill(
    <p>
      모달 안에 들어갈 내용을 입력하세요
    </p>,
  );

  return ReactDOM.createPortal(
    <>
      <ModalShadow onClick={close}>
        <Modal>
          <ModalBanner>여기를 클릭하세요</ModalBanner>
          <ModalContent>
            {content}
            <label>
              Clicks
              <Input value={Clicks} type="number" onChange={event => setLocalData({ Clicks: event.target.value })} />
            </label>
          </ModalContent>
          <ModalFooter>
            <ConfirmButton onClick={submit}>제출하기 - 확인버튼</ConfirmButton>
          </ModalFooter>
        </Modal>
      </ModalShadow>
    </>,
    document.getElementById("app-modal"),
  );
};

export const ModalExample = (props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ Clicks: 0 });
  // 여기서 "Clicks: 0"이 모달 안에 들어가게 되는 내용

  return (
    <div>
      <div>Clicks: {data.Clicks}</div>
      {/* 모달창을 열게 하는 (나타나게 하는) 버튼 */}
      <MainButton onClick={() => { setOpen(true) }}>OPEN MODAL</MainButton>
      {open && (
        <ModalContainer {...props} setOpen={setOpen} data={data} setData={setData} />
      )}
    </div>
  );
};


const Modal = styled.div`
  max-width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
`;
export const ModalContent = styled.div`
  // allows scrolling inside the content
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;
export const ModalFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;
export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: blue;
`;
const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;
const ModalBanner = styled.div`
  margin-bottom: 20px;
  background-color: blue;
  color: white;
  padding: 10px;
`;
const Input = styled.input`
  text-align: right;
  width: 200px;
  margin-left: 15px;
`;
export const MainButton = styled.button`
`;