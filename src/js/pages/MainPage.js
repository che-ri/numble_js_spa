import Header from "../components/Header.js";
import icon from "../../constants/icon.js";
import Router from "../router.js";
import $ from "../selector.js";
import api from "../../api/index.js";

export default class MainPage {
  constructor(dom) {
    this.dom = dom;
    this.posts = [];
    this.onInit();
    this.onReady();
  }

  onInit() {
    // 최초 진입
    console.log("init");
    this.dom.innerHTML = this.template();
    new Header($("#header"));
  }

  onReady = async () => {
    //DOM 업데이트 이후
    console.log("ready");

    try {
      const response = await api.getPosts();

      if (response.data.code !== 200) throw Error();
      this.posts = response.data.data.posts;
      this.render();
      $("#go-write-btn").addEventListener("click", () => {
        Router.instance.push(`/detail/3`);
      });
    } catch (e) {}
  };

  onWillUpdate() {
    console.log("willUpdate");
  }

  onDidUpdate() {
    console.log("didUpdate");
  }

  card(post) {
    return `<div class="card">
    <img class="card-img" loading="lazy" src="${post.image}"/>
    <div class="card-text-box">
      <strong class="body1">${post.title}</strong>
      <span class="body2 ellipsis">${post.content}</span>
    </div>
    </div>`;
  }

  template() {
    return `<div>
      <div id="header"></div>
        <button id="go-write-btn" class="btn main-btn">${
          icon.write
        }<span class="main-btn-text body1">새 글 작성하기</span></button>
      <div class="cards-container"><div class="cards">${this.posts.reduce(
        (acc, cur) => (acc += this.card(cur)),
        ""
      )}</div></div>
    </div>`;
  }

  render() {
    this.onWillUpdate();
    this.dom.innerHTML = this.template();
    new Header($("#header"));
    this.onDidUpdate();
  }
}
