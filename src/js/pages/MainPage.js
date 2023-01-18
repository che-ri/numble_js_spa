import Header from "../components/Header.js";
import Router from "../router.js";
import $ from "../selector.js";

export default class MainPage {
  constructor(dom) {
    this.dom = dom;
  }

  render() {
    this.dom.innerHTML = `<div><div id="header"></div><h1>메인페이지</h1><button id="go-write-btn">디테일페이지 테스트</button><div>`;
    new Header($("#header")).render();

    $("#go-write-btn").addEventListener("click", () => {
      Router.instance.push("/detail/3");
    });
  }
}
