import Router, { pages } from "../router.js";
import $ from "../selector.js";

export default class MainPage {
  constructor(dom) {
    this.dom = dom;
  }

  render() {
    this.dom.innerHTML = `<h1>메인페이지</h1> <button id="to-detail">이동!</button>`;

    $("#to-detail").addEventListener("click", () => {
      Router.instance.push("/detail");
    });
  }
}
