import "../css/style.css";

import $ from "./selector.js";
import Router from "./router.js";

export default function render() {
  const $root = $("#root");
  $root.innerHTML = `
  <div id="router"></div>
  `;
  new Router($("#router")).render();
}

render();
