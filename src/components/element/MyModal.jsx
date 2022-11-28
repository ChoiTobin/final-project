import React from "react";
import "./MyModal.css";

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
