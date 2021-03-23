customElements.define(
  "idn-data-province",
  class IdnDataProvince extends HTMLElement {
    constructor() {
      super();
      this._shadowDOM = this.attachShadow({ mode: "open" });
    }

    set covid(covid) {
      this._covid = covid;
      this.render();
    }

    numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
      const data = this._covid
        .map((e) => {
          return `
            <tr>
                <td></td>
                <td>${e.provinsi}</td>
                <td>${this.numberWithCommas(e.kasus)}</td>
                <td>${this.numberWithCommas(e.sembuh)}</td>
                <td>${this.numberWithCommas(e.meninggal)}</td>
            </tr>
        `;
        })
        .join("");

      this._shadowDOM.innerHTML = `
            <style>
              table{
                width : 100%;
                height : 100%;
                border: 1px solid #eaedf1;
                border-collapse : collapse;
                counter-reset: serial-number;
                white-space : nowrap;
              }

              tbody tr:hover{
                background-color : #f2f3f9;
              }

              th{
                font-size: 0.875rem;
                font-weight : 500;
                text-align : left;
                padding : 0.75rem 0.5rem;
              }

              td{
                font-size : 0.8125rem;
                padding: 0.75rem 0.5rem;
                border: 1px solid #eaedf1;
              }

              td:first-child::before{
                counter-increment: serial-number;
                content: counter(serial-number);
              }

              td:nth-child(2){
                text-transform: lowercase;
                text-transform: capitalize;
              }

              tbody tr:first-child td{
                border-top : 0;
              }
            </style>

            <table>
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>PROVINSI</th>
                        <th>POSITIF</th>
                        <th>SEMBUH</th>
                        <th>MENINGGAL</th>
                    </tr>
                </thead>
                <tbody>
                    ${data}
                </tbody>
            </table>
        `;
    }
  }
);
