export default class DetailPage {
  constructor(dom) {
    this.dom = dom;
  }

  render() {
    this.dom.innerHTML = `<h1>상세페이지</h1>`;
  }
}
