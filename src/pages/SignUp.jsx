import React, { useState } from "react";
import styled from "styled-components";
import "../styles/SignUp.css";
import { useNavigate } from "react-router-dom";
import {
  __userSignUp,
  __userCheck,
  __NickCheck,
} from "../../src/redux/modules/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../img/logoImg.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const initialState = {
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  };

  const [join, setJoin] = useState(initialState);
  const [IdValid, setIdValid] = useState(false);
  const [nickValid, setNickValid] = useState(false);
  const [PwValid, setPwValid] = useState(false);
  const [PwCValid, setPwCValid] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setJoin({ ...join, [name]: value });
    //red 시작
    const regexId =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    //이메일 체크
    //https://velog.io/@gym/React-721
    if (regexId.test(join.email)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }

    const regexNick = /^[가-힣ㄱ-ㅎa-zA-Z0-9._-]{1,19}$/;
    if (regexNick.test(join.nickname)) {
      setNickValid(true);
    } else {
      setNickValid(false);
    }

    const regexPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
    if (regexPw.test(join.password)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }

    const regexPwC = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
    if (regexPwC.test(join.passwordCheck)) {
      setPwCValid(true);
    } else {
      setPwCValid(false);
    }
  };

  const obj = {
    email: join.email,
    nickname: join.nickname,
    password: join.password,
    passwordCheck: join.passwordCheck,
  };

  const userIdCheck =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  //이메일 체크
  //https://velog.io/@gym/React-721
  const usernicknameCheck = /^[가-힣ㄱ-ㅎa-zA-Z0-9._]{1,19}$/;
  //글자수만제한 2~20
  const passwordCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
  //if (!regPass.test(password)) alert("영문, 숫자, 특수기호 조합으로 8-20자리 이상 입력해주세요.")

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!userIdCheck.test(obj.email)) {
      return alert("아이디 양식에 맞춰주세요");
    }

    if (!usernicknameCheck.test(obj.nickname)) {
      return alert("닉네임 양식에 맞춰주세요");
    }
    if (!passwordCheck.test(obj.passwordCheck)) {
      return alert("비밀번호 양식에 맞춰주세요");
    }

    if (obj.email === "" || obj.email === undefined) {
      return alert("빈칸을 입력해주세요.");
    }
    if (obj.nickname === "" || obj.nickname === undefined) {
      return alert("빈칸을 입력해주세요.");
    }
    if (obj.password === "" || obj.password === undefined) {
      return alert("빈칸을 입력해주세요.");
    }
    if (obj.passwordCheck === "" || obj.passwordCheck === undefined) {
      return alert("빈칸을 입력해주세요.");
    }
    if (account.nickCheck.status !== 200) {
      alert("닉네임 중복확인을 해주세요");
    }
    if (account.idCheck.status !== 200) {
      alert("아이디 중복확인을 해주세요");
    }
    // 중복확인이 true이고 true일때 그리고 dispatch를 보내서
    // account statusCode 회원가입이 response로 왔을때 가입됨.

    dispatch(__userSignUp(obj));
    if (
      account.idCheck.status === 200 &&
      account.nickCheck.status === 200 &&
      obj.password === obj.passwordCheck
    ) {
      alert("회원가입이 완료되었습니다.");
      window.location.replace("/");
    }
  };



  return (
    <div className="SignupContainer">
      <form className="SignupBox" onSubmit={onSubmitHandler}>
        <div className="LogoBox">
          <span className="LoGoSignUp">
            {/* <img src={require("../img/LogoImg.png")} width="90px" height="70px"/> */}
            <Logo />
          </span>
          <span className="LoGoSignUp">
            SIGN UP
          </span>
        </div>
        <div className="InputBox">
          <span className="FlexInput">
            <input className="Input"
              name="email"
              placeholder="아이디"
              onChange={onChangeHandler}
            />
            <button className="DuplicateCheckEmail"
              type="button"
              onClick={() => {
                dispatch(__userCheck({ email: join.email }));
              }}
            >
              중복확인
            </button>
            <div className="ErrorMessageWrap">
              {!IdValid
                ? !IdValid &&
                  join.email.length > 0 && <div>이메일 형식을 입력해주세요</div>
                : IdValid &&
                  join.email.length > 0 && (
                    <div className="Green">올바른 이메일 형식 입니다.</div>
                  )}
            </div>
          </span>
          <span className="FlexInput2">
            <input className="Input2"
              name="nickname"
              placeholder="닉네임"
              onChange={onChangeHandler}
            ></input>
            <button className="DuplicateCheckNick"
              type="button"
              onClick={() => {
                dispatch(__NickCheck({ nickname: join.nickname }));
              }}
            >
              중복확인
            </button>
            <div className="ErrorMessageWrap">
              {!nickValid
                ? !nickValid &&
                  join.nickname.length > 0 && (
                    <div>닉네임 영문,한글,숫자,기호 특수문자(_) 2자~20자</div>
                  )
                : nickValid &&
                  join.nickname.length > 0 && (
                    <div className="Green">올바른 닉네임 형식 입니다.</div>
                  )}
            </div>
          </span>
          <span >
            <input className="Input3"
              placeholder="비밀번호"
              type="password"
              name="password"
              onChange={onChangeHandler}
            />
            <div className="ErrorMessageWrap">
              {!PwValid
                ? !PwValid &&
                  join.password.length > 0 && (
                    <div>비밀번호 영문 숫자 특수기호 포함 8자~20자</div>
                  )
                : PwValid &&
                  join.password.length > 0 && (
                    <div className="Green">사용 가능한 비밀번호 입니다.</div>
                  )}
            </div>
          </span>
          <span>
            <input className="Input4"
              placeholder="비밀번호 확인"
              type="password"
              name="passwordCheck"
              onChange={onChangeHandler}
            />
            <div className="ErrorMessageWrap">
              {!PwCValid
                ? !PwCValid &&
                  join.passwordCheck.length > 0 && (
                    <div>비밀번호 영문 숫자 특수기호 포함 8자~20자</div>
                  )
                : PwCValid &&
                  join.passwordCheck.length > 0 &&
                  (join.passwordCheck === join.password ? (
                    <div className="Green">사용 가능한 비밀번호 입니다.</div>
                  ) : (
                    <div>비밀번호가 일치하지 않습니다.</div>
                  ))
                  //위에 비밀번호와 일치하는지 대조.
              }
            </div>
          </span>
          <button className="SignupButton" onClick={onSubmitHandler}>회원가입</button>
        </div>
        <div className="LoginBox">
          {" "}
          이미 계정이 있으신가요?{" "}
          <span className="blackSpan" onClick={() => navigate("/")}>로그인</span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;





