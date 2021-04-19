import "../components/data-positive";
import "../components/data-recovered";
import "../components/data-deaths";
import "../components/last-update";
import "../components/idn-confirmed";
import "../components/idn-recovered";
import "../components/idn-deaths";
import "../components/idn-data-province";
import "../components/global-countries";
import "chart.js";

const DataSource = () => {
  const globalUrl = fetch("https://covid19.mathdro.id/api");
  const idnUrl = fetch("https://covid19.mathdro.id/api/countries/IDN");
  const globalCountries = fetch("https://api.covid19api.com/summary");
  const idnPerMonthUrl = fetch(
    "https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian"
  );
  const idnProvince = fetch(
    "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi"
  );

  const getAll = () => {
    Promise.all([
      globalUrl,
      idnUrl,
      idnPerMonthUrl,
      idnProvince,
      globalCountries,
    ])
      .then((response) => {
        return Promise.all(response.map((values) => values.json()));
      })
      .then(([global, idn, idnPerMonth, idnProvince, globalCountries]) => {
        renderAllData(
          global.confirmed,
          global.recovered,
          global.deaths,
          global.lastUpdate,
          idn.recovered,
          idn.deaths,
          idnProvince,
          globalCountries.Countries
        );
        myChart(idnPerMonth);
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

  const renderAllData = (
    confirmed,
    recovered,
    deaths,
    date,
    IDrecovered,
    IDDeaths,
    idnProvince,
    _globalCountries
  ) => {
    const dataPositive = document.querySelector("data-positive");
    const dataRecovered = document.querySelector("data-recovered");
    const dataDeaths = document.querySelector("data-deaths");
    const idnRecovered = document.querySelector("idn-recovered");
    const idnDeaths = document.querySelector("idn-deaths");
    const lastUpdate = document.querySelector("last-update");
    const dataProvince = document.querySelector("idn-data-province");
    const globalCountries = document.querySelector("global-countries");
    dataPositive.covid = numberWithCommas(confirmed.value);
    dataRecovered.covid = numberWithCommas(recovered.value);
    dataDeaths.covid = numberWithCommas(deaths.value);
    lastUpdate.covid = dateModified(date);
    idnRecovered.covid = numberWithCommas(IDrecovered.value);
    idnDeaths.covid = numberWithCommas(IDDeaths.value);
    dataProvince.covid = idnProvince;
    globalCountries.covid = _globalCountries;
  };

  const myChart = (e) => {
    let date = null;
    let total = 0;
    const dateArr = [];
    const valueArr = [];

    for (let i = 0; i < e.length; i++) {
      total += e[i].positif;
      if (i == 0 || i % 31 == 0) {
        date = dateModified(e[i].tanggal);
        dateArr.push(date.date);
        valueArr.push(total);
        total = 0;
      }
    }

    const ctx = document.getElementById("myChart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",

      data: {
        labels: dateArr,
        datasets: [
          {
            label: "Positif",
            backgroundColor: "rgba(55, 99, 132, 0.1)",
            borderColor: "rgb(255, 99, 132)",
            data: valueArr,
          },
        ],
      },

      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                maxTicksLimit: 7,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  };

  const showResponseMessage = (message = "check your internet connection") => {
    alert(message);
  };

  getAll();
};

export default DataSource;
