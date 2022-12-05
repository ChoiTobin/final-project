import React, { useState,useEffect,useCallback } from 'react'	
import { useNavigate } from 'react-router-dom'		
import { useDispatch, useSelector } from 'react-redux'
import { __getDetail, __getPostTime , __deletePost} from"../../../redux/modules/postSlice"	
import styled from "styled-components";
import '../../../App.css';
import { useInView } from "react-intersection-observer"

const PostList = () => {	
  
  const navigator = useNavigate();	
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.posts)
  const post = useSelector((state) => state.post.post)
  // console.log("posts",posts)
  const [page, setPage] = useState(0) 
  const [loading, setLoading] = useState()
  const [ref, inView] = useInView()
  
  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    dispatch(
      __getPostTime(page)
    );
  }, [page])
  //스크롤내릴때 전체보기 인식 어느페이지에서든 조건 붙여서 전체보기 일때만 실행 

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
  
    getItems()
  }, [getItems])

  
  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(prevState => prevState + 1)
    }
  }, [inView, loading])
  
  return (	
    <Listmap>
        { posts !== undefined && 
          posts.map((post) =>  {	
            return(	
              <ListBox key={post.idx} onClick={()=>{navigator(`/Detail/${post.id}`)}} >
                <Div1>
                  <Flex1> 
                    <Strong>{post.category}</Strong>
                    <Text1>{post.state}<Span>{post.title}</Span></Text1>
                    <Text2>{post.createdAt}</Text2>
                  </Flex1>
                </Div1>
                <Div1>
                  <Flex1> 
                    <Strong style={{fontWeight:500}}><img style={{marginRight:5}} src={require("../../../img/calender.png")} alt="" />{post.date}</Strong>
                    <Strong style={{fontWeight:500,marginLeft:10}}><img style={{width:11,marginRight:5}} src={require("../../../img/markup.png")} alt="" />{post.local}</Strong>
                  </Flex1>
                  <Flex2>
                    {/* <PriceBox>{post.price}원</PriceBox> */}
                    <PriceBox>{post.price.toLocaleString('ko-KR')}원</PriceBox>
                  </Flex2> 
                </Div1>
              </ListBox>
          )
        })   
        }
        <div ref={ref}></div>
      </Listmap>
  )	
}	
export default PostList ;	

const ListBox = styled.div`
  position:relative;
  background-color: #fff;
  padding:10px 20px 10px 20px;
  border: 0.5px solid rgba(237, 144, 113, 0.41);
  border-radius: 1px;
`
const Strong = styled.strong`
  font-size:12px;
`
const Div1 = styled.div`
  display:flex;
  justify-content:space-between;
`
const Flex1 = styled.div`

`
const Flex2 = styled.div`

`
const Listmap = styled.div`
  width: 360px;
  max-height: 440px;
  margin: auto;
  overflow: auto;
  /* background-color: lightpink; */
  ::-webkit-scrollbar {
    display: none;
  }
`
const Text1 = styled.p`
  color:#ed9071;
  font-weight:600;
  font-size:16px;
  margin:0;
`
const Text2 = styled.p`
  font-size:12px;
  margin:0;
`
const Span = styled.span`
  color:#000;
  margin-left:10px;
  font-size:14px;
`
const PriceBox = styled.div`
  // position:absolute;
  // left: 230px;
  // top: 77px;
  font-size:18px;
  font-weight:600;
  color:#ed9071;
  line-height:36px;
`