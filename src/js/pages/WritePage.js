import Header from "../components/Header";
import $ from "../selector";

export default class WritePage {
  constructor(dom) {
    this.dom = dom;
    this.onInit();
    this.onReady();
  }

  onInit() {
    // 최초 진입
    console.log("init");
    this.dom.innerHTML = this.template();
    new Header($("#header"));
  }

  onReady() {
    //DOM 업데이트 이후
    console.log("ready");
  }

  onWillUpdate() {
    console.log("willUpdate");
  }

  onDidUpdate() {
    console.log("didUpdate");
  }

  template() {
    return `<div><div id="header"></div><h1>작성페이지</h1>`;
  }

  render() {
    this.onWillUpdate();
    this.dom.innerHTML = this.template();
    new Header($("#header"));
    this.onDidUpdate();
  }
}
