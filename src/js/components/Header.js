import Router from "../router.js";

export default class Header {
  constructor(dom) {
    this.dom = dom;
  }

  backButton() {
    /// 뒤로 이동할 페이지가 있다면 뒤로가기 버튼을 보여준다.
    if (window.history.length > 1) {
      return `<button id="back-btn" onclick="${() => Router.instance.back()}"><</button>`;
    }

    return `<div></div>`;
  }

  render() {
    this.dom.innerHTML = `<header class='header'>
    ${this.backButton()} <span class="title">HAPPY 2023</span></header>`;
  }
}
