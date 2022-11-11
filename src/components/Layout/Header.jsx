import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { __userLogout } from '../../redux/modules/userSlice';



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const onLogoutHandler = () => 
  {
    dispatch(__userLogout())
    alert("이용하시려면 다시 로그인 해주세요")
    window.location.replace("/")
  }
  return (
    <>header
    <div  onClick={onLogoutHandler} src="./images/logout (1).png" >
    로그아웃
    </div>
    </>
  )
}

export default Header;

