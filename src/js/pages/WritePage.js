import Router from "../router.js";

export default class WritePage {
  constructor(dom) {
    this.dom = dom;
  }

  render() {
    this.dom.innerHTML = `<div><div id="header"></div><h1>작성페이지</h1>`;
    Router.instance.render();
  }
}
