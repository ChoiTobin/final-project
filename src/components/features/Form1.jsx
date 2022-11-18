import React, { useState } from "react";
import styled from "styled-components";
import regex from "../../shared/regex";
import ValidInput from "../element/ValidBtnInput";
import Image from "../element/Image";

const Form = ({post}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selected, setSelected] = useState("all")
  const sizes = ["all", "small", "medium", "big"]
  const options = sizes.map((size) => {
    return <option value={size}>{size}</option>
  })

  const onChangeSelect = (event) => {
    setSelected(event.target.value)
  }

  return (
    <div>
      <div>
        <select onChange={onChangeSelect}>{options}</select>
        
      </div>
      <div>
        <Image />
      </div>
      <ValidInput
        label="제목"
        value={title}
        setValue={setTitle}
        maxValue={30}
        regexCheck={regex.title}
        defaultText="제목을 입력해주세요"
        successText="통과"
        errorText="제목은 30자 이내로 작성해야 합니다"
      />

      <div>
        <span>가격</span>
        <input type="number" value={selected} onChange={onChangeSelect} placeholder="예) 20000원" />
      </div>
      
      <ValidInput
        label="내용"
        value={body}
        setValue={setBody}
        regexCheck={regex.body}
        defaultText="내용을 입력해주세요"
        successText="통과"
        errorText="내용은 200자 이내로 작성해야 합니다."
      />
    </div>
  )
}
export default Form;