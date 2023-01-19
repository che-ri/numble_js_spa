export default class NotFoundPage {
  constructor(dom) {
    this.dom = dom;
    this.onInit();
    this.onReady();
  }

  onInit() {
    // 최초 진입
    console.log("init");
    this.dom.innerHTML = this.template();
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
    return `<div><div id="header"></div><h1>페이지를 찾을 수 없습니다.</h1>`;
  }

  render() {
    this.onWillUpdate();
    this.dom.innerHTML = this.template();
    this.onDidUpdate();
  }
}
