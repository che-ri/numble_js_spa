import Router from "../router.js";
import $ from "../selector.js";
import icon from "../../constants/icon.js";

export default class Header {
  constructor(dom) {
    this.dom = dom;
    this.onInit();
  }

  onInit() {
    // 최초 진입
    console.log("init");
    this.dom.innerHTML = this.template();
    this.onReady();
  }

  onReady() {
    //DOM 업데이트 이후
    console.log("ready");

    const $btn = $("#back-btn");
    if ($btn)
      $btn.addEventListener("click", () => {
        Router.instance.back();
      });
  }

  onWillUpdate() {
    console.log("willUpdate");
  }

  onDidUpdate() {
    console.log("didUpdate");
  }

  template() {
    return `<header class='header'>
    ${this.backButton()} <span class="title">HAPPY 2023</span></header>`;
  }

  backButton() {
    const isBackOn = window.location.pathname == Router.instance.pages.main.url ? false : true;
    /// 뒤로 이동할 페이지가 있다면 뒤로가기 버튼을 보여준다.
    if (isBackOn) {
      return `<button id="back-btn" class="btn">${icon.back}</button>`;
    }

    return `<div></div>`;
  }

  render() {
    this.onWillUpdate();
    this.dom.innerHTML = this.template();
    this.onDidUpdate();
  }
}
