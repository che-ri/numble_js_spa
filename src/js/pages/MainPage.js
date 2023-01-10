export default class MainPage {
  constructor(dom) {
    this.dom = dom;
  }

  render() {
    this.dom.innerHTML = `<h1>메인페이지</h1>`;
  }
}
