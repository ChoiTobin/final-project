import React from "react"
import {useSelector } from "react-redux"
import PostList from "../features/PostList"
import SearchList from "../features/SearchList"

const Content = () => {
  const {posts} = useSelector((state)=>state.post)	
  const searchposts = useSelector((state) => state.post.post.response)
  
  return (
      <div>
        <SearchList />
        <PostList posts={posts} key={posts.postId} searchposts={searchposts} />
      </div> 
  )
}

export default Content