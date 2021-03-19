customElements.define(
  "idn-recovered",
  class idnRecovered extends HTMLElement {
    constructor() {
      super();
      this._shadowDOM = this.attachShadow({ mode: "open" });
    }

    set covid(covid) {
      this._covid = covid;
      this.render();
    }

    render() {
      this._shadowDOM.innerHTML = `
        <style>
        h1 {
            font-size: 1.5rem;
            margin: 0;
            margin-bottom:0.25rem;
            color:black;
        }
      </style>

      <h1>${this._covid}</h1>
        `;
    }
  }
);
