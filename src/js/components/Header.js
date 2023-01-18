import Router from "../router.js";
import $ from "../selector.js";

export default class Header {
  constructor(dom) {
    this.dom = dom;
  }

  backButton() {
    const isBackOn = window.location.pathname == Router.instance.pages.main.url ? false : true;
    /// 뒤로 이동할 페이지가 있다면 뒤로가기 버튼을 보여준다.
    if (isBackOn) {
      return `<button id="back-btn" class=""><</button>`;
    }

    return `<div></div>`;
  }

  render() {
    this.dom.innerHTML = `<header class='header'>
    ${this.backButton()} <span class="title">HAPPY 2023</span></header>`;

    const $btn = $("#back-btn");
    if ($btn)
      $btn.addEventListener("click", () => {
        Router.instance.back(Router.instance.pages.main.url);
      });
  }
}
