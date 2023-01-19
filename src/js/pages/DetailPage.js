import Header from "../components/Header.js";
import Router from "../router.js";
import $ from "../selector.js";

export default class DetailPage {
  constructor(dom) {
    this.dom = dom;
    this.onInit();
  }

  onInit = async () => {
    //dom 업데이트 전
    console.log("init");
    this.dom.innerHTML = this.template();
    new Header($("#header"));
    this.onReady();
  };

  onReady() {
    //dom이 업데이트된 이후
    console.log("ready");
  }

  onWillUpdate() {
    console.log("willUpdate");
  }

  onDidUpdate() {
    console.log("didUpdate");
  }

  comment() {
    return `<div class="comment-box"><p>다들 올 한해 화이팅!다들 올 한해 화이팅!다들 올 한해 화이팅!다들 올 한해 화이팅!다들 올 한해 화이팅!다들 올 한해 화이팅!다들 올 한해 화이팅!다들 올 한해 화이팅!다들 올 한해 화이팅!다들 올 한해 화이팅!</p><button class="btn sub-btn comment-control">삭제</button></div>`;
  }

  template() {
    return `<div><div id="header"></div><img class="post-detail-img"/> <h1 class="post-detail-title">신년 계획</h1> <span class="post-detail-date">2023.01.10</span> <p class="post-detail-content">2023 계획을 세웠나요?? 2023 계획을 세웠나요??2023 계획을 세웠나요??2023 계획을 세웠나요??2023 계획을 세웠나요??2023 계획을 세웠나요??2023 계획을 세웠나요??2023 계획을 세웠나요??</p><div class="post-detail-controls"> <button class="btn sub-btn post-detail-control">수정</button><button class="btn sub-btn post-detail-control">삭제</button></div> <div class="comment-container"> ${this.comment()}  </div> <div class="comment-write-container"> <input class="comment-write-input"/> <button class="btn sub-btn comment-write-btn">작성</button></div> <div>`;
  }

  render() {
    this.onWillUpdate();
    this.dom.innerHTML = this.template();
    new Header($("#header"));
    this.onDidUpdate();
  }
}
