# Cmung : 크멍 - 반려동물 케어 서비스 플랫폼 
![]()  <br/> 
## 🐶 프로젝트 소개 🐱
<details>
<summary>WireFrame</summary>
<div markdown="1">       

![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d485701-a5c3-4775-b17e-07a3b8a566f6%2FGroup_92.png?table=block&id=a6aba688-5b29-47e9-9d6d-954ef0fc1852&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F93ab93fa-37c4-4188-9b03-55802f6abc18%2FGroup_90.png?table=block&id=99b0ad57-1ee1-4eab-b0cc-9141633c9fde&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F11f344b6-a6b1-490c-aef4-f634359eb7f0%2FGroup_91.png?table=block&id=a7ace84b-6c82-44e7-8c3e-d0f4cfbe7467&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe02a8647-9457-4e84-940d-d00b63f2092f%2FGroup_89.png?table=block&id=b88ad5f7-1c2d-4f28-8744-06abccb5226e&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F82c1317d-8978-426f-8339-ef1c26454f56%2FGroup_88.png?table=block&id=524fb72a-d5e2-48f2-9459-4f7521e4dd04&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd54203b8-7927-4887-991c-3252277dbe31%2FGroup_87.png?table=block&id=0ade5b5a-2c5c-4299-a5e9-42996e78eb02&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)

</div>
</details>

<details>
<summary>Project Trees</summary>
<div markdown="1">

  ```
final-project
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ db.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ components
│  │  ├─ element
│  │  │  ├─ Button.jsx
│  │  │  ├─ Grid.js
│  │  │  ├─ Image.jsx
│  │  │  ├─ infinityScroll.js
│  │  │  ├─ input.jsx
│  │  │  ├─ ValidBtnInput.jsx
│  │  │  └─ ValidInput.jsx
│  │  ├─ features
│  │  │  ├─ AddPetInfo.jsx
│  │  │  ├─ AddUserPic.jsx
│  │  │  ├─ Content.jsx
│  │  │  ├─ EditDetail.jsx
│  │  │  ├─ EditPetInfo.jsx
│  │  │  ├─ Form.jsx
│  │  │  ├─ KakaoLogin.js
│  │  │  ├─ MyContent.jsx
│  │  │  ├─ mypageTab.jsx
│  │  │  ├─ NaverLogin.js
│  │  │  ├─ OAuth2RedirectHandler.js
│  │  │  ├─ PetInfo.jsx
│  │  │  ├─ PostList.jsx
│  │  │  ├─ SearchList.jsx
│  │  │  └─ UserInfo.jsx
│  │  ├─ hooks
│  │  │  ├─ useImgUpload.jsx
│  │  │  └─ useInput.jsx
│  │  ├─ Layout
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.jsx
│  │  │  └─ Layout.jsx
│  │  └─ modal
│  │     ├─ modal.js
│  │     ├─ modalApply.js
│  │     ├─ modalContainer.js
│  │     └─ useModal.js
│  ├─ img
│  │  ├─ account_circle.svg
│  │  ├─ add-user.png
│  │  ├─ arrow_back.svg
│  │  ├─ chat.svg
│  │  ├─ edit_square.svg
│  │  ├─ home.svg
│  │  ├─ logout.svg
│  │  ├─ online.png
│  │  ├─ pets.png
│  │  ├─ photoIMG.png
│  │  └─ user.png
│  ├─ index.css
│  ├─ index.js
│  ├─ logo.svg
│  ├─ pages
│  │  ├─ chatting
│  │  │  ├─ ChatCard.jsx
│  │  │  ├─ ChatRoomPage.jsx
│  │  │  ├─ ChatSubmitBox.jsx
│  │  │  └─ element
│  │  │     └─ GlobalHeaderChat.jsx
│  │  ├─ Detail.jsx
│  │  ├─ Home.jsx
│  │  ├─ MainLogin.jsx
│  │  ├─ MyPage.jsx
│  │  ├─ Search.jsx
│  │  ├─ SignIn.jsx
│  │  └─ SignUp.jsx
│  ├─ redux
│  │  ├─ config
│  │  │  └─ configStore.js
│  │  └─ modules
│  │     ├─ chattingSlice.js
│  │     ├─ listSlice.js
│  │     ├─ mypageSlice.js
│  │     ├─ postSlice.js
│  │     ├─ searchSlice.js
│  │     └─ userSlice.js
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  └─ shared
│     ├─ Apis.js
│     ├─ Cookie.js
│     ├─ regex.js
│     └─ Router.js
└─ yarn.lock

```
</div>
</details>
<br/>
<a href="https://www.xn--922bn81b.com/">크멍 배포 사이트</a>
<br/>

