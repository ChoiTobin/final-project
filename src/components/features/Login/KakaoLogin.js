import React from 'react'
import styled from "styled-components"
//import { ReactComponent as Naver } from "../../../img/naver.svg";
//import { ReactComponent as Kakao } from "../../../img/kakao.svg";
import { useNavigate } from 'react-router-dom'

const KakaoLogin = () => {
    const navigate  = useNavigate();
    const REST_API_KEY = process.env.REACT_APP_API_KAKAO_ID
    const REDIRECT_URI = process.env.REACT_APP_API_URL
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
    //kakao
    const handleNaverLogin = () => {
        let NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_CALLBACK_URL}&state=state`
        window.location.href = NAVER_AUTH_URL
      }

    //naver

    return (
        <div>
            <Naver onClick={handleNaverLogin} />
            <a id="kakao-login-btn" onClick={handleLogin}>
            <Kakao/>
            </a>
            <p id="token-result"></p>
        </div>
        )
}


export default KakaoLogin

const Img2 = styled.img`  
width:45px;
height:43px;
box-shadow: 2px 2px 6px gray;

background-color:green;
`
const Img = styled.img`
height:43px;
box-shadow: 2px 2px 6px gray;
margin-right:20px;

background-color:green;
`
