import routes from "../routes/routes.js";
import UrlParser from "../routes/url-parser.js";

const App = {
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    document.querySelector("#mainContent").innerHTML = await page.render();
    await page.afterRender();
  },
};

export default App;
