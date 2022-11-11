// 메인 리스트 페이지에서 트렌딩 또는 최신으로 선택해서 보여주기

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
import { __getTimeList } from "../../redux/modules/listSlice"
import PostList from "../features/PostList"
// 시간순 리스트
const Content = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const mainList  = useSelector((state) => state.conimalList.postList)

  useEffect(() => {
    dispatch(__getTimeList())
  }, [dispatch])

  return (
      <div className="post-container">
        {mainList.map((post) => {
          if (post.length !== 0)
            return (
              <div>
                <PostList key={post.postId} post={post} />
              </div> 
            )
        })}
      </div>
  )
}

export default Content

