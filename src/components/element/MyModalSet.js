import React, { Component } from "react";
import MyModal from "./MyModal";
import ModalPortal from "./ModalPortal";
import "./App.css";

// 버튼을 눌러서 모달을 보여주는 이벤트를 발생시키려는 컴포넌트

class MyModalSet extends Component {
  state = {
    modal: false
  };
  handleOpenModal = () => {
    this.setState({
      modal: true
    });
  };
  handleCloseModal = () => {
    this.setState({
      modal: false
    });
  };
  render() {
    return (
      <div className="App">
        <h1>안녕하세요 리액트!</h1>
        <button onClick={this.handleOpenModal}>모달 열기</button>
        {this.state.modal && (
          <ModalPortal>
            <MyModal onClose={this.handleCloseModal} />
          </ModalPortal>
        )}
      </div>
    );
  }
}

export default MyModalSet;
