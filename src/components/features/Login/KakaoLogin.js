import React from 'react'
import styled from "styled-components"
import { ReactComponent as Naver } from "../../../img/naverLogo.svg";
import { ReactComponent as Kakao } from "../../../img/kakaoLogo.svg";

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
        {/* <Img onClick={()=>alert("준비중 입니다.")} src={require("../../img/NAVERLOGO.png")} alt="네이버 로그인 버튼"  /> */}
        <Naver onClick={() => alert("준비중 입니다.")} style={{ width: "41px", height: "38px", marginRight: "18px" }} />
        <a id="kakao-login-btn" onClick={handleLogin}>
        {/* <Img2 src={require("../../img/kakao.png")}alt="카카오 로그인 버튼" /> */}
        <Kakao style={{ width: "41px", height: "38px" }} />
        </a>
        <p id="token-result"></p>
    </div>
    )
}


export default KakaoLogin