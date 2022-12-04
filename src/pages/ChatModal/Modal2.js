import React, { useState } from "react";
import styled from "styled-components";
import "./Modal.css";
import { useSelector,useDispatch  } from "react-redux";
// import { trueChat,postChat } from "../../redux/modules/chattingSlice";
import { __complete } from "../../redux/modules/chattingSlice";
import RatingModal from "./../../components/features/Posts/RatingModal/RatingModal";
import {  useParams } from "react-router-dom";
 function Modal2() {
  const { id } = useParams();
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~",id)

  const [modal, setModal] = useState(false);
  const [editTg, setEidtTg] = useState({
    id:0,
    isEdit:false,
  });



  const [modal2, setModal2] = useState(false);
  // console.log("리스트리듀서",listReducer)


  
  const dispatch = useDispatch();

  const listReducer = useSelector((state) => state.chatting.chatList2);

  const complete = useSelector((state) => state.chatting.complete);
  

  const onClickButton = (e) => {
    e.preventDefault()
    setModal(!modal);
    dispatch(__complete(listReducer.postId))
    
    setModal2(!modal2) 
    }


    

console.log("이게먼값~!!!!!!!!!!!!!!~!~!",listReducer.postId)

  const toggleModal = () => {
    setModal(!modal);
  };
  if(modal) {
    document.body.classList.add('active-modal')
    
  } else{
    document.body.classList.remove('active-modal')
  }



  let str = "진행중"

  // let UserBoxMessage ="20221121_141505"
  if(complete== "진행중")
  {
    str = "진행중"
    // UserBoxMessage="20221121_141505"


    // UserBoxMessage="20221121_141959"


  }else if(complete =="완료"){
    str= "완료"


  }


  return (
    <>
      { complete == "완료" ? 
         <>
         별점
        <RatingModal setModal2 modal2 ></RatingModal>
        <Himg2 onClick={toggleModal} />
      </>   
          
          :
            <>
          
          <Span>{str}</Span>
          <Himg2 onClick={toggleModal} 
          //src={require(`../../img/${UserBoxMessage}.png`)}
          />
          </>  
          
      }



      {/* 모달창 승인버튼 green OR black */}

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