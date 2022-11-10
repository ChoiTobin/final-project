import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { __getConimal , __getSearch } from"../../redux/modules/postSlice"

const PostList = () => {
  // const navigator = useNavigate();
  const dispatch = useDispatch()
  const mainList  = useSelector((state) => state.conimalList.postList)
  // console.log("셀렉",mainList);
  useEffect(() => {
    dispatch(
      __getConimal()
    );
  }, []);
  
    //#1  종별 버튼 클릭 
    //#2  백에서 해당 데이터 리스폰으로 보내줌
    //#3  스토어 저장
    //#4  get - useSelector로 받아옴
    //#5  받아온 데이터를 map돌려서 나열
    //filter?category={categoryName}
    // big
    // medium
    // small
  return (
    <>
      <div className="mylist">
        {mainList.map((post) =>  ( 
            <div key={post.id}>
              <ul>
                <li>{post.title}</li>
                <li>{post.price}</li>
                <li>{post.type}</li>
                <li>{post.content}</li>
              </ul>
            </div>
        ))}
      </div>
    </>
  )
}

export default PostList ;

