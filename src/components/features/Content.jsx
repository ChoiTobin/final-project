import React, { useEffect , useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import postSlice, { __getPostTime , __getKeyword , __getCategory } from "../../redux/modules/postSlice"
import PostList from "../features/PostList"
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
// 검색
const Content = () => {
  const dispatch = useDispatch()
  // 리스트
  const posts  = useSelector((state) => state.post.post)
  const params = useParams
  //전체조회
  useEffect(() => {
    dispatch(
      __getPostTime()
    )
  }, [params]);
  
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

  const onClickBig = () =>{ //대형검색
    const data = posts.response.filter((item)=> item.category === "대형" )
    dispatch(__getCategory(data));
    console.log("데이터",data)
  } 
    
  console.log("페이",posts)
  // console.log("d",solt[0]) //전체조회가 딱 한번밖에 안된다. //대형을누르면 한번더 랜더링 해야한다.
  // https://wepungsan.kro.kr/api/filter?category=대형
  return (
    <div>
      <Header/>
        <button type='button' onClick={onClickAll}>전체</button>
        <button type='button' name="대형" onClick={onClickBig}>대형</button>
        <div className="검색">
          <input type="text" name="search" defaultValue={getSearch.search || ""} onChange={onChangeHandler} />
          <button onClick={onClickSearch}>검색</button>
        </div>
      <PostList posts={posts} key={posts.postId} />
      <Footer/>
      </div> 
  )
}

export default Content
