![image](https://oopy.lazyrockets.com/api/v2/member/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2dfadd5f-267e-4fb1-9196-6d5b146ac8fc%2F%25EC%258B%25A0%25EB%2585%2584%25EB%25A9%2594%25EC%258B%259C%25EC%25A7%2580_%25EC%25A3%25BC%25EA%25B3%25A0_%25EB%25B0%259B%25EA%25B8%25B0.png&blockId=9de54c47-dc2b-48f8-94bd-19bc97493318&t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0bmFtZSI6Ind3dy5udW1ibGUuaXQiLCJyb2xlIjoiYXBpIiwiaWF0IjoxNjc0MTkzMzg4LCJleHAiOjE2NzQyMDQxODh9.3W2OFVJX59IK560C7qILGntZ4VJUTIWc4DLbJAe3acU)

# VanillaJS 로 신년메시지 주고받는 사이트를 SPA 로 만들기

- 진행기간 : 2022-01-06 ~ 2022-01-19

<br/>

## 👀 포인트

- Vanilla JS로 만든 SPA App
- 라이프사이클로 뷰를 관리하는 구조
- axios instace와 interceptor 활용하여 api 구조 작성

<br/>

## 🗂 기록

- [환경설정](https://github.com/che-ri/numble_js_spa/issues/4)
- [라우터 설정](https://github.com/che-ri/numble_js_spa/issues/2)
- [라이프사이클](https://github.com/che-ri/numble_js_spa/issues/9)
- [api](https://github.com/che-ri/numble_js_spa/issues/8)
- [헤더 작업](https://github.com/che-ri/numble_js_spa/issues/5)
- [메인 페이지 작업](https://github.com/che-ri/numble_js_spa/issues/6)
- [디테일 페이지 작업](https://github.com/che-ri/numble_js_spa/issues/10)
- [작성페이지 작업](https://github.com/che-ri/numble_js_spa/issues/11)

<br/>

## 디렉토리 구조 📂

<details markdown="1">
<summary>자세히 보기</summary>

```

├── README.md
├── .gitignore
├── package.json
├── yarn.lock
├── webpack.config.js
├── babel.config.js
├── index.html
├── src
│   ├── api
│   │   ├── axios.js
│   │   └── index.js
│   ├── constants
│   │   ├── icon.js
│   │   └── index.js
│   ├── css
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── comment.css
│   │   ├── content.css
│   │   ├── header.css
│   │   ├── post.css
│   │   ├── style.css
│   │   ├── text.css
│   │   └── write.css
│   ├── js
│   │   ├── components
│   │   │   └── Header.js
│   │   ├── controller
│   │   │   ├── commentController.js
│   │   │   └── postController.js
│   │   ├── page
│   │   │   ├── DetailPage.js
│   │   │   ├── MainPage.js
│   │   │   ├── NotFoundPage.js
│   │   │   └── WritePage.js
│   │   ├── index.js
│   │   ├── router.js
│   │   └── selector.js
├── styles
│   ├── index.scss
│   ├── components
│   ├── constants
│   ├── layouts
│   └── mixin
|
├── prettierrc.json
├── babel.config.json
├── tsconfig.json
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```