## 🎯 주요 기능
<!-- ![]() -->
|소셜로그인|게시글 작성|게시글 상세조회|
|------|---|---|
|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9280267e-74ae-4ee7-a016-6efb94a1e3db/demo-%EC%86%8C%EC%85%9C%EB%A1%9C%EA%B7%B8%EC%9D%B8_-_Clipchamp%EB%A1%9C_%EC%A0%9C%EC%9E%91_AdobeExpress.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T092252Z&X-Amz-Expires=86400&X-Amz-Signature=f28e5f83432c1a64e9c706a61f19ae77326de118ced4ba5bbb0cedf2d2eec5ce&X-Amz-SignedHeaders=host&x-id=GetObject" width="200" height="260"/>|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eccf1f80-d336-4e86-84e3-18f3dad843f0/demo-%EA%B2%8C%EC%8B%9C%EA%B8%80%EC%9E%91%EC%84%B1_-_Clipchamp%EB%A1%9C_%EC%A0%9C%EC%9E%91_AdobeExpress.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T092252Z&X-Amz-Expires=86400&X-Amz-Signature=56390aa79c8abda4dc111a25550684457fbf45771a9df04cb2304c5b287b8566&X-Amz-SignedHeaders=host&x-id=GetObject" width="200" height="260"/>|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ae4eef87-a4a2-4552-9b92-b463a4abd278/demo-%EA%B2%8C%EC%8B%9C%EA%B8%80%EC%83%81%EC%84%B8%EC%A1%B0%ED%9A%8C_-_Clipchamp%EB%A1%9C_%EC%A0%9C%EC%9E%91_AdobeExpress.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T092252Z&X-Amz-Expires=86400&X-Amz-Signature=453fc5eb3184908ec1eff1bf13e15c3dd6557eb1ef6d656a71185e227453af74&X-Amz-SignedHeaders=host&x-id=GetObject" width="200" height="260"/>|
<br/>

|탭 메뉴와 무한스크롤|실시간 채팅|거래 상태|
|------|---|---|
|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7d17ca30-8d05-42c1-a0bb-beab81c53cc1/demo-%ED%83%AD%EB%A9%94%EB%89%B4%EC%99%80%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4_-_Clipchamp%EB%A1%9C_%EC%A0%9C%EC%9E%91_AdobeExpress.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T092252Z&X-Amz-Expires=86400&X-Amz-Signature=e4ab8a249f7e7ca520742144f03e6280dbfed3d9ba5122fc7b786c1258d63766&X-Amz-SignedHeaders=host&x-id=GetObject" width="200" height="260"/>|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/afedd6ae-16a3-4d5f-83ca-ddaaf70fcf97/demo-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%B1%84%ED%8C%85_-_Clipchamp%EB%A1%9C_%EC%A0%9C%EC%9E%91_AdobeExpress.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T092252Z&X-Amz-Expires=86400&X-Amz-Signature=886951fed061ceaa95523dc484acfab5befaf1f9e90c6ab6452c04d1f43980b4&X-Amz-SignedHeaders=host&x-id=GetObject" width="200" height="260"/>|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/511b9e03-9418-4af7-a5a9-eaa9bb9da811/demo-%EA%B1%B0%EB%9E%98%EC%83%81%ED%83%9C_-_Clipchamp%EB%A1%9C_%EC%A0%9C%EC%9E%91_AdobeExpress.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T092252Z&X-Amz-Expires=86400&X-Amz-Signature=f16c8c220091e89059ba4f8b7ef7123e6dc1a9fa4db742332f0e08dcf1644598&X-Amz-SignedHeaders=host&x-id=GetObject" width="200" height="260"/>|

