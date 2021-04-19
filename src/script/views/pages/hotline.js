import dataAgencies from "../../../data/hotline.json";

const hotline = {
  async render() {
    return `
        <section class="title">
          <br />
          <h1>Coronavirus Hotline Indonesia</h1>
          <p class="subtitle">Layanan darurat via telepon yang disediakan oleh Kemkes dan juga Pemprov DKI Jakarta</p>
        </section>
        <section class="hotline container" id="grid">
          
        </section>
        `;
  },

  async afterRender() {
    console.log("this work!");
    const grid = document.querySelector("#grid");
    dataAgencies.agencies.map((agency) => {
      grid.innerHTML += `
        <div class="hotline__item">
          <div class="logo">
            <img src="${agency.logo}" class="agency-logo" alt="agency logo" width="50" height="50"> 
          </div>
          <div class="text">
            <a href="tel:${agency.phoneNumber}">
              <h5> ${agency.phoneNumber} </h5>
            </a> 
            <p>${agency.name}</p> 
          </div>
        </div>
      `;
    });
  },
};

export default hotline;
