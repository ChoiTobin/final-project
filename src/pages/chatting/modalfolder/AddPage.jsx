import React, { useState , useRef} from "react";
import styled from 'styled-components'
import { useSelector,useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { trueChat,clearChat } from "../../../redux/modules/chattingSlice";

const Addpage = () => {


  
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [instasContent, setInstasContent] =useState ({
    content:"",
    id:0,
  })
  const [WriteTrue,setWriteTrue ] =useState ({
    mode:false
  })
  //수락버튼시 승락버튼색상 바꾸기.기능
  const[visible,setVisible]= useState(false)
//수락버튼 누르면 바뀌는거 true false값 전해주고 전해주면 색상바뀜 useSelector이용해야할듯
//그리고 수락버튼 누르면 modal에 색상변경도 해주기 dispatch로 백에게도 주고 

  const onClickButton = (e) => {
    e.preventDefault()
    setWriteTrue(WriteTrue.mode=true)
    dispatch(trueChat(WriteTrue))

    //false로 바뀐다.
    }
    //true값 넘겨주기 =>modal색깔 그린 


    const onClickFalse = (e) => {
        e.preventDefault()
        setWriteTrue(WriteTrue.mode=false)
        dispatch(trueChat(WriteTrue))

    }
    //useSelector이용해서 하기
  return (
      <Container1>
              <Span2>nickname님의 글제목를 수락하시겠습니까?</Span2>
        <FlexContainer>
            <div>
              <Span1 onClick={onClickFalse}>취소</Span1>
              <button onClick={onClickButton}>수락</button>
            </div>
        </FlexContainer>
      </Container1>
  );
}

export default Addpage

const Container1 = styled.div`
width:700px;
border:1px solid #ddd;
border-radius:5px;
border-radius:10px;
`
const Flexminibox = styled.div`
display:flex;
margin-top:10px;
margin-left:10px;
margin-bottom:10px;
`
const Logo = styled.img`
width:25px;
height:25px;
`
const Span1 = styled.span`
  width:300px;
  font-size:14px;
  font-weight:600;
  color:#454545;
`
const Span2 = styled.span`
  width:300px;
  font-weight:600;
`
const Text = styled.div`
margin-top:2px;
text-indent:7px;
font-weight:800
`
const Textarea = styled.textarea`
width:390px;
height:270px;
border:none;
`
const FlexContainer = styled.div`
display:flex;
`
const Header =styled.div`
width:700px;
height:50px;
border-bottom:1px solid #ddd;
line-height:50px;
display:flex;
justify-content:space-around;
`
const Img = styled.img`
  width:300px;
  height:300px;
  border:1px solid #ddd;
`