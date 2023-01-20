import { ROUTE_PARAMETER_REGEX, URL_FRAGMENT_REGEX } from "../constants/index.js";
import DetailPage from "./pages/DetailPage.js";
import MainPage from "./pages/MainPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import WritePage from "./pages/WritePage.js";

export const pages = {
  detail: { url: "/detail/:id", element: DetailPage },
  write: { url: "/write", element: WritePage },
  edit: { url: "/edit/:id", element: WritePage },
  notFound: { url: "/404", element: NotFoundPage },
  main: { url: "/", element: MainPage },
};

export default class Router {
  static instance;

  constructor(dom) {
    if (!Router.instance) Router.instance = this;

    this.dom = dom;
    this.current;
    this.pages = Object.entries(pages).reduce((acc, [key, value]) => {
      acc[key] = {
        ...value,
        // 정규식 추가
        regex: new RegExp(`^${value.url.replace(ROUTE_PARAMETER_REGEX, URL_FRAGMENT_REGEX).replace(/\//g, "\\/")}`),
      };
      return acc;
    }, {});

    window.addEventListener("DOMContentLoaded", () => {
      /// 문서 : https://developer.mozilla.org/ko/docs/Web/API/Window/DOMContentLoaded_event

      console.log("loaded!");
      this.render(window.location.pathname);
    });

    window.addEventListener("popstate", () => {
      /// 문서 : https://developer.mozilla.org/ko/docs/Web/API/Window/popstate_event

      console.log("pop!");
      this.render(window.location.pathname);
    });
  }

  push(url = "", state = {}, title) {
    window.history.pushState(state, title, url);
    this.render(url);
  }

  replace(url = "", state = {}, title) {
    window.history.replaceState(state, title, url);
    this.render(url);
  }

  back() {
    window.history.back();
  }

  render(url = "/") {
    const findPage = Object.values(this.pages).find((page) => url.match(page.regex));
    const renderPage = findPage ?? this.pages.notFound;

    this.current = { ...renderPage, params: _getParams(findPage.url, url, findPage.regex) };

    new renderPage.element(this.dom);
  }
}

function _getParams(path, url, regex) {
  const matches = url.match(regex);

  if (matches == null) return {};

  const paramValues = [];
  matches.shift();
  matches.forEach((paramValue, index) => {
    paramValues.push(paramValue);
  });

  let paramKeys = [];
  path.replace(ROUTE_PARAMETER_REGEX, (match, paramName) => {
    paramKeys.push(paramName);
  });

  return paramKeys.reduce((acc, cur, idx) => {
    acc[cur] = paramValues[idx];
    return acc;
  }, {});
}
