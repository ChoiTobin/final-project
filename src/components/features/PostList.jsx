import React, {useState, useEffect, useCallback} from 'react'	
import { useNavigate } from 'react-router-dom'	
import { useDispatch, useSelector } from 'react-redux'	
import { useInView } from "react-intersection-observer"
import SearchList from "../../components/features/SearchList"
import { __getDetail, __getPostTime , __deletePost} from"../../redux/modules/postSlice"	
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
const PostList = ({searchposts,posts}) => {	
  const navigator = useNavigate();	
  const dispatch = useDispatch()	

  const [page, setPage] = useState(0) //페이지수
  const [size, setSize] = useState([]) //리스트수 
  const [loading, setLoading] = useState(false)
  const [ref, inView] = useInView()
  
  /**  서버에서 아이템을 가지고 오는 함수 */
  const getItems = useCallback(async () => {
    dispatch(__getPostTime(page));
  }, [page])  
  
  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems()
    setSize(posts)
    // console.log("size", size)
  }, [getItems])
   
  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading && size !== posts) {
      setPage(prevState => prevState + 1)
      // console.log("페이지",page)
  } 
  }, [inView, loading])

  return (	
      <>
        <SearchList  state={page} setState={setPage} />
        <Carousel >
          <Carousel.Item style={{
          width: "100%",
          height: "100%",
        }}>
            <Img
              className="d-block w-100"
              // src="holder.js/800x400?text=First slide&bg=373940"
              src={require("../../img/big.png")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{
          width: "100%",
          height: "100%",
        }}>
            <Img
              className="d-block w-100"
              // src="holder.js/800x400?text=First slide&bg=373940"
              src={require("../../img/big.png")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{
          width: "100%",
          height: "100%",
        }}>
            <Img
              className="d-block w-100"
              // src="holder.js/800x400?text=First slide&bg=373940"
              src={require("../../img/big.png")}
              alt="First slide"
            />
          </Carousel.Item>
      </Carousel>
    <Listmap>
        {	searchposts && searchposts.Length  !== 0 ? searchposts.map((post)=>{
          return(	
            <ListBox onClick={()=>{navigator(`/Detail/${post.id}`)}} key={post.id}>
                  <Div1>
                    <Flex1> 
                      <Strong>{post.category}</Strong>
                      <P>{post.state}<Span>{post.title}</Span></P>
                    </Flex1>
                    <Flex2>
                      <img src={require("../../img/Vector5.png")} />
                    </Flex2> 
                  </Div1>
                  <Div1>
                    <Flex1> 
                      <p>{post.date}</p>
                    </Flex1>
                    <Flex2>
                    <PriceBox><p>{post.price}원</p></PriceBox>
                    </Flex2> 
                  </Div1>
              </ListBox>
          )
        }) :
            posts.map((post) =>  {	
              // if (post.length !== 0)	
              return(	
                <ListBox onClick={()=>{navigator(`/Detail/${post.id}`)}} key={post.id}>
                  <Div1>
                    <Flex1> 
                      <Strong>{post.category}</Strong>
                      <P>{post.state}<Span>{post.title}</Span></P>
                    </Flex1>
                    <Flex2>
                      <img src={require("../../img/Vector5.png")} />
                    </Flex2> 
                  </Div1>
                  <Div1>
                    <Flex1> 
                      <p>{post.date}</p>
                    </Flex1>
                    <Flex2>
                    <PriceBox><p>{post.price}원</p></PriceBox>
                    </Flex2> 
                  </Div1>
              </ListBox>
          )	
        })}
        <div ref={ref}></div>
        </Listmap>
      </>	
  )	
}	
export default PostList ;	

const Img = styled.img`
  object-fit: contain;
`
const ListBox = styled.div`
  // padding:20px 30px;
  background-color: #fff;
  padding:20px;
`
const Strong = styled.strong`
  font-size:14px;
`
const Div1 = styled.div`
  display:flex;
  justify-content:space-between;
`
const Flex1 = styled.div`

`
const Flex2 = styled.div`
  margin-top:5px;
`
const Listmap = styled.div`
  width: 360px;
  max-height: 640px;
  margin: auto;
  overflow: auto;
  /* background-color: lightpink; */
`
const P = styled.p`
  color:#ed9071;
  font-weight:600;
  font-size:18px;
`
const Span = styled.span`
  color:#000;
  margin-left:10px;
  font-weight:500;
  font-size:16px;
`
const PriceBox = styled.div`
  width:100px;
  height:36px;
  font-size:20px;
  font-weight:600;
  color:#fff;
  text-align:center;
  line-height:36px;
  background-color:#ed9071;
`