|홍보 공지|프로필사진 수정|반려동물 등록|
|------|---|---|
|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4585a87b-6623-4247-ac9b-51f3324b6252/demo-%ED%99%8D%EB%B3%B4%EA%B3%B5%EC%A7%80_-_Clipchamp%EB%A1%9C_%EC%A0%9C%EC%9E%91_AdobeExpress.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T092252Z&X-Amz-Expires=86400&X-Amz-Signature=3793268d7da4818ece9fe36774c1f57e8f26e244b9605527df2368c97a73b96f&X-Amz-SignedHeaders=host&x-id=GetObject" width="200" height="260"/>|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0c4f6dd4-e45a-4660-8908-2ae45cb5a4c6/demo-%ED%94%84%EC%82%AC%EC%88%98%EC%A0%95_-_Clipchamp%EB%A1%9C_%EC%A0%9C%EC%9E%91_AdobeExpress.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T092252Z&X-Amz-Expires=86400&X-Amz-Signature=228789697560ac41eb549f52c8491ec89830513c1aeaad2d455f745b72f7d86e&X-Amz-SignedHeaders=host&x-id=GetObject" width="200" height="260"/>|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8f9d9c96-98df-4747-b34f-f23f4f490383/demo-%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC_-_Clipchamp%EB%A1%9C_%EC%A0%9C%EC%9E%91_AdobeExpress.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T092252Z&X-Amz-Expires=86400&X-Amz-Signature=eaa56e77d66ed0ce1bc04d8eb80a7ae6cd46b0e42a45483335034bce2b7834ea&X-Amz-SignedHeaders=host&x-id=GetObject" width="200" height="260"/>|
<br/>



## 📢 개발 포인트
<!-- ![]() -->
- OAuth 이용한 소셜로그인
- React-Intersection-Observer 이용한 무한스크롤
- Browser-Image-Compression 이용해서 로딩 시간 단축
- Daum PostCode API 이용한 지역기반 서비스에서의 정확한 위치 표기
- Portal 이용한 전역모달

## 🛠️ 기술 스택
<!-- ![]() -->
#### 🖥️ Front-End

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/></a> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/></a> <img src="https://img.shields.io/badge/Create%20React%20App-09D3AC?style=for-the-badge&logo=Create%20React%20App&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React%20Router&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20Redux-0088CC?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Redux.js%20Toolkit-4000BF?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/></a>  
<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled%20components&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20BootStrap-7952B3?style=for-the-badge&logo=BootStrap&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20Intersection%20Observer-68BC71?style=for-the-badge&logo=React&logoColor=white"/></a> <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white"/></a>  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
<br/>

#### 🎨 Front-End & Web Design
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/></a>
<br/>

#### 🎚️Back-End
<img src="https://img.shields.io/badge/Java-F80000?style=for-the-badge&logo=Java&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=Spring%20Security&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JWT-FBBA00?style=for-the-badge&logo=JWT&logoColor=white"/></a> <img src="https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=Auth0&logoColor=white"/></a> <img src="https://img.shields.io/badge/Stomp-66595C?style=for-the-badge&logo=Stomp&logoColor=white"/></a> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/></a> <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"/></a> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20RDS-527FFF?style=for-the-badge&logo=Amazon%20RDS&logoColor=white"/></a> <img src="https://img.shields.io/badge/restful%20API-1287B1?style=for-the-badge&logo=restful%20API&logoColor=white"/></a>
<br/>

### 📝 기술스택 및 라이브러리 사용 이유
<!-- ![]() -->
<details>
<summary>STOMP js / Sock js</summary>
<div markdown="1">

`주어진 문제와 요구사항`

이용자들 간의 매칭과 소통을 위한 플랫폼 내에서의 방법을 도입할 필요성을 느낌

`가설과 선택지`

1 게시글 작성자와 댓글 작성자만 볼 수 있는 비밀 댓글 기능을 적용하기

2 실시간으로 양방향 소통이 가능하고 다른 사람이 볼 수 없는 1:1 채팅

`의사결정과 근거`

