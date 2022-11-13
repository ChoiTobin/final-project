// // 검색,카테고리로 리스트들을 뿌려주는 컨텐츠 컴포넌트

// import React, { useEffect , useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// // import { useNavigate } from "react-router-dom"
// import { __getConimal , __getSearch } from "../../redux/modules/postSlice"
// import PostList from "../features/PostList"
// // 검색
// const Content = () => {
//   //const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // 리스트
//   const mainList  = useSelector((state) => state.conimalList.postList)
  
//   //유즈이펙트가 랜더링될때 단 한번만 나타난다.
//   useEffect(() => {
//     dispatch(
//       __getConimal()
//     );
//   }, []);

//   // const onClickSearch = () =>{
//   //   dispatch(__getSearch())
//   // }
  
  
//   return (
//       <div>
//         <div className="검색">
//           <input type="text"/>
//           <button >검색</button>
//         </div>
//         <div>홈에서 리스트맵돌린거 불러왔음 아래에 나올꺼임</div>
//         <PostList postList={mainList} key={post.id} />
//       </div> 
//   )
// }

// export default Content

