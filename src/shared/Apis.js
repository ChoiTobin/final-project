import axios from "axios";
import { Cookies } from "react-cookie"

const cookies = new Cookies()

const noToken = axios.create({
  // 추후에 로컬에서 서버 주소로 변경해야 함
  baseURL: process.env.REACT_APP_URL,
  withCredentials: true,
})

const token = axios.create({
  // 추후에 로컬에서 서버 주소로 변경해야 함
  baseURL: process.env.REACT_APP_URL,
  headers: {
    accept: "application/json",
    AccessToken: `${cookies.get("Access_Token")}`,
    RefreshToken: `${cookies.get("refreshToken")}`,
  },
  withCredentials: true,
})




const file = axios.create({
  // 추후에 로컬에서 서버 주소로 변경해야 함
  baseURL: process.env.REACT_APP_URL,
  headers: {
    enctype: "multipart/form-data",
    Access_Token: `${cookies.get("Access_Token")}`,
    RefreshToken: `${cookies.get("refreshToken")}`,
  },
  withCredentials: true,
})

export const Apis = {  
  loginAX: (loginInfo) => noToken.post(`http://localhost:3001/posts`, loginInfo),
  //로그인
  signupAX: (signupInfo) => noToken.post(`http://localhost:3001/posts`, signupInfo),
  //회원가입
  usernameAX: (userid) => noToken.post(`http://localhost:3001/posts`, userid),
  //이메일중복확인



  //현재 사용하는곳 ------------------------------------------------------------------------------------------------------------

  //게시글 작성
  postFileAX: (payload) => file.post(`/team01/post`, payload),
  //게시글 수정
  putPostAX: (payload) => file.put(`/team01/post/${payload.id}`, payload.content),
  //게시글 삭제
  deletePostAX: (id) => token.delete(`/team01/post/${id}`),
  //게시글 좋아요
  likePostAX: (postId) => token.get(`/team01/likes/${postId}`),

  //게시글 전체 조회 - 좋아요순
  getPostLikeAX: () => noToken.get(`/team01/getAllPostByLike`),
  //게시글 전체 조회 - 시간순
  getPostTimeAX: () => noToken.get(`/team01/getAllPostByTime`),
  //게시글 상세 조회
  getDetailAX: (postId) => token.get(`/team01/getPost/${postId}`),

  //댓글 작성
  postCmtAX: (payload) => token.post(`/team01/comment/${payload.id}`, payload.comment),
  //댓글 삭제
  deleteCmtAX: (id) => token.delete(`/team01/comment/${id}`),

  //마이페이지 조회
  getMyPageAX: (userId) => noToken.get(`/team01/getMyPage?id=${userId}`),
  //마이페이지 작성자 소개 수정
  postMyPageAX: (payload) => token.post(`team01/mypage/intro`, payload),
  //마이페이지 이미지 수정
  postMyImgAX: (payload) => token.post(`/team01/mypage/img`, payload),

  //검색
  getSearchAX: (keyword) => noToken.get(`/team01/search/?content=${keyword}`),

}

export default Apis