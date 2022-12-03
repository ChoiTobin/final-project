import React from "react"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { __naverLogin } from "../../../redux/modules/userSlice"


const OAuthNaverLogin = () => {
  const dispatch = useDispatch()
  // 인가코드
  const state = new URL(window.location.href).searchParams.get("state")
  const code = new URL(window.location.href).searchParams.get("code")
  const loginData = {
    code: code,
    state: state,
  }
  useEffect(async () => {
    await dispatch(__naverLogin(loginData))
  }, [])

  return <div />
}

export default OAuthNaverLogin