- 브라우저의 종류와 관계없이 실시간 통신 구현 가능
- WebSocket을 지원하지 않는 브라우저에서는 브라우저별 전송 프로토콜을 이용해 WebSocket처럼 동작함
- WebSocket의 session관리를 도와주며, 어떤 형식으로 메시지가 사용될 지 지정해준다.
- 발행과 구독이라는 개념이 없어서 상황을 예측하고 일일히 다 설계해야 하는 WebSocket과는 달리 발행, 구독을 도입해서 메시지 통신 방법을 정해두기 때문에 예외처리가 쉽다.

`결과와 후속조치`

채팅방 도입 후 게시글 작성자와 지원자가 아닌 사람이 채팅방으로 접근했을 때 열람할 수 있는지 확인하며 기술 적용
</div>
</details>

<details>
<summary>Browser-Image-Compression</summary>
<div markdown="1">

`주어진 문제와 요구사항`

큰 용량의 이미지 파일 렌더링시 속도저하 발

`가설과 선택지`

1 사용자들로부터 작은 용량의 사진들만 받는다

2 업로드한 사진을 압축해서 서버로 전송한다

`의사결정과 근거`

- 원본 이미지보다 용량을 줄여서 더 빠른 렌더링과 네트워크 비용 절감, 효율성 증대를 위해 사용함
- 압축 최대 크기 1mb, 1920px로 클라이언트에서 압축해서 서버와의 통신도 빠르게 하고, 로딩속도도 개선시킬 수 있기 때문에 적용

`결과와 후속조치`

사용자들의 서비스 이용을 제한시키기에 이용률이 저하를 고려해서 **image-compression** 기능을 도입함
</div>
</details>

<details>
<summary>React-Intersection-Observer</summary>
<div markdown="1">

`주어진 문제와 요구사항`

리렌더링으로 인한 퍼포먼스 저하와 다량의 데이터 받아오는 과정에서 로딩시간이 오래 걸림

`가설과 선택지`

페이지네이션, 무한스크롤 두 가지 방법으로 비동기적 처리를 통해 브라우저 구현

`의사결정과 근거`

- 타겟/상위요소 또는 최상위 document의 viewport 사이의 intersection의 변화를 비동기적으로 관찰
- 화면에 어떤 element가 노출되었는지 감지할 수 있다
- Debounce와 Throttle을 사용하지 않아도 되고, 정확한 offSetTop값을 구하기 위해 매번 Reflow를 하지 않아도 된다.

`결과와 후속조치`

한 번에 게시글을 5개씩 계속해서 GET요청을 받아서 브라우저에 렌더링해서 효율성 높임
</div>
</details>
<details>
<summary>Redux</summary>
<div markdown="1">

- 초기 코드 작성이 복잡하고, 불변성을 지켜야하며, 상태관리를 중앙화 할 수 있는 다른 방법들 (Context API, React-Query, Recoil)도 있으며 볼륨이 크지 않은 프로젝트에서 모든 state를 전역관리를 할 필요가 없지만, 반복적인 코드를 줄여주고, 리렌더링이 필요한 컴포넌트만 렌더링을 해줌으로써 성능최적화에 도움이 된다.
- 복잡한 스토어 설정과 추가되어야 하는 패키지들, 다량의 BoilerPlate코드를 Toolkit을 이용해서 복잡도를 낮추고 사용성을 높여줄 수 있다.
</div>
</details>

<br/>


