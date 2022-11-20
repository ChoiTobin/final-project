import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import styled from "styled-components";



const KakaoLogin = () => {
    const REST_API_KEY = process.env.REACT_APP_API_KAKAO_ID
    const REDIRECT_URI = process.env.REACT_APP_API_URL
    console.log(REDIRECT_URI,REST_API_KEY,"확인")


    // const location = useLocation();
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
//⭐️TOKEN 저장
    // const getKakaoToken = () => {
    //     fetch(`https:/kauth.kakao.com/oauth/token`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.access_token) {
    //                 localStorage.setItem('token', data.access_token);
    //             } else {
    //                 navigate('/');
    //             }
    //         });
    // }
    // useEffect(() => {
    //     if (!location.search) return;
    //     getKakaoToken();
    //     console.log(KAKAO_CODE);
    // }, []);
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
    <div>
        <a id="kakao-login-btn" onClick={handleLogin}>
            <Img src={require("../../img/naver.png")}  />
            <Img2 src={require("../../img/kakao.png")}alt="카카오 로그인 버튼" />
        </a>       
        <PtagColorOnly>또는</PtagColorOnly>
        {/* <p id="token-result"></p> */}
    </div>
    
    )
}
const PtagColorOnly = styled.p`
color:  #929292
`
const Img = styled.img`  
  width:45px;
  height:43px;
  box-shadow: 2px 2px 6px gray;

  background-color:green;
`
const Img2 = styled.img`  
width:45px;
height:43px;
box-shadow: 2px 2px 6px gray;
margin-left:20px;
background-color:green;
`


export default KakaoLogin

