import DataSource from "../../data/data-source";

const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  _urlSplitter(url) {
    const urlSplits = url.split("/");
    return {
      resource: urlSplits[1] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    if (splitedUrl.resource === "dashboard") {
      DataSource();
    }
    return splitedUrl.resource ? `/${splitedUrl.resource}` : "/";
  },
};

export default UrlParser;
