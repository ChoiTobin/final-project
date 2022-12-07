https://cactus.tistory.com/306
yarn add pretendard

```
final-project
├─ .gitignore
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ db.json
├─ FolderTree.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  ├─ robots.txt
│  └─ static
│     └─ ogimage.png
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ components
│  │  ├─ element
│  │  │  ├─ Carousel.jsx
│  │  │  ├─ ChatModal
│  │  │  │  ├─ Modal.css
│  │  │  │  └─ Modal2.js
│  │  │  ├─ Image.jsx
│  │  │  ├─ ModalPortal.jsx
│  │  │  ├─ myApp.js
│  │  │  ├─ MyModal.css
│  │  │  ├─ MyModal.jsx
│  │  │  ├─ MyPetModal.css
│  │  │  ├─ MyPicModal.css
│  │  │  └─ Responsible
│  │  │     ├─ index.js
│  │  │     ├─ ReactResponsible.jsx
│  │  │     ├─ ResponsibleCarousel.jsx
│  │  │     └─ ResponsibleModal.jsx
│  │  ├─ features
│  │  │  ├─ Login
│  │  │  │  ├─ KakaoLogin.js
│  │  │  │  ├─ NaverLogin.js
│  │  │  │  ├─ OAuth2RedirectHandler.js
│  │  │  │  └─ OAuthNaverLogin.js
│  │  │  ├─ Mypage
│  │  │  │  ├─ AddPetInfo.jsx
│  │  │  │  ├─ AddUserPic.jsx
│  │  │  │  ├─ EditDetail.jsx
│  │  │  │  ├─ EditPetInfo.jsx
│  │  │  │  ├─ MyContent.jsx
│  │  │  │  ├─ mypageTab.jsx
│  │  │  │  ├─ PetInfo.jsx
│  │  │  │  └─ UserInfo.jsx
│  │  │  └─ Posts
│  │  │     ├─ Content.jsx
│  │  │     ├─ Form.jsx
│  │  │     ├─ PostList.jsx
│  │  │     ├─ Rating.jsx
│  │  │     ├─ RatingModal
│  │  │     │  ├─ Modal.css
│  │  │     │  └─ RatingModal.js
│  │  │     └─ SearchList.jsx
│  │  ├─ hooks
│  │  │  ├─ useImgUpload.jsx
│  │  │  └─ useInput.jsx
│  │  └─ Layout
│  │     ├─ Footer.css
│  │     ├─ Footer.jsx
│  │     ├─ Header.jsx
│  │     └─ Layout.jsx
│  ├─ fonts
│  │  ├─ globalFont.js
│  │  ├─ Pretendard-Black.woff2
│  │  ├─ Pretendard-Bold.woff2
│  │  ├─ Pretendard-ExtraBold.woff2
│  │  ├─ Pretendard-ExtraLight.woff2
│  │  ├─ Pretendard-Light.woff2
│  │  ├─ Pretendard-Medium.woff2
│  │  ├─ Pretendard-Regular.woff2
│  │  ├─ Pretendard-SemiBold.woff2
│  │  └─ Pretendard-Thin.woff2
│  ├─ FullHTML.css
│  ├─ img
│  │  ├─ all.png
│  │  ├─ banner.png
│  │  ├─ banner.svg
│  │  ├─ big.png
│  │  ├─ chat-c.svg
│  │  ├─ chat-g.svg
│  │  ├─ form-add.svg
│  │  ├─ form-drop.svg
│  │  ├─ form-preview.svg
│  │  ├─ header-backarrow.svg
│  │  ├─ home-c.svg
│  │  ├─ home-g.svg
│  │  ├─ intro-arrow.svg
│  │  ├─ intro-walk.svg
│  │  ├─ list-date.svg
│  │  ├─ list-local.svg
│  │  ├─ logo-chat.svg
│  │  ├─ logo-header.svg
│  │  ├─ logo-sign.svg
│  │  ├─ logo-w.svg
│  │  ├─ medium.png
│  │  ├─ my-arrow.svg
│  │  ├─ my-c.svg
│  │  ├─ my-cmung.svg
│  │  ├─ my-date.svg
│  │  ├─ my-delete.svg
│  │  ├─ my-edit.svg
│  │  ├─ my-g.svg
│  │  ├─ my-kakao.svg
│  │  ├─ my-naver.svg
│  │  ├─ my-star.svg
│  │  ├─ my-stars.svg
│  │  ├─ post-c.svg
│  │  ├─ post-content.svg
│  │  ├─ post-date.svg
│  │  ├─ post-g.svg
│  │  ├─ post-local.svg
│  │  ├─ post-pic.svg
│  │  ├─ search.svg
│  │  ├─ send.svg
│  │  ├─ sign-kakao.svg
│  │  ├─ sign-naver.svg
│  │  ├─ small.png
│  │  ├─ star-co.svg
│  │  ├─ star-no.svg
│  │  ├─ state-b.svg
│  │  ├─ state-g.svg
│  │  ├─ user-chat.svg
│  │  ├─ user-my.svg
│  │  └─ user-post.svg
│  ├─ index.css
│  ├─ index.js
│  ├─ pages
│  │  ├─ ChatList.jsx
│  │  ├─ ChatModal
│  │  │  └─ Modal2.js
│  │  ├─ ChatRoomPage.jsx
│  │  ├─ Desc.jsx
│  │  ├─ Detail.jsx
│  │  ├─ Home.jsx
│  │  ├─ Intro.jsx
│  │  ├─ MainLogin.jsx
│  │  ├─ MyPage.jsx
│  │  ├─ SignIn.jsx
│  │  └─ SignUp.jsx
│  ├─ redux
│  │  ├─ config
│  │  │  └─ configStore.js
│  │  └─ modules
│  │     ├─ chattingSlice.js
│  │     ├─ mypageSlice.js
│  │     ├─ postSlice.js
│  │     └─ userSlice.js
│  ├─ serviceWorker.js
│  ├─ setupTests.js
│  ├─ shared
│  │  ├─ Apis.js
│  │  ├─ Cookie.js
│  │  ├─ regex.js
│  │  └─ Router.js
│  └─ styles
│     ├─ ChatList.css
│     ├─ ChatRoomPage.css
│     ├─ detail.css
│     ├─ form.css
│     ├─ Intro.css
│     ├─ List.css
│     ├─ Modal.css
│     ├─ postlist.css
│     ├─ rating.css
│     └─ searchlist.css
└─ yarn.lock

```