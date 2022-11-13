//한국어+글자수(3글자 이상,10글자 이하)
// const nickname = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,10}$/;

// 영문, 한글, 숫자, 특수문자(_) + 글자수 (2글자 이상 20글자 이하)
const nickname = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|A-Z|a-z|0-9|_]{2,20}$/;

//email형식
const email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

//영어소문자+숫자+특수문자(_,-)+글자수(6글자 이상, 10글자 이하)
const password = /^[a-z0-9_-]{6,10}$/;

//한국어+글자수(1글자 이상,30글자 이하)
const title = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,30}$/;

//한국어+글자수(1글자 이상,200글자 이하)
const body = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,200}$/;

const regex = { nickname, email, password, title, body };

export default regex;