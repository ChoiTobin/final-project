import React, { useState,useEffect } from "react";
import styled from "styled-components";
import "./Modal.css";
import { useSelector,useDispatch  } from "react-redux";
import { __complete } from "../../redux/modules/chattingSlice";
import RatingModal from "./../../components/features/Posts/RatingModal/RatingModal";
 function Modal2() {



  const [modal, setModal] = useState(false);
  const [buttonTrue, setButtonTrue] = useState(false);
  const [editTg, setEidtTg] = useState({
    id:0,
    isEdit:false,
  });



  const [modal2, setModal2] = useState(false);
  const dispatch = useDispatch();
  const listReducer = useSelector((state) => state.chatting.room);
  const complete = useSelector((state) => state.chatting.complete);
  const onClickButton = (e) => {
    e.preventDefault()
    setButtonTrue(!buttonTrue)
    setModal(!modal);
    dispatch(__complete(listReducer.postId))
    setModal2(!modal2) 
    }
  const toggleModal = () => {
    setModal(!modal);
  };
  if(modal) {
    document.body.classList.add('active-modal')
  } else{
    document.body.classList.remove('active-modal')
  }


  //모달을 보여주는곳에서 listReducer가 state가 완료면 안보여준다. 또는 완료로.

  // let str = listReducer.state
  // let UserBoxMessage ="20221121_141505"
  //<Himg2 onClick={toggleModal} />


  return (
    <>  
      {
        buttonTrue == true?
        <>
        <RatingModal setModal2 modal2 ></RatingModal>
      </>
      :
        <div className="flexZone" onClick={toggleModal}>
          <div>
            <img className="clearTrade" src={require(`../../img/20221121_141505.png`)}/>
          </div>
          <div className="clearName">
            수락
          </div>
        </div>
      }
      
      { modal && ( 
        <div className="modal2">
            <div onClick={toggleModal} className="overlay2"></div>
          <div className="modal2-content2">
            <div className="modalTwo2">
              <div className="content2">
                <span  className="pink2">{listReducer.joinNickname}</span>님의
                <span className="pink">'{listReducer.title}'</span>
                <br/>를 수락하시겠습니까?
              </div>
            </div>
            <button className="falseButton" onClick={toggleModal}>취소</button>
            <button className="trueButton" onClick={onClickButton}>수락</button>
          </div>
        </div>
      )}
    </>
  );
}


export default Modal2

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