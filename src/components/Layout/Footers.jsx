import React from "react";

const Footers = () => {
  const htmlElements = document.querySelectorAll("li");

  htmlElements.forEach((li) => {
    li.addEventListener("click", ({ target }) => {
      target.parentNode.className = "";
      target.parentNode.classList.add(target.id);
    });
  });


  return (
    <div>
      <div>
        <ul>
          <li id="home">Home</li>
          <li id="chat">Chat</li>
          <li id="post">Post</li>
          <li id="mypage">Mypage</li>
        </ul>
      </div>
    </div>
  );
}

export default Footers