#### ⚙️ Front-End
|스택 및 라이브러리|Ver|
|--------|---|
|<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"></a> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"></a> <img src="https://img.shields.io/badge/Create%20React%20App-52e0c4?style=for-the-badge&logo=Create%20React%20App&logoColor=black"></a>|<img src="https://img.shields.io/badge/ES6-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/18.2.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/5.0.1-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/ReactDOM-6fd4e9?style=for-the-badge&logo=React&logoColor=black"></a> <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React%20Router&logoColor=white">|<img src="https://img.shields.io/badge/18.2.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/6.4.3-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/React%20Cookie-e6be7f?style=for-the-badge&logo=Cookiecutter&logoColor=black">|<img src="https://img.shields.io/badge/4.1.1-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/React%20Redux-4a57bc?style=for-the-badge&logo=Redux&logoColor=white"></a> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"></a> <img src="https://img.shields.io/badge/Redux%20Toolkit-533287?style=for-the-badge&logo=Redux&logoColor=white"></a> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">|<img src="https://img.shields.io/badge/8.0.4-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/8.0.4-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/1.8.6-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/1.2.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/React%20Icons-0088CC?style=for-the-badge&logo=React&logoColor=white"></a> <img src="https://img.shields.io/badge/React%20Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white"></a> <img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">|<img src="https://img.shields.io/badge/4.6.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/2.6.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/5.3.6-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/Websocket-E57000?style=for-the-badge&logo=Binance&logoColor=white"></a> <img src="https://img.shields.io/badge/Sock/Js%20Client-F5455C?style=for-the-badge&logo=Socket.io&logoColor=white"></a> <img src="https://img.shields.io/badge/WebStomp%20Client-41454A?style=for-the-badge&logo=Power%20Virtual%20Agents&logoColor=white">|<img src="https://img.shields.io/badge/1.0.34-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/1.6.1-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/1.2.6-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/Uuid-7fa9cf?style=for-the-badge&logo=SecurityScorecard&logoColor=white">|<img src="https://img.shields.io/badge/9.0.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/Browser%20Image%20Compression-56B366?style=for-the-badge&logo=ProtonVPN&logoColor=white">|<img src="https://img.shields.io/badge/2.0.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=PWA&logoColor=white">|<img src="https://img.shields.io/badge/100.0.0.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=black"></a> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">|<img src="https://img.shields.io/badge/10.1.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/vercel%20CLI-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|
|<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">|<img src="https://img.shields.io/badge/1.22.19-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|

<br/>

#### ⚙️ Back-End
|스택 및 라이브러리|
|------|
|<img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=Spring%20Security&logoColor=white"/></a>|
|<img src="https://img.shields.io/badge/JWT-FBBA00?style=for-the-badge&logo=JWT&logoColor=white"/></a> <img src="https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=Auth0&logoColor=white"/></a>|
|<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/></a>|
|<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"/></a> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/></a>|
|<img src="https://img.shields.io/badge/Stomp-66595C?style=for-the-badge&logo=Stomp&logoColor=white"/></a>|
|<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20RDS-527FFF?style=for-the-badge&logo=Amazon%20RDS&logoColor=white"/></a>|
<br/>

## ⚔️ 트러블슈팅
<!-- ![]() -->
### 🚀 01) 무한스크롤로 받아온 전체 리스트들이 렌더링이 안됨
- Case : 많은 양의 리스트를 한 번에 받아오기 보다, 여러번 나눠서 GET요청을 받는 것이 효율성이 좋다고 판단해서 구현하던 중에, offsetTop값은 받아 오는데 payload값은 response로 들어오는데, 화면단에 구현하는 과정에서 리스트가 늘어나지 않는 문제 발생
<br/>

- Solve: payload값을 axios를 이용해 thunk함수로 받아온 다음 extra reducer를 통해 스토어에 저장하는 과정에서, 게시글 목록 데이터가 객체 형태로 들어와서 이를 배열 형태로 바꾸고 기존의 리스트에서 추가할 수 있도록 push()를 적용해서 스토어에 저장했다. 
<br/>

### 🚀 02) 포스트 다중이미지 로딩 과정에서 렌더링 시간이 오래 걸림
- Case : 최대 5장의 사진을 각 상세페이지마다 전부 로딩해야 하는데, 이 과정에서 사용자가 불편함을 느끼지 않고, 로딩시간을 단축해서 퍼포먼스 효율성을 높여야 했다. 게시글 상세 페이지에 게시이미지가 들어가는 부분이 큰데, 크기가 작은 사진만 받을 수도 없는 상황이었다.
<br/>

- Solve : browser-image-compression을 사용해서 클라이언트에서 서버로 보내는 과정에서 사용자로부터 받은 이미지를 최소 1920px, 크기는 최대 1MB를 넘지 않도록 압축해서 form-data에 실어서 보냄.
<br/>

