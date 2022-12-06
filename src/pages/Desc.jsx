import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RunPet } from "../img/intro-walk.svg";
import { ReactComponent as NavArrow } from "../img/intro-arrow.svg";
import Intro from "./Intro";
import "../styles/Intro.css";

const Desc = () => {
  const navigate = useNavigate();

  // 시작 로딩화면 설정한 부분
  let [alert, alertSet] = useState(true);
  let [inputData, inputDataSet] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => { alertSet(false) }, 2000);
    return () => {clearTimeout(timer)}
  },[alert]);

  return (
    <div>
      <div>
        {/* 시작화면 로딩후 렌더링되고 이후에 로그인 화면으로 진입 */}
        {inputData}
        <input onChange={(event) => inputDataSet(event.target.value)} style={{display: 'none'}} />
        {alert === true ? (
          <div>
            <Intro/>
          </div>          
        ) : (
            <div>
              <div className="layout">
                <div className="text">
                  <div className="title">
                    산책 맡기고 싶은데 안심할 수 있는<br/>
                    사람을 찾고 싶을 떄가 있으셨나요?
                  </div>
                  <div className="explain">
                    크멍을 통해 믿고 맡기고,<br/>
                    소소한 재능 나눔으로 페이까지!
                  </div>
                </div>
                <RunPet style={{ width: "135.02px", height:"135.02px" }} />
                <div className="arrow">
                  <span onClick={() => navigate('/signin')} className='move'>바로 크멍 시작하기 <NavArrow/></span>
                </div>
              </div>
            </div>
            
        )}
      </div>
    </div>
    
  )
}

export default Desc;