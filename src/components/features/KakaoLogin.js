import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Img from "../../img/NAVERLOGO.png";

const KakaoLogin = () => {
    const REST_API_KEY = process.env.REACT_APP_API_KAKAO_ID
    const REDIRECT_URI = process.env.REACT_APP_API_URL
    //console.log(REDIRECT_URI,REST_API_KEY,"확인")
    // const location = useLocation();
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
    return (
    <div>
        <Img onClick={()=>alert("준비중 입니다.")} src={require("../../img/NAVERLOGO.png")} alt="네이버 로그인 버튼"  />
        <a id="kakao-login-btn" onClick={handleLogin}>
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
            alt="카카오 로그인 버튼" />
        </a>
        <p id="token-result"></p>
    </div>
    )
}


export default KakaoLogin
