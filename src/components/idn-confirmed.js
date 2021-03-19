class IdnConfirmed extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    fetch("https://covid19.mathdro.id/api/countries/IDN")
      .then((response) => {
        return response.json();
      })
      .then((e) => {
        const data = e.confirmed;
        this.covid = this.numberWithCommas(data.value);
      })
      .catch((error) => this.showResponseMessage(error));
  }

  showResponseMessage(message = "check your internet connection") {
    alert(message);
  }

  numberWithCommas(e) {
    return e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
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
            margin-bottom:0.25rem
        }
      </style>

      <h1 part="color">${this._covid}</h1>
      `;
  }
}

customElements.define("idn-confirmed", IdnConfirmed);
