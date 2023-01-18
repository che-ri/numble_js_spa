import Header from "../components/Header.js";
import $ from "../selector.js";

export default class DetailPage {
  constructor(dom) {
    this.dom = dom;
  }

  render() {
    this.dom.innerHTML = `<div><div id="header"></div><h1>상세페이지</h1><button id="go-write-btn">새 글 작성하기</button><div>`;
    new Header($("#header")).render();
  }
}
