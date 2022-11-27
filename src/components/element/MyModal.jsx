import React from "react";
import "./MyModal.css";

// 메인 페이지에서 버튼을 눌러 모달을 열면 볼 수 있는 내부 페이지
const MyModal = ({ onClose }) => {
  return (
    <div className="MyModal">
      <div className="content">
        <h3>이것은 모달</h3>
        <p>궁시렁 궁시렁 내용입니다.</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default MyModal;
