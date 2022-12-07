import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useSelector,useDispatch  } from "react-redux";
import { __complete } from "../../redux/modules/chattingSlice";
import RatingModal from "./../../components/features/Posts/RatingModal/RatingModal";
import { ReactComponent as Accept } from '../../img/state-b.svg';
import { ReactComponent as Complete } from '../../img/state-g.svg';
import '../../styles/Modal.css'

function Modal2() {
  const dispatch = useDispatch();
  const listReducer = useSelector((state) => state.chatting.room);
  const complete = useSelector((state) => state.chatting.complete);
  
  const onClickButton = (e) => {
    dispatch(__complete(listReducer.postId))
    setModal(false)
    window.location.reload();
  
  }

  const [modal,setModal] = useState(false);
  const [modal2,setModal2] = useState(false);
      
  const toggleModal = () => {
        setModal(!modal);
    };
  const toggleModal2 = () => {
        setModal2(!modal2);
  }

  //       let mode = true

  // const ModalOpen = () =>{

  //   console.log(mode)
  //   if(listReducer.state == "진행중"){
  //       mode = true

  //   }else{
  //     mode = false
  //   }

  //   } 
  //<RatingModal></RatingModal>
    return (
      <>  

  {
      listReducer.state === "완료" ? 
      <Complete /> 
      :   
      listReducer.state === "산책중" ? 
      // <img className="clearTrade" onClick={toggleModal2} src={require(`../../img/20221121_141959.png`)}/> 
      <Complete onClick={toggleModal2} /> 
      :
      // <img className="clearTrade" onClick={toggleModal} src={require(`../../img/20221121_141505.png`)}/>
      <Accept onClick={toggleModal} />
      
  }

  {
  modal2 &&(
    <RatingModal modal2 setModal2></RatingModal>
    )
  }


  {  
  modal && (
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
      )
    }   
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