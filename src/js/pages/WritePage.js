import Header from "../components/Header";
import postController from "../controller/postController";
import Router from "../router";
import $ from "../selector";

export default class WritePage {
  constructor(dom) {
    this.dom = dom;
    this.postId = Router.instance.current.params?.id;
    this.post = {};
    this.onInit();
    this.onReady();
  }

  onInit() {
    // 최초 진입
    console.log("init");
    if (Router.instance.current.url === Router.instance.pages.edit.url) {
      //수정으로 접근시 postId가 정상적이지 않으면 메인으로 보낸다.

      if (Number.isNaN(Number(this.postId))) {
        alert("잘못된 접근입니다!");
        Router.instance.replace("/");
      }
    }
    this.dom.innerHTML = this.template();
    new Header($("#header"));
  }

  onReady = async () => {
    //DOM 업데이트 이후
    console.log("ready");
    if (Number.isNaN(Number(this.postId)) == false) {
      //수정페이지면 기존 데이터 불러오기
      await this.getPost(this.postId);
      this.render();
    }

    $("#img-input").addEventListener("click", this.handleImageBtn);
    $("#write-form").addEventListener("submit", this.handleWriteBtn);
  };

  onWillUpdate() {
    console.log("willUpdate");
  }

  onDidUpdate() {
    console.log("didUpdate");
    $("#img-input").addEventListener("click", this.handleImageBtn);
    $("#write-form").addEventListener("submit", this.handleWriteBtn);
  }

  getPost = async (postId) => {
    const response = await postController.getPost(postId);
    if (response === undefined) return;
    this.post = response.post;
  };

  handleImageBtn = async () => {
    //unsplash에서 이미지를 얻어온 다음 데이터 업데이트
    const response = await postController.getImage();
    if (response == undefined) return;
    this.post = { ...this.post, image: response.urls.full };
    this.render();
  };

  handleWriteBtn = async (e) => {
    e.preventDefault();
    const title = $("#write-title-input").value;
    const content = $("#write-content-textarea").value;

    const request = {
      ...this.post,
      title,
      content,
    };

    if (Number.isNaN(Number(this.postId)) == false) {
      //수정의 경우
      const response = await postController.updatePost(this.postId, request);
      if (response.code === 200) Router.instance.replace(`/detail/${this.postId}`);
    } else {
      //추가의 경우
      const response = await postController.addPost(request);
      if (response.code === 201) Router.instance.replace("/");
    }
  };

  template() {
    return `<div>
      <div id="header"></div>
      <div class="content">
      ${this.imageBox()} 
      <button id="img-input" class="btn main-btn">이미지 등록</button>
      <form id="write-form">
      <h3>제목</h3>
      <input id="write-title-input" class="write-title-input" placeholder="글 제목을 입력해주세요" value="${
        this.post?.title ?? ""
      }"/>
      <h3>내용</h3>
      <textarea id="write-content-textarea" class="write-content-textarea" placeholder="글 내용을 입력해주세요">${
        this.post?.content ?? ""
      }</textarea>
      <button id="write-btn" class="btn main-btn">게시물 등록</button>
      </form
      </div>
    </div>`;
  }

  imageBox() {
    if (this.post?.image == undefined) return `<div class="write-no-img">이미지를 등록해주세요</div>`;
    return `<img class="write-img" src="${this.post.image}"/>`;
  }

  render() {
    this.onWillUpdate();
    this.dom.innerHTML = this.template();
    new Header($("#header"));
    this.onDidUpdate();
  }
}
