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

  onReady() {
    //dom이 업데이트된 이후
    console.log("ready");

    $("#go-home-btn").addEventListener("click", () => {
      Router.instance.push(`/`);
    });
  }

  onWillUpdate() {
    console.log("willUpdate");
  }

  onDidUpdate() {
    console.log("didUpdate");
  }

  template() {
    return `<div><div id="header"></div><h1>상세페이지</h1><button id="go-home-btn">홈</button><div>`;
  }

  render() {
    this.onWillUpdate();
    this.dom.innerHTML = this.template();
    new Header($("#header"));
    this.onDidUpdate();
  }
}
