import React, { useState } from "react";
import styled from "styled-components";
import "./Modal.css";
import { useSelector,useDispatch  } from "react-redux";
// import { trueChat,postChat } from "../../redux/modules/chattingSlice";
import { __complete } from "../../redux/modules/chattingSlice";
import RatingModal from "./../../components/features/Posts/RatingModal/RatingModal";

 function Modal2() {
  const [modal, setModal] = useState(false);
  
  const dispatch = useDispatch();

  const listReducer = useSelector((state) => state.chatting.chatList);

  const complete = useSelector((state) => state.chatting.complete);


  // const count = useSelector((state) => state.chatting.chatTrueFalse)
  const [WriteTrue,setWriteTrue ] =useState ({
    mode:false
  })

  const onClickButton = (e) => {
    e.preventDefault()
    setModal(!modal);
    setWriteTrue(WriteTrue.mode=true)
    dispatch(__complete(listReducer.postId))
    // dispatch(trueChat(WriteTrue))

    //false로 바뀐다.
    }
  const toggleModal = () => {
    setModal(!modal);


  };
  if(modal) {
    document.body.classList.add('active-modal')
    
  } else{
    document.body.classList.remove('active-modal')
  }



  let str = "진행중"
  let UserBoxMessage ="20221121_141505"
  if(complete== "진행중")
  {
     str = "진행중"
     UserBoxMessage="20221121_141505"
  }else if(complete == "완료")
  {
     str = "완료"
     UserBoxMessage= "20221121_141959"
  }

//완료버튼일때 클릭하면 내모달이아니고 현진님 모달.


  return (
    <>
      { str == "완료" ? 
        <RatingModal></RatingModal>
          :
            <>
          <Himg2 onClick={toggleModal} src={require(`../../img/${UserBoxMessage}.png`)}/>
          <Span>{str}</Span>
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