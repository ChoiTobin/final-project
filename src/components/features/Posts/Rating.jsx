import React, { useState } from 'react';
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { __getPostRating } from "../../../redux/modules/postSlice";
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import '../../../css/rating.css'
import { __complete } from "../../../redux/modules/chattingSlice";

function Rating() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listReducer = useSelector((state) => state.chatting.room);

  // console.log("chatList:",chatList) //joinNickname 셀렉터로 가져옴

  const ARRAY = [0, 1, 2, 3, 4];
  const [rating, setRating] = useState([true, false, false, false, false]);
  const [ratingIndex, setRatingIndex] = useState(1);
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
    joinUser:listReducer.joinUser,
    rating:score,
  }

  //filter(Boolean)을 통해 true값만 반환해줄 수 있음.
  //length까지 붙여서 결국 "true=별을 클릭한 갯수"을 구현한 것.
  const onClickStars = () => {
    dispatch(__getPostRating(obj));	
    dispatch(__complete(listReducer.postId))
    window.location.replace("/home")
  };

  return (
    <div className='Rating-wrap'>
        <p>"{listReducer.joinNickname}"님에게</p>  
        <p>소중한 평점을 남겨주세요.</p>  
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
          <span>
            {
              score === 5
              ? '최고에요! 추천해요!'
              : score === 4
              ? '좋았어요! 다음에 또 만나요'
              : score === 3
              ? '괜찮았어요'
              : score === 2
              ? '나쁘지 않았어요'
              : score === 1
              ? '아쉬웠어요'
              : null
            }
          </span>
        <button className='stBtn' onClick={onClickStars}>감사합니다.</button>
    </div>
  );
}

export default Rating;
const Stars = styled.div`
  display:flex;
  margin:20px 0;
  margin-left:87px;
  & svg {
    color: #ddd;
    cursor: pointer;
  }
  .yellowStar {
    color: #ED9071;
  }
`;