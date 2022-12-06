import React, { useState } from "react";
import styled from "styled-components";
import "./Modal.css";
import { useSelector,useDispatch  } from "react-redux";
import { trueChat,postChat } from "../../../redux/modules/chattingSlice";
import { ReactComponent as Accept } from "../../../img/state-b.svg";
import { ReactComponent as Done } from "../../../img/state-g.svg";



function Modal2() {
  const [modal, setModal] = useState(false);
  
  const dispatch = useDispatch();
  const count = useSelector((state) => state.chatting.chatTrueFalse)
  const [WriteTrue,setWriteTrue ] =useState ({
    mode:false
  })

  const onClickButton = (e) => {
    e.preventDefault()
    setModal(!modal);
    setWriteTrue(WriteTrue.mode=true)
    dispatch(trueChat(WriteTrue))

    //false로 바뀐다.
    }

    

    //true값 넘겨주기 =>modal색깔 그린 
  //count가 true일때 이제 visible moddal창 
  //true일때 색깔바뀌는것만 하기 창닫는거 말고.
  const toggleModal = () => {
    setModal(!modal);


  };
  if(modal) {
    document.body.classList.add('active-modal')
    
  } else{
    document.body.classList.remove('active-modal')
  }
  return (
    <>
      <Btns>
        {
        count === true?
        <>
          <P>
            {/* <Himg2 onClick={toggleModal} src={require("../../img/20221121_141959.png")}/> */}
            <Done/>
            <Span>완료</Span>
          </P> 
        </>

          :
        <> 
          <P>
            {/* <Himg onClick={toggleModal} src={require("../../img/20221121_141505.png")}/> */}
            <Accept/>
            <Span>수락</Span>
          </P>
        </>
        }
        {/* 모달창 승인버튼 green OR black */}
      </Btns>
      

      {
      modal && ( 
        <div className="modal2">
            <div onClick={toggleModal} className="overlay2"></div>
          <div className="modal2-content2">
            <div className="modalTwo2">
              <div className="content2">
                <span  className="pink">'서폿구책'</span>님의
                <span className="pink">'저와 산서폿'</span>
                <br/>를 수락하시겠습니까?
              </div>
            </div>
            <button className="falseButton" onClick={toggleModal}>취소</button>
            <button className="trueButton" onClick={onClickButton}>수락</button>
          </div>
        </div>
      )
      }
    </>
  );
}


export default Modal2

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`

const Span = styled.span`
  font-size: 10px;
  font-weight: 600;
`;

const P = styled.span`
  display:flex;
  width:60px;
  height:60px;
  flex-direction:column;
`;