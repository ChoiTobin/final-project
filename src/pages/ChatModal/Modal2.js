import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useSelector,useDispatch  } from "react-redux";
import { __complete } from "../../redux/modules/chattingSlice";
import RatingModal from "./../../components/features/Posts/RatingModal/RatingModal";
import Accept from '../../img/state-b.png';
import Complete from '../../img/state-g.png';
import '../../styles/Modal.css'

function Modal2() {
  const dispatch = useDispatch();
  const listReducer = useSelector((state) => state.chatting.room);
  const complete = useSelector((state) => state.chatting.complete);

  const onClickButton = (e) => {

    dispatch(__complete(listReducer.postId))
    setModal(false)



    setTimeout(
      function () {
        window.location.reload();
      }
      ,200 
      );
  
  }

  const [modal,setModal] = useState(false);
  const [modal2,setModal2] = useState(false);
      
  const toggleModal = () => {
        setModal(!modal);
    };
  const toggleModal2 = () => {
        setModal2(!modal2);
  }


    return (
      <>  

  {
      listReducer.state === "완료" ? 
      <Complete /> 
      :   
      listReducer.state === "산책중" ? 
      <>
      <div className="flexZone">
          <div>
            <img src={Complete} alt="" onClick={toggleModal2} />
          </div>  
          <div>
            <div className="clearName">완료</div>
          </div>  
      </div>
      </>
      :
      <div className="flexZone">
      <div>
        <img src={Accept} alt="" onClick={toggleModal}/>
      </div>  
      <div>
        <div className="clearName">수락</div>
      </div>  
  </div>
      

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
              <span  className="pink2">{listReducer.joinUserNickname}</span>님의
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