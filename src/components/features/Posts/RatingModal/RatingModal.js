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
          <button onClick={toggleModal}>별점</button>
      </>
      }
      {/* 모달창 승인버튼 green OR black */}
      
      {
      modal && ( 
        <div className="Rating">
          <div className="center">
            <div onClick={toggleModal} className="RatingOverlay"></div>
            <div className="rating-content">
              <div className="rating-important">
                <Rating/>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}


export default RatingModal