### 🚀 03) 웹 소켓을 이용한 양방향 통신 과정에서 연결 시도 중 에러 발생
- Case : 기존 채팅 방에서 이전 버튼을 누르고 다시 채팅 방에 들어오고 메시지를 send 했을 때 send 보낸 메시지가 중첩 되어서 나타남
<br/>

- Solve : 채팅 방을 나갔을 때 stomp 연결을 끊어주지 않아서 메시지가 중복해서 쌓이는 현상이 나타남을 인지 하고, useEffect안에 return문을 사용하여 채팅 방을 나갈 때 소켓을 끊는 함수를 사용하여 소켓 통신을 끊음으로서 해결했다
<br/>

### 🚀 04) 한글 도메인 등록 과정 중, 도메인 주소를 인식하지 못함
- Case : “크멍.com”의 형식으로 한글 도메인으로 구입하여 등록하는 과정에서, 한글을 인코딩해서 인식하지 못하고, 도메인을 등록하려면 오류가 발생해서 등록하지 못함. 또한 gabia에서 구매한 도메인을 vercel domain 설정에서 등록하고 valid confirm받는 과정에서 계속해서 Invalid Configuration이 발생하였다.
<br/>

- Solve : 한글도메인 퓨니코드 변환기를 통해서 한글 도메인을 영어, 숫자, 하이픈(-)으로 이루어진 “xn-”으로 시작하는 퓨니코드(Punicode)의 형태로 변환한 값을 도메인으로 등록하였다. 변환한 도메인을 등록하는 과정에서 DNS 레코드 타입과 값을 “CNAME=cname.vercel-dns.com”, “A=76.76.21.21”로 설정한 다음 valid configuration을 다시 진행하였다.
<br/>

## 🗓️ 프로젝트 기간
<!-- ![]() -->
* 개발기간 : 2022.11.04 - 2022.12.07
* 런칭날짜 : 2022.12.07 (WED)
* 유저 피드백 : 2022.12.07 - 2022.12.14
* 추가 업데이트 : 2022.12.08 - 2022.12.16
<br>

## 🧑🏻‍💻 Team Members 👩🏻‍💻
<!-- ![]() -->
#### 항해 9기 C반 Team02
* Leader - BE / 이도운
* Vice Leader - FE / 최토빈
### Front-End
|FE Leader|Member 1|Member 2|
|------|---|---|
|최토빈|김현진|조민지|
|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F415e997d-fe79-454e-9c05-7a6059179d3e%2Fimage_89.png?id=b34e7261-bea1-44ee-bf08-c29bcdf444b4&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=450&userId=&cache=v2" width="150" height="150"/>|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b33bfbf-270d-48a8-aa39-c026b972a506%2Fimage_90.png?id=1f73a88b-1480-4f64-af36-f02e98e3ab43&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=450&userId=&cache=v2" width="150" height="150"/>|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8f67dbde-f30d-4681-9982-0f1789b90d1f%2Fimage_91.png?id=2fc3ff0e-ebad-422c-998d-356977be5b90&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=370&userId=&cache=v2" width="150" height="150"/>|
<br/>

### Back-End
|BE Leader|Member 1|Member 2|
|------|---|---|
|이도운|김시연|원민재|
|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcdd5c3ba-d7ad-4b2f-8f49-fbc41b0dd95d%2Fimage_97.png?id=a266ccd0-fe95-4f93-8aff-8c61533e48bb&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=420&userId=&cache=v2" width="150" height="150"/>|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff195fb40-811c-4d42-b1bd-6b64bb86dca6%2Fimage_94.png?id=b616aaca-8053-403f-aa45-b78324f4066f&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=400&userId=&cache=v2" width="150" height="150"/>|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd635da3-9194-4b13-b4f0-185ead679378%2Fimage_93.png?id=03bcf0b6-f6cd-4024-9cd9-e7627d093a68&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=400&userId=&cache=v2" width="150" height="150"/>|
<br/>

### Web-Design
|Designer|
|------|
|정미경|
|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe5211c3e-2d46-4f5d-a3cf-980baf87cca6%2Fimage_96.png?id=de14087f-0d3a-4667-8dcb-c51b566e45f2&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=390&userId=&cache=v2" width="150" height="150"/>|
<br/>
