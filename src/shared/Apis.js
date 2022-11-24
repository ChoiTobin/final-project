import axios from "axios";
import { Cookies } from "react-cookie"

const cookies = new Cookies()

const noToken = axios.create({
  // 추후에 로컬에서 서버 주소로 변경해야 함
  baseURL: process.env.REACT_APP_URL, 
  //process.env.REACT_APP_URL,
  withCredentials: true,
})

const token = axios.create({
  // 추후에 로컬에서 서버 주소로 변경해야 함
  baseURL:process.env.REACT_APP_URL, 
  //process.env.REACT_APP_URL,
  headers: {
    Access_Token:
      localStorage.getItem("Access_Token") === undefined
        ? ""
        : localStorage.getItem("Access_Token"),
  },
  withCredentials: true,
})

const file = axios.create({
  
  // 추후에 로컬에서 서버 주소로 변경해야 함
  baseURL:process.env.REACT_APP_URL,
  //process.env.REACT_APP_URL,
  headers: {
    enctype: "multipart/form-data",
    Access_Token:
      localStorage.getItem("Access_Token") === undefined
        ? ""
        : localStorage.getItem("Access_Token"),
  },
  withCredentials: true,
})

export const Apis = {
  // 회원가입
  signupAX: (signupInfo) => noToken.post(`/auth/signup`, signupInfo),
  // 이메일 중복확인
  usernameAX: (userid) => noToken.post(`/auth/idCheck`, userid),
  //닉네임체크
  nicknameAX: (nickname) => noToken.post(`/auth/nicknameCheck`,nickname),
  // 로그인
  loginAX: (loginInfo) => noToken.post(`/auth/login`, loginInfo),
  // 소셜 로그인 - 카카오
  loginKakaoAX: (loginInfo) => token.post(`auth/kakaoLogin`, loginInfo), 

  //createRoom----------------------------------------------------------------
  CreateRoom: (createRoom) => token.post(`/room`, createRoom),
  // getRoomList: () => token.get(`/roomList`),

  
  // 게시글 작성
  // postFileAX: (payload) => file.post(`/api/posts/${payload}`),
  postFileAX: (payload) => file.post(`/api/posts`,payload),
  // 게시글 수정
  putPostAX: (payload) => file.put(`/api/posts/${payload.id}`, payload.content),
  // 게시글 삭제
  deletePostAX: (id) => token.delete(`/api/posts/${id}`),
  // 게시글 전체 조회
  // getPostTimeAX: () => token.get(`/api/posts?&size=5&page=0`),
  // getPostTimeAX: (payload) => token.get(`/api/posts?&size=5&page=${payload}`),
  getPostTimeAX: () => token.get(`/api/posts`),
  // 게시글 상세 조회
  getDetailAX: (postId) => token.get(`/api/posts/${postId}`),
  // 게시글 진행 상테 수정
  getStateAX: (postId) => token.put(`/api/posts/${postId}/state`),

  // 마이페이지 조회
  getMyPageAX: () => token.get(`/api/mypage`),
  // 마이페이지 내 게시글 조회
  getMyPostAX: (pageCount) => token.get(`/api/mypage/posts?page=${pageCount}`),
  // 마이페이지 프로필 이미지 업로드
  postMyImgAX: (payload) => file.post(`api/mypage/image`, payload),

  // 마이페이지 반려동물 정보 조회
  getMyPetAX: () => token.get(`api/mypage/pet`),
  // 마이페이지 반려동물 정보 작성
  postMyPetAX: () => token.get(`api/mypage/pet`),
  // 마이페이지 반려동물 정보 수정
  putMyPetAX: (petId) => token.get(`api/mypage/pet/${petId}`),
  // 마이페이지 반려동물 정보 삭제
  deleteMyPetAX: (petId) => token.get(`api/mypage/pet/${petId}`),
  
  // 다른회원 마이페이지 정보 조회
  getUserInfoAX: (email) => noToken.get(`api/users/${email}`),
  // 다른회원 마이페이지 반려동물 정보 조회
  getPetInfoAX: (email) => noToken.get(`api/users/${email}/pet`),
  // 다른회원 마이페이지 게시글 조회
  getPostInfoAX: (email) => token.get(`api/users/${email}/posts`),
  
  // 게시글 검색 - 특정 단어 포함 게시글 조회
  getKeywordAX: (searchKeyword) => token.get(`/api/search?content=${searchKeyword}`),
  // 게시글 검색 - 카테고리별 게시글 조회 (대형/중형/소형만 보기)
  getFilterAX: (categoryKeyword) => token.get(`/api/filter?category=${categoryKeyword}`),
}
export default Apis