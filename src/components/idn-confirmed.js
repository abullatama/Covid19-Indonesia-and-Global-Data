class IdnConfirmed extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: "closed" });
  }

  set covid(covid) {
    this._covid = covid;
    this.render();
  }

  render() {
    this._shadowDOM.innerHTML = `
      <style>
        h1 {
            font-size: 1.75rem;
            color: white;
            margin: 0;
        }
      </style>

      <h1>${this._covid}</h1>
      `;
  }
}

customElements.define("idn-confirmed", IdnConfirmed);
