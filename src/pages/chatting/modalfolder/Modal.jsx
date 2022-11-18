import React, { useState } from "react";
import "./Modal.css";
import styled from "styled-components";
import { useSelector,useDispatch  } from "react-redux";
//import { IoMdHome, IoLogoGithub } from "react-icons/io";
import AddPage from "./AddPage";
import postChat from "../../../redux/modules/chattingSlice";


export default function Modal() {
  const [modal, setModal] = useState(false);
  const count = useSelector((state) => state.chatting.chatTrueFalse)
  console.log("유즈셀렉",count)
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
      <Himg2 onClick={toggleModal} src={require("../chattingImg/free-icon-checkmark-outline-54346.png")}/>
        :
      <Himg onClick={toggleModal} src={require("../chattingImg/free-icon-checkmark-outline-54346.png")}/>
      }
      {/* 모달창 승인버튼 green OR black */}

      {modal && ( 
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
          </div>
          <div className="modal-content">
            <AddPage/>

            {/* <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button> */}
            
          </div>
        </div>
      )}
    </>
  );
}
const Himg2 = styled.img`  
  width:26px;
  height:26px;
  margin:0;
  padding:0;
  margin-left:20px;
  background-color:green;
`
const Himg = styled.img`  
  width:26px;
  height:26px;
  margin:0;
  padding:0;
  margin-left:20px;
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