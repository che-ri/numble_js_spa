import Header from "../components/Header.js";
import icon from "../../constants/icon.js";
import Router from "../router.js";
import $ from "../selector.js";

export default class MainPage {
  constructor(dom) {
    this.dom = dom;
  }

  init() {
    $("#go-write-btn").addEventListener("click", () => {
      Router.instance.push(Router.instance.pages.write.url);
    });
  }

  card() {
    return `<div class="card">
    <img class="card-img" loading="lazy"/>
    <div class="card-text-box">
      <strong class="body1">신년 계획</strong>
      <span class="body2 ellipsis">2022년 계획 세우셨나요?</span>
    </div>
    </div>`;
  }

  template() {
    return `<div>
      <div id="header"></div>
        <button id="go-write-btn" class="btn main-btn">${
          icon.write
        }<span class="main-btn-text body1">새 글 작성하기</span></button>
      <div class="cards-container"><div class="cards">${this.card()}</div></div>
    </div>`;
  }

  render() {
    this.dom.innerHTML = this.template();
    new Header($("#header")).render();
    this.init();
  }
}
