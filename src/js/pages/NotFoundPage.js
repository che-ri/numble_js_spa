export default class NotFoundPage {
  constructor(dom) {
    this.dom = dom;
  }

  render() {
    this.dom.innerHTML = `<h1>페이지를 찾을 수 없습니다.</h1>`;
  }
}
