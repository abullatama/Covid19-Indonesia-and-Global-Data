import DataSource from "../../../data/data-source";

const dashboard = {
  async render() {
    DataSource();
    return `
        <section class="title">
            <br />
            <h1>KANAL COVID-19</h1>
            <p class="subtitle">Coronavirus Indonesia & Global Live Data</p>
        </section>

        <section class="grid container">
            <div class="grid__item">
                <div class="grid__content">
                    <div class="grid__text">
                    <p>TOTAL POSITIF</p>
                    <data-positive></data-positive>
                    <p>ORANG</p>
                    </div>
                    <div class="grid__emoji">
                    <img
                        src="./assets/images/sad.png"
                        alt="sad"
                        width="50"
                        height="50"
                    />
                    </div>
                </div>
            </div>
            <div class="grid__item">
                <div class="grid__content">
                    <div class="grid__text">
                    <p>TOTAL SEMBUH</p>
                    <data-recovered></data-recovered>
                    <p>ORANG</p>
                    </div>
                    <div class="grid__emoji">
                    <img
                        src="./assets/images/happy.png"
                        alt="sad"
                        width="50"
                        height="50"
                    />
                    </div>
                </div>
            </div>
            <div class="grid__item">
                <div class="grid__content">
                    <div class="grid__text">
                    <p>TOTAL MENINGGAL</p>
                    <data-deaths></data-deaths>
                    <p>ORANG</p>
                    </div>
                    <div class="grid__emoji">
                    <img
                        src="./assets/images/cry.png"
                        alt="sad"
                        width="50"
                        height="50"
                    />
                    </div>
                </div>
            </div>
            <div class="grid__item">
                <div class="grid__content">
                    <div class="grid__text">
                    <p class="value">INDONESIA</p>
                    <idn-confirmed class="white"></idn-confirmed>
                    <p>POSITIF</p>
                    </div>
                    <div class="grid__emoji">
                    <img
                        src="./assets/images/indonesia.png"
                        alt="sad"
                        width="50"
                        height="50"
                    />
                    </div>
                </div>
            </div>
            <div class="last-update">
                <last-update></last-update>
            </div>
        </section>

        <section class="container">
            <div class="card">
                <div class="card__title">
                    <h3>Statistik Kasus Coronavirus di Indonesia</h3>
                </div>
                <div class="card__body">
                    <div class="chart">
                        <canvas id="myChart" height="200"></canvas>
                    </div>
                    <div class="idnData flex flex-jc-sb">
                        <div class="idnData__item">
                            <h5>POSITIF</h5>
                                <idn-confirmed class="black"></idn-confirmed>
                            <p>ORANG</p>
                        </div>
                        <div class="idnData__item">
                            <h5>SEMBUH</h5>
                                <idn-recovered></idn-recovered>
                            <p>ORANG</p>
                        </div>
                        <div class="idnData__item">
                            <h5>MENINGGAL</h5>
                                <idn-deaths></idn-deaths>
                            <p>ORANG</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="card">
            <div class="card__title">
                <h3>Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h3>
            </div>
            <div class="card__body">
                <div class="responsive">
                <idn-data-province></idn-data-province>
                </div>
            </div>
            </div>
            <div class="card">
            <div class="card__title">
                <h3>Kasus Coronavirus Global</h3>
            </div>
            <div class="card__body">
                <div class="responsive">
                <global-countries></global-countries>
                </div>
            </div>
            </div>
        </section>

        <section class="article container">
            <a href="https://www.unicef.org/indonesia/id/coronavirus">
            <div class="article__item">
                <h4>
                Novel coronavirus (COVID-19): Hal-hal yang perlu Anda ketahui
                </h4>
                <p>Unicef Indonesia</p>
            </div>
            </a>
            <a
            href="https://www.kompas.com/tren/read/2020/03/03/183500265/infografik-daftar-100-rumah-sakit-rujukan-penanganan-virus-corona"
            >
            <div class="article__item">
                <h4>Daftar 100 Rumah Sakit Rujukan Penanganan Virus Corona</h4>
                <p>Kompas</p>
            </div>
            </a>
            <a href="https://infeksiemerging.kemkes.go.id/">
            <div class="article__item">
                <h4>Media Informasi Resmi Penyakit Infeksi Emerging</h4>
                <p>Kementrian Kesehatan</p>
            </div>
            </a>
            <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            >
            <div class="article__item">
                <h4>Coronavirus Disease (COVID-19) Advice for The Public</h4>
                <p>WHO</p>
            </div>
            </a>
        </section>
        `;
  },

  async afterRender() {
    console.log("afterRender() function for dashboard is running!");
  },
};

export default dashboard;
