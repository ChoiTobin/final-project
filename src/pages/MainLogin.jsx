import React from 'react'
import { useNavigate } from 'react-router-dom'
import KakaoLogin from '../components/features/Login/KakaoLogin';
const MainLogin = () => {
    const navigate = useNavigate()
  return (
    <>
      <div>
        <p><button onClick={()=>{navigate('/SignIn')}}>이메일로그인</button></p>
        <p><button onClick={() => { navigate('/SignUp') }}>회원가입하기</button></p>
        <KakaoLogin/>
      </div>  
        
        
    </>
  )
}

export default MainLogin ;
