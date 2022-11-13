import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { __postMyPage } from "../../redux/modules/mypageSlice";

const Image = () => {
  const [imgUrl, setImgUrl] = useState(null)
  const [imgFile, setImgFile] = useState("")
  const imgRef = useRef()

  const dispatch = useDispatch()


  const onChangeImg = () => {
    const reader = new FileReader()

    const img = imgRef.current.files[0]
    reader.readAsDataURL(img)
    reader.onloadend = () => {
      setImgUrl(reader.result)
      setImgFile(img)
    }
  }

  const onPost = (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("img", imgFile)
    dispatch(__postMyPage(formData))
  }

  return (
    <div>
      <img
        src={imgUrl ? imgUrl : "http://localhost:3000" + "/src/img/user.png"}
        alt="userImg"
      />
      <input
        style={{ display: "none" }}
        accept="image/*"
        id="imgFlie"
        name="imgFile"
        type="file"
        multiple
        onChange={onChangeImg}
        ref={imgRef}
      />
      {imgUrl.length === 0 ? (
        <button onClick={onPost}>업로드하기</button>
      ) : (
        <button onClick={onPost}>수정하기</button>
      )}
    </div>
  );
}

export default Image;