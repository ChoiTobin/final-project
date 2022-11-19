import React, { useEffect , useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import postSlice, { __getPostTime , __getKeyword , __getCategory } from "../../redux/modules/postSlice"

const Content = () => {
  const dispatch = useDispatch()
  const searchposts = useSelector((state) => state.post.post.response)
  // const {posts} = useSelector((state)=>state.post)
  //검색
  const [ getSearch , setGetSearch ] = useState({search:""});
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setGetSearch({...getSearch,[name]: value,});
  };
  
  //키워드검색 #제목 #내용 #지역
  const onClickSearch = () =>{ 
    if (getSearch.search.trim() === "" )  {
      return alert("내용을 입력해주세요.");
    } 
    dispatch(__getKeyword(getSearch.search));
  }
  // useEffect(() => {	
  //   dispatch(__getPostTime());	
  // }, [dispatch])

  const onClickAll = () =>{ //전체검색
    window.location.replace();
    // dispatch(__getPostTime());
    // alert("점검중입니다.")
  }
  
  // 카테고리검색
  const onClickBig = () =>{ 
    dispatch(__getCategory("대형"));
  } 
  const onClickMiddle = () =>{ 
    dispatch(__getCategory("중형"));
  } 
  const onClickSmall = () =>{ 
    dispatch(__getCategory("소형"));
  } 
  
  return (
      <div>
        <button type='button' onClick={onClickAll}>전체</button>
        <button type='button' name="대형" onClick={onClickBig}>큰동물</button>
        <button type='button' name="중형" onClick={onClickMiddle}>중간동물</button>
        <button type='button' name="소형" onClick={onClickSmall}>작은동물</button>
        <div className="검색">
          <input type="text" name="search" defaultValue={getSearch.search || ""} onChange={onChangeHandler} />
          <button onClick={onClickSearch}>검색</button>
        </div>
      </div> 
  )
}

export default Content