import { useState, useEffect } from 'react'
import { setCookie } from "../../shared/"

const NaverLogin = () => {

    const [user, setUser] = useState(null);
    const { naver } = window
    // 발급 받은 Client ID 입력 
    const NAVER_CLIENT_ID = "04dD9ScC_9BqGTNBc18u";
    // 작성했던 Callback URL 입력
    const NAVER_CALLBACK_URL = "http://localhost:3000";

    const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
        clientId: NAVER_CLIENT_ID,
        callbackUrl: NAVER_CALLBACK_URL,
        // 팝업창으로 로그인을 진행할 것인지?           
        isPopup: false,
        // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
        loginButton: { color: 'green', type: 3, height: 58 },
        callbackHandle: true,
        })
        naverLogin.init()
        naverLogin.logout();
        // 선언된 naverLogin 을 이용하여 유저 (사용자) 정보를 불러오는데  
        // 함수 내부에서 naverLogin을 선언하였기에 지역변수처리가 되어  
        // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행주어야한다.

        // 아래와 같이 로그인한 유저 ( 사용자 ) 정보를 직접 접근하여 추출가능하다.
        // 이때, 데이터는 첫 연동시 정보 동의한 데이터만 추출 가능하다.

        // 백엔드 개발자가 정보를 전달해준다면 아래 요기! 라고 작성된 부분까지는 
        // 코드 생략이 가능하다.  
    naverLogin.getLoginStatus(async function (status) {
        if (status) {
        // 아래처럼 선택하여 추출이 가능하고, 
        const userid = naverLogin.user.getEmail()
        const username = naverLogin.user.getName()
        // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다. 
        // setUserInfo(naverLogin.user)
        }
        })
        // 요기!
        }
    // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 토큰이 붙어서 전달된다.
    // 우선 아래와 같이 토큰을 추출 할 수 있다.
    const userAccessToken = () => {
        window.location.href.includes('access_token') && getToken()
        }
    const getToken = () => {
        const token = window.location.href.split('=')[1].split('&')[0]

        // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!   
        // localStorage.setItem('access_token', token)
        // setGetToken(token)

        //  이후 로컬 스토리지 또는 state에 저장하여 사용하자!   
        setCookie('access_token', token)

        }
    // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
    useEffect(() => {
        initializeNaverLogin()
        userAccessToken()
        }, [])
    const naverLogout = () => {
        localStorage.removeItem("com.naver.nid.access_token");
        };
    return (
        <>
        {/* 구현할 위치에 아래와 같이 코드를 입력해주어야 한다. */}
        {/* 태그에 id="naverIdLogin" 를 해주지 않으면 오류가 발생한다! */}
    <div id="naverIdLogin"></div>
        {/* <button onClick={naverLogout}>Logout</button> */}
        </>
    )
}

export default NaverLogin;