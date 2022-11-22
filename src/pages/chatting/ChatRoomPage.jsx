import styled, { css } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { __CreateRoom } from "../../redux/modules/chattingSlice";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import Modal from "./Chattmodalfolder/Modal";
import { __getinitialChatList } from "../../redux/modules/chattingSlice";
import {ListReducer} from "../../redux/modules/chattingSlice"
import '../../App.css';
import {v4 as uuidv4} from 'uuid';

function ChatRoomPage() {
  const {id}  = useParams()
  const navigate = useNavigate();

  const sock = new SockJS("https://wepungsan.kro.kr/ws/chat");
  const ws = webstomp.over(sock);
  const dispatch = useDispatch();
  const chatList = useSelector((state) => state.chatting.chatList);
  const listReducer = useSelector((state) => state.chatting.listReducer);
  console.log("리스트뿌렷",listReducer)
  let postId = Number(id)

  useEffect(() => {
    wsConnectSubscribe()
    
    dispatch(__getinitialChatList(postId));

  }, []);

  const [chatBody, setChatBody] = useState("");
  const content = {
    sender:localStorage.getItem('user-nickname'),
    message:chatBody

    };
  let headers = { 
    Access_Token: localStorage.getItem('Access_Token')
  };


 
  function wsConnectSubscribe() {
    try {
      ws.connect(
        headers,(frame) => {
          ws.subscribe(
            `/sub/${postId}`,
             (response) => {
              let data = JSON.parse(response.body)
              console.log("데이타",data)
              dispatch(ListReducer(data))
            }
            );
        },

      );
    } catch (error) {
    }
  }
const inputHandler = (e) =>{
  setChatBody(e.target.value)
 
}

const onSubmitHandler = (event) =>{
  //event.preventDefault()
  if (chatBody.trim() === "") {
    return alert("내용을 입력해주세요.");
    }
  ws.send(
    `/pub/${postId}`,
    JSON.stringify(content),
            {
              Access_Token: localStorage.getItem("Access_Token")
            },
      setChatBody("")     
        )

}
const appKeyPress = (e) => {
  if (chatBody.trim() === "") {
    return alert("내용을 입력해주세요.");
    }
  if (e.key === 'Enter') {
    onSubmitHandler()
    setChatBody("")
    
  }
}








return (
        <LoginContainer>
                <Header>
                     <div>
                      <Img onClick={()=>navigate(-1)} src={require("../chatting/chattingImg/png-clipart-computer-icons-arrow-previous-button-angle-triangle.png")}/>
                      </div>
                     
                     <div>
                      <Nickname>닉네임</Nickname>
                      <Time>30분 전 접속</Time>
                     </div>
                     <Modal/>
                </Header>
                <Section>
                    <Profile><Img2 src={require("../chatting/chattingImg/KakaoTalk_20221121_174337130_01.png")}/></Profile>
                    <TextBox>
                      <P>
                        <OrangeSpan>모집 중</OrangeSpan>
                        <Span></Span>
                        <Title>제목이들어갑제목이들어갑제목이들어갑제목이들어갑제목이들어갑제목이들어갑니다.</Title>
                      </P>
                      <Money>12,000원</Money>
                    </TextBox>
                </Section>
                  <DivAt>날짜</DivAt> 
                  <OverFlow >
                      { chatList !== undefined &&
                        chatList.map((item,i)=>{
                          return(
                          
                          localStorage.getItem('user-nickname') == item.sender ?  
                          <TextBox key={i}><Colorspan ><span>{item.message}</span></Colorspan></TextBox>
                        :
                        <TextBox key={uuidv4()}><Colorspan2 ><span>{item.message}</span></Colorspan2></TextBox>
                        
                          )
                        })
                      }
                      { listReducer !== undefined &&
                        listReducer.map((item,i)=>{
                          return (
                            localStorage.getItem('user-nickname') == item.sender ?  
                          <TextBox key={i}><Colorspan><span>{item.message}</span></Colorspan></TextBox>
                          :
                          <TextBox key={uuidv4()}><Colorspan2 ><span>{item.message}</span></Colorspan2></TextBox>
                          )
                        }
                          )
                      } 
                  </OverFlow >
                <Chatput>

                    <Input value={chatBody}  onKeyPress={appKeyPress}  onChange={inputHandler}></Input>
                    <ArrowImg  onSubmit={appKeyPress} onClick={onSubmitHandler} src={require("../chatting/chattingImg/iconSand.png")}></ArrowImg>
                </Chatput>   
        </LoginContainer>
  );
}
const ArrowImg =styled.img`
position:absolute;
top:10px;
right:6px;
border:none;
width:13px;
height:15px;
background-color:white;
`
const Chatput = styled.div`
  border-radius:20%;
  position:relative;
  `
const Input =styled.input`
width:100%;
height:30px;

text-indent:8px;
border:2px solid #ED9071;;
border-radius:30px;

`
const Colorspan2 = styled.span`
background:gray;
color:black;
padding:7px;
box-sizing: border-box;
border-radius: 15px;
border:1px solid white;
font-size:13px;
break-all;
float: left; 
word-break: break-all;
`


const TextBox = styled.div`
height:30px;
padding:4px;

`

const Colorspan = styled.span`
background:#ED9071;
float: right;
color:black;
padding:7px;
box-sizing: border-box;
border-radius: 15px;
font-size:13px;

word-break:break-all;
`

const OverFlow = styled.div`
overflow:auto;
height:480px;
`
const DivAt = styled.div`
margin-top:10px;
text-align:center;
color:#787878;
font-size:12px;
`
const Money = styled.p`
font-weight:bold;
`
const Title = styled.span`
width: 200px;
overflow:hidden; 
text-overflow:ellipsis;
white-space:nowrap; 
display:inline-block;
font-weight:bold;
font-size:12px;
`
const Span= styled.span`
width:30px;
margin-left:10px;
`
const OrangeSpan = styled.span`
color:#ED9071;
font-weight:bold;
`
const Img = styled.img`
margin-top:6px;
height:25px;
width:25px;
margin-left:10px;
`
const Img2 = styled.img`
height:33px;
width:30px;
`

const Time = styled.span`
font-size:6px;
`
const Nickname = styled.p`
margin-left:5px;
font-weight:bold;
font-size:15px;
`

const LoginContainer = styled.div`
  width:340px;
  margin: 0 auto;
  height:100%;
  background-color:#FAF7F0;
`;

const Header = styled.div`
  border-bottom:1px solid #ED9071;
  background-color:#65647C
  width:360px;
  height:50px;
  display:flex;
  justify-content: space-between;
`

const Section = styled.div`
  width:360px;
  height:60px;
  display:flex;
  margin-top:10px;
  padding-left: 10px;
  border-top:1px solid #ddd;
  border-bottom:1px solid #ED9071;
`
const P = styled.p`
`


const Profile = styled.div`
  margin-top:5px;
  margin-right:5px;
  width:50px;
  height:50px;
  border-radius:10px;
  text-align:center;
  line-height:50px;
`
const Chating = styled.div`
  height:400px;
  over-flow:hidden;
  background-color:#FFECEF;
  text-align:center;
  line-height:400px;
  
`

export default ChatRoomPage;