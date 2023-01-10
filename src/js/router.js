import DetailPage from "./pages/DetailPage.js";
import MainPage from "./pages/MainPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";

export const pages = {
  main: { url: "/", element: MainPage },
  detail: { url: "/detail", element: DetailPage },
  notFound: { url: "/404", element: NotFoundPage },
};

export default class Router {
  static instance;

  constructor(dom) {
    if (!Router.instance) Router.instance = this;

    this.dom = dom;
    this.pages = Object.entries(pages).reduce((acc, [key, value]) => {
      acc[key] = { ...value, element: new value.element(dom) };
      return acc;
    }, {});
    this.currentPage = this.pages[0];
  }

  push(url = "", state = {}, title) {
    window.history.pushState(state, title, url);
    this.render(url);
  }

  render(url = this.pages.main.url) {
    const findPage = Object.values(this.pages).find((page) => page.url === url);
    this.currentPage = findPage ?? this.pages.notFound.element;
    this.currentPage.element.render();
  }
}
