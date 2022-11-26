import React from 'react'
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { __kakaoLogin } from "../../../redux/modules/userSlice"

//참고블로그 :https://data-jj.tistory.com/53
//로그인에 성공하면 다시 knifelemon님이 만든 페이지로 돌아가야 하는데 그 돌아갈 페이지의 주소가 redirect_uri 입니다. 

const OAuth2RedirectHandler = () => {
    const dispatch = useDispatch();
    // 인가코드
    let code = new URL(window.location.href).searchParams.get("code");

    useEffect(() => 
    {
      dispatch(__kakaoLogin(code));
    }, []);
    
    return <div />;
    }

export default OAuth2RedirectHandler
