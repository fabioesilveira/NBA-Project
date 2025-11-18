import { createCalendar } from "../functions/createCalendar.js";
import { createTable } from "../functions/createTable.js";
import { easternRegularSeason, easternStatsRegSeason } from "../data/data2.js";

const tableEastern = document.getElementById("tableEastern");
let chartInit;

const btnsChart = document.querySelectorAll(".btn-team");
const selectHome = document.getElementById("select-home");
const selectAway = document.getElementById("select-away");
const inputHome = document.getElementById("input-home");
const inputAway = document.getElementById("input-away");
const btnSubmit = document.getElementById("btn-submit");

function createChart(data) {
  const ctx = document.getElementById("myChart").getContext("2d");

  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["POINTS", "3POINTS", "HOME WINS", "AWAY WINS"],
      datasets: [
        {
          label: "Regular Season",
          data,
          backgroundColor: "rgb(36, 36, 142)",
          borderWidth: 3,
          borderColor: "black",
          hoverBorderWidth: 4,
          hoverBorderColor: "red",
        },
      ],
    },
    options: {},
  });
}

function app() {
  // Initialize localStorage once
  if (!localStorage.getItem("dataEastern")) {
    localStorage.setItem("dataEastern", JSON.stringify(easternRegularSeason));
  }

  const data = JSON.parse(localStorage.getItem("dataEastern"));
  // Sort by wins (desc)
  const dataRanking = data.sort((a, b) => b.w - a.w);

  const dataChartInit = [
    easternStatsRegSeason[0].points,
    easternStatsRegSeason[0].threePoints,
    easternStatsRegSeason[0].homeWins,
    easternStatsRegSeason[0].awayWins,
  ];

  createTable(dataRanking, tableEastern);
  chartInit = createChart(dataChartInit);
  createCalendar();

  // Attach chart buttons after table & DOM are ready
  btnsChart.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const stats = easternStatsRegSeason[i];
      const dataChart = [
        stats.points,
        stats.threePoints,
        stats.homeWins,
        stats.awayWins,
      ];

      chartInit.destroy();
      chartInit = createChart(dataChart);
    });
  });
}

// ✅ Important: pass the function, don’t call it here
window.addEventListener("load", app);

// ---- Submit game result & refresh ----
btnSubmit.addEventListener("click", () => {
  // basic validations
  if (selectHome.value === selectAway.value) {
    return alert("Please, select different teams");
  }

  if (inputHome.value === inputAway.value) {
    return alert("Teams can't be tied up");
  }

  const homeScore = Number(inputHome.value);
  const awayScore = Number(inputAway.value);

  if (Number.isNaN(homeScore) || Number.isNaN(awayScore)) {
    return alert("Please enter valid numeric scores.");
  }

  const data = JSON.parse(localStorage.getItem("dataEastern"));

  data.forEach((team) => {
    // Home team
    if (selectHome.value === team.team) {
      team.g += 1;
      if (homeScore > awayScore) {
        team.w += 1;
      } else {
        team.l += 1;
      }
    }

    // Away team
    if (selectAway.value === team.team) {
      team.g += 1;
      if (awayScore > homeScore) {
        team.w += 1;
      } else {
        team.l += 1;
      }
    }
  });

  localStorage.setItem("dataEastern", JSON.stringify(data));

  // 🔁 Auto-refresh page so table + chart reload with new data
  window.location.reload();
});
