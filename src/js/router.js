import DetailPage from "./pages/DetailPage.js";
import MainPage from "./pages/MainPage.js";

export default class Router {
  static instance;

  constructor(dom) {
    if (Router.instance) return Router.instance;
    this.instance = this;
    this.dom = dom;
    this.pages = [
      { url: "/", element: new MainPage(dom) },
      { url: "/detail", element: new DetailPage(dom) },
    ];
    this.currentPage = this.pages[0];
  }

  render() {
    this.currentPage.element.render();
  }
}
