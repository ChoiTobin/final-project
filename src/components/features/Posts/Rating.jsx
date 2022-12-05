import React, { useState } from 'react';
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { __getPostRating } from "../../../redux/modules/postSlice";
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import styled from 'styled-components';

function Rating() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const chatList = useSelector((state) => state.chatting.chatList)
  // console.log("chatList:",chatList) //joinNickname 셀렉터로 가져옴

  const ARRAY = [0, 1, 2, 3, 4];
  const [rating, setRating] = useState([false, false, false, false, false]);
  console.log("rating:",rating)
  const handleStarClick = index => {
    let clickStates = [...rating];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setRating(clickStates);
  };
  
  let score = rating.filter(Boolean).length;

  let obj = {
    joinUser:chatList.joinUser,
    rating:score,
  }
  

  //-------------------------------------------------------
  //  const ARRAY = [0, 1, 2, 3, 4];
  // let desk = []
  // let forDesk =""
  // for(let i =0; i<=rating.length; i++){
    
  //   if(rating[i] == true){
  //     desk.push(rating[i])
  //   }
  //   if(desk.length == 1 ){
  //     return forDesk = "아주 잘했어요"
  //   }else if (desk.length == 2 ){
  //     return forDesk = "쥰나 잘했습니닷!"
  //   }else if (desk.length == 3 ){
  //     return forDesk = "쥰나 잘했습니닷!"
  //   }else if (desk.length == 4  ){
  //     return forDesk = "쥰나 잘했습니닷!"
  //   }else if (desk.length == 5 ){
  //     return forDesk = "쥰나 잘했습니닷!"
  //   }
  // }



  //filter(Boolean)을 통해 true값만 반환해줄 수 있음.
  //length까지 붙여서 결국 "true=별을 클릭한 갯수"을 구현한 것.
  const onClickStars = () => {
    dispatch(__getPostRating(obj));	
  };

  // const = ["좋습니다","좋습니다2","좋습니다3"]
  return (
    <Wrap>
      <RatingText>
        <p>"{chatList.joinNickname}"님에게</p>  
        <p>소중한 평점을 남겨주세요.</p>  
      </RatingText>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="25"
              onClick={() => handleStarClick(el)}
              className={rating[el] && 'yellowStar'}
            />
          );
        })}
      </Stars>
      <StarButton onClick={onClickStars}><p style={{fontWeight:600}}>Thank You</p></StarButton>
    </Wrap>
  );
}

export default Rating;

const StarButton = styled.button`
position:absolute;
  top:90px;
  left:100px;
  width:100px;
  height:40px;
  border:none;
  outline:none;
  border-radius:5px
  font-weight: 900;
  color:#ED9071;
`
const Wrap = styled.div`
  width:300px;
  height:300px;
  background-color: #ED9071;
  border-radius:10px;
`;

const RatingText = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align:center;
`;

const Stars = styled.div`
  display: flex;
  position:absolute;
  top:50px;
  left:89px;
  padding-top: 5px;

  & svg {
    color: #ddd;
    cursor: pointer;
  }
  .yellowStar {
    color: #fcc419;
  }
`;