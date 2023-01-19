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
  };

  template() {
    return `<div><div id="header"></div><h1>상세페이지</h1><button id="go-home-btn">홈</button><div>`;
  }

  render() {
    this.dom.innerHTML = this.template();
    new Header($("#header"));
  }
}
