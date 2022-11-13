import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'




const KakaoLogin = () => {
    const REST_API_KEY = process.env.REACT_APP_API_KAKAO_ID
    const REDIRECT_URI = process.env.REACT_APP_API_URL


    const location = useLocation();
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
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
            alt="카카오 로그인 버튼" />
        </a>
        <p id="token-result"></p>
    </div>
    )
}


export default KakaoLogin
