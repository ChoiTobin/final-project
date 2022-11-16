import React, {useState, useEffect, useCallback} from 'react'	
import { useNavigate } from 'react-router-dom'	
import { useDispatch, useSelector } from 'react-redux'	
import { useInView } from "react-intersection-observer"
import { __getDetail, __getPostTime , __deletePost} from"../../redux/modules/postSlice"	
const PostList = () => {	
  const navigator = useNavigate();	
  const dispatch = useDispatch()	
  const posts = useSelector((state)=>state.post.post)	
  const isLoading = useSelector((state)=>state.post.post)	
  useEffect(() => {	
    dispatch(__getPostTime());	
  }, [dispatch]);	


  //무한스크롤
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [ref, inView] = useInView()	
  /**  서버에서 아이템을 가지고 오는 함수 */
  const getItems = useCallback(async () => {
    dispatch(__getPostTime(page));
  }, [dispatch, page])
  
  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
      getItems()
      setTotal(posts.length)
      console.log("total", total)
  }, [getItems])

  useEffect(() => {
  // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니고 마지막이 아니면 페이지+1
  if (inView && !isLoading && total !== posts.length) {
      setPage(prevState => prevState + 1)
  }
  }, [inView, isLoading, total])
  return (	
      <>	
        {	
          posts.response !== undefined &&  
          posts.response.map((post) =>  {	
              // if (post.length !== 0)	
              return(	
                  <div key={post.id}>	
                    <ul>	
                      <li>{post.state},{post.title}</li>	
                      {/* <img src={post.imgs[0]} alt="#" /> */}
                      <li>{post.content}</li>
                      <li>{post.category}</li>
                      <li>{post.price}원</li>		
                      <li>{post.date}</li>		
                      <li>{post.local}</li>		
                      <li>{post.createdAt}</li>	
                    </ul>	
                  </div>	
              )	
              
        })}
        <div ref={ref} ></div>
      </>	
  )	
}	
export default PostList ;	
// onClick={()=>{navigator(`/Detail/${post.postId}`)}}