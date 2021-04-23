import "regenerator-runtime/runtime.js";
import "./styles/css/style.css";
import "./styles/js/style.js";
import feather from "feather-icons/dist/feather";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./script/views/app";
import DataSource from "./data/data-source";

feather.replace({ class: "foo bar", width: 20, height: 13 });

window.addEventListener("hashchange", () => {
  App.renderPage();
});

window.addEventListener("load", () => {
  App.renderPage();
});
