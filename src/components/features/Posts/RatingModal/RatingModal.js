import React, { useState } from "react";
import styled from "styled-components";
import "./Modal.css";
import { useSelector,useDispatch  } from "react-redux";
import Rating from "../Rating";



 function RatingModal() {
  const [modal, setModal] = useState(false);
  
  const dispatch = useDispatch();
  const count = useSelector((state) => state.chatting.chatTrueFalse)
  const [WriteTrue,setWriteTrue ] =useState ({
    mode:false
  })

  const onClickButton = (e) => {
    e.preventDefault()
    // dispatch(trueChat(WriteTrue))

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
      {
      count== true?
      <>
          <button onClick={toggleModal}>완료</button>
      </>
        :
       <> 
       <Himg2 onClick={toggleModal} src={require(`../../../../img/20221121_141959.png`)}/>
        <Span>완료</Span>
         </>
      }
      {/* 모달창 승인버튼 green OR black */}
      
      {
      modal && ( 
        <div className="Rating">
            <div onClick={toggleModal} className="RatingOverlay"></div>
          <div className="modal3-content3">
                <Rating/>
            {/* <button className="falseButton" onClick={toggleModal}>완료</button> */}
            {/* <button className="trueButton" onClick={onClickButton}>완료버튼</button> */}
          </div>
        </div>
      )
      }
    </>
  );
}


export default RatingModal

const Span = styled.span`
margin-left:1px;
font-size:10px;
font-weight:600;
`
const P = styled.span`
display:flex;
width:60px;
height:60px;
flex-direction:column;
margin-top:5px;
margin-left:90px;
`
const Himg2 = styled.img`  
  width:26px;
  height:26px;
  margin-right:20px;

  background-color:green;
`
const Himg = styled.img`  
  width:26px;
  height:26px;
  margin-right:20px;

  background-color:#303030
`
const Button = styled. button`
  width:0px;
  border:none;
  background:transparent;
`
const HeadRight2 = styled.button`
font-size: 0.9rem;
width: 30px;
height: 40px;
color: #00251a;
border: 0;
cursor: pointer;
font-weight: 600;
background-color: transparent;
justify-content: center;
.head-ico {
  font-size: 1.6rem;
  margin: 5px;
  color: white;
  background-color: transparent;
}
`