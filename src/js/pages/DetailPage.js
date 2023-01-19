import api from "../../api/index.js";
import Header from "../components/Header.js";
import Router from "../router.js";
import $ from "../selector.js";

export default class DetailPage {
  constructor(dom) {
    this.dom = dom;
    this.postId = Router.instance.current.params?.id;
    this.post = {};
    this.comments = [];
    this.onInit();
    this.onReady();
  }

  onInit() {
    //dom 업데이트 전
    console.log("init");
    if (this.postId === undefined) {
      //params에 postId가 없는 경우 홈으로 이동
      alert("잘못된 접근입니다.");
      Router.instance.replace("/");
    }
    this.dom.innerHTML = this.template();
    new Header($("#header"));
  }

  onReady = async () => {
    //dom이 업데이트된 이후
    console.log("ready");

    try {
      const response = await api.getPost(this.postId);

      if (response.data.data.success === false) throw Error();
      this.post = response.data.data.post;
      this.comments = response.data.data.comments;

      console.log(this.post);
      console.log(this.comments);
      this.render();
    } catch (e) {}
  };

  onWillUpdate() {
    console.log("willUpdate");
  }

  onDidUpdate() {
    console.log("didUpdate");
  }

  commentBox(comment) {
    console.log(comment);
    return `<div class="comment-box"><p>${
      comment?.content ?? ""
    }</p><button class="btn sub-btn comment-control">삭제</button></div>`;
  }

  template() {
    return `<div><div id="header"></div><img class="post-detail-img" src="${
      this.post?.image ?? ""
    }"/> <h1 class="post-detail-title">${this.post?.title ?? ""}</h1> <span class="post-detail-date">${
      this.post?.createdAt ? new Date(this.post.createdAt).toDateString() : ""
    }</span> <p class="post-detail-content">${
      this.post?.content ?? ""
    }</p><div class="post-detail-controls"> <button class="btn sub-btn post-detail-control">수정</button><button class="btn sub-btn post-detail-control">삭제</button></div> <div class="comment-container"> ${this.comments.reduce(
      (acc, cur) => (acc += this.commentBox(cur)),
      ""
    )} </div> <div class="comment-write-container"> <input class="comment-write-input"/> <button class="btn sub-btn comment-write-btn">작성</button></div> <div>`;
  }

  render() {
    this.onWillUpdate();
    this.dom.innerHTML = this.template();
    new Header($("#header"));
    this.onDidUpdate();
  }
}
