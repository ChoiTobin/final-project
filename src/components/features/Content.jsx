import React, { useEffect , useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import postSlice, { __getPostTime , __getKeyword , __getCategory } from "../../redux/modules/postSlice"
import PostList from "../features/PostList"
// 검색
const Content = () => {
  const dispatch = useDispatch()
  // 리스트
  const posts  = useSelector((state) => state.post.post)
  //전체조회
  useEffect(() => {
    dispatch(
      __getPostTime()
    )
  }, [dispatch]);
  
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
  
  const onClickAll = () =>{ //전체검색
    dispatch(__getPostTime());
  }

  const onClickBig = () =>{ //대형
    // const data = posts.response.filter((item)=> item.category === "대형" )
    // 휴먼에러 처음에 "대형"이라고 문자열로 보냈을시 잘 요청했었는데 데이터를 확인하니 글자가 아닌 이상한 영어가나옴
    // api주소에서 특수문자 오타로인해 딴방향을 잡고있었음
    dispatch(__getCategory("대형"));
  } 
  const onClickMiddle = () =>{ //중형
    dispatch(__getCategory("중형"));
  } 
  const onClickSmall = () =>{ //소형
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
        <PostList posts={posts} key={posts.postId} />
      </div> 
  )
}

export default Content
