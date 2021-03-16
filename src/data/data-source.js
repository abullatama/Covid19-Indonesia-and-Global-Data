import "../components/data-positive";
import "../components/data-recovered";
import "../components/data-deaths";
import "../components/last-update";
import "../components/idn-confirmed";

const DataSource = () => {
  const globalUrl = fetch("https://covid19.mathdro.id/api");
  const idnUrl = fetch("https://covid19.mathdro.id/api/countries/IDN");

  const getAll = () => {
    Promise.all([globalUrl, idnUrl])
      .then((response) => {
        return Promise.all(response.map((values) => values.json()));
      })
      .then(([global, idn]) => {
        renderAllData(
          global.confirmed,
          global.recovered,
          global.deaths,
          global.lastUpdate,
          idn.confirmed
        );
      })
      .catch((error) => showResponseMessage(error));
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const indoDateFormat = (e) => {
    const bulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    let date = new Date(e);
    let tanggal = date.getDate();
    let _bulan = bulan[date.getMonth()];
    let tahun = date.getFullYear();

    const newDate = tanggal + " " + _bulan + " " + tahun;
    return newDate;
  };

  const dateModified = (e) => {
    let arr = e.split("T");
    const myDate = {
      date: indoDateFormat(arr[0]),
      time: arr[1].split(".").shift(),
    };
    return myDate;
  };

  const renderAllData = (confirmed, recovered, deaths, date, idn) => {
    const dataPositive = document.querySelector("data-positive");
    const dataRecovered = document.querySelector("data-recovered");
    const dataDeaths = document.querySelector("data-deaths");
    const idnConfirmed = document.querySelector("idn-confirmed");
    const lastUpdate = document.querySelector("last-update");
    dataPositive.covid = numberWithCommas(confirmed.value);
    dataRecovered.covid = numberWithCommas(recovered.value);
    dataDeaths.covid = numberWithCommas(deaths.value);
    lastUpdate.covid = dateModified(date);
    idnConfirmed.covid = numberWithCommas(idn.value);
  };

  const showResponseMessage = (message = "check your internet connection") => {
    alert(message);
  };

  getAll();
};

export default DataSource;
