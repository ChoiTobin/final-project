import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import KakaoLogin from '../components/features/Login/KakaoLogin';
const MainLogin = () => {
    const navigate = useNavigate()
  return (
    <>
      <Layout>
        <p><button onClick={()=>{navigate('/SignIn')}}>이메일로그인</button></p>
        <p><button onClick={() => { navigate('/SignUp') }}>회원가입하기</button></p>
        <KakaoLogin/>
      </Layout>  
        
        
    </>
  )
}

export default MainLogin ;

const Layout = styled.div`
  p {
    font-family: "Pretendard", sans-serif;
  }
`;