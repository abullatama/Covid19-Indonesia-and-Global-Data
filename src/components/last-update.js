class LastUpdate extends HTMLElement {
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
    p {
        font-size: 0.8125rem;
        font-weight: 400;
        color: black;
        margin-top: 0;
    }
    </style>

    <p>Update terakhir : ${this._covid.date} ${this._covid.time} WIB</p>
    `;
  }
}

customElements.define("last-update", LastUpdate);
