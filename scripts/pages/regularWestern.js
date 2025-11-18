import { createCalendar } from "../functions/createCalendar.js";
import { createTable } from "../functions/createTable.js";
import { westernRegularSeason, westernStatsRegSeason } from "../data/data2.js";

const tableWestern = document.getElementById("tableWestern");
let chartInit;

// --- helpers to read/save standings in localStorage ---
function getWesternData() {
  const stored = localStorage.getItem("dataWestern");
  return stored ? JSON.parse(stored) : [...westernRegularSeason];
}

function setWesternData(data) {
  localStorage.setItem("dataWestern", JSON.stringify(data));
}

// --- Chart ---
function createChart(data) {
  const ctx = document.getElementById("myChart").getContext("2d");

  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["POINTS", "3PT MADE", "HOME WINS", "AWAY WINS"],
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

// --- Update W/L and reorder table ---
function updateResult(teamName, resultType) {
  const data = getWesternData();

  const index = data.findIndex((t) => t.team === teamName);
  if (index === -1) {
    console.warn("Team not found in westernRegularSeason:", teamName);
    return;
  }

  if (resultType === "W") data[index].w += 1;
  if (resultType === "L") data[index].l += 1;

  data[index].g = data[index].w + data[index].l;

  // Sort by wins desc, then losses asc
  data.sort((a, b) => {
    if (b.w !== a.w) return b.w - a.w;
    return a.l - b.l;
  });

  setWesternData(data);
  createTable(data, tableWestern); // re-render table
}

// --- Chart buttons under "Teams Stats" ---
function attachChartButtons() {
  const btnsChart = document.querySelectorAll(".btn-team");

  btnsChart.forEach((btn, i) => {
    btn.onclick = () => {
      const stats = westernStatsRegSeason[i];
      const dataChart = [
        stats.points,
        stats.threePoints,
        stats.homeWins,
        stats.awayWins,
      ];

      if (chartInit) chartInit.destroy();
      chartInit = createChart(dataChart);
    };
  });
}

// --- Wire the score form (selects + inputs + Submit) ---
function attachScoreForm() {
  const inputGroup = document.querySelector(".input-group");
  if (!inputGroup) return;

  const selects = inputGroup.querySelectorAll(".form-select");
  const inputs = inputGroup.querySelectorAll('input.form-control');
  const submitBtn = inputGroup.querySelector(".btn-outline-danger");

  if (selects.length < 2 || inputs.length < 2 || !submitBtn) return;

  const homeSelect = selects[0];
  const awaySelect = selects[1];
  const homeInput = inputs[0];
  const awayInput = inputs[1];

  submitBtn.addEventListener("click", () => {
    const homeTeam = homeSelect.value;
    const awayTeam = awaySelect.value;
    const homeScore = parseInt(homeInput.value, 10);
    const awayScore = parseInt(awayInput.value, 10);

    if (
      !homeTeam ||
      !awayTeam ||
      homeTeam === "Select a Team" ||
      awayTeam === "Select a Team"
    ) {
      alert("Please select both teams.");
      return;
    }

    if (homeTeam === awayTeam) {
      alert("Home and Away team must be different.");
      return;
    }

    if (isNaN(homeScore) || isNaN(awayScore)) {
      alert("Please enter valid scores for both teams.");
      return;
    }

    // Decide winner/loser and update standings
    if (homeScore > awayScore) {
      updateResult(homeTeam, "W");
      updateResult(awayTeam, "L");
    } else if (awayScore > homeScore) {
      updateResult(awayTeam, "W");
      updateResult(homeTeam, "L");
    } else {
      alert("You entered a tie. This demo only supports win/loss.");
      return;
    }

    // Clear scores
    homeInput.value = "";
    awayInput.value = "";

    location.reload();

    // Recreate chart for the first team, so user sees something fresh
    const currentData = getWesternData();
    const firstTeam = currentData[0];
    const statsIndex = westernStatsRegSeason.findIndex(
      (t) => t.team === firstTeam.team
    );
    if (statsIndex !== -1) {
      const stats = westernStatsRegSeason[statsIndex];
      const dataChart = [
        stats.points,
        stats.threePoints,
        stats.homeWins,
        stats.awayWins,
      ];
      if (chartInit) chartInit.destroy();
      chartInit = createChart(dataChart);
    }
  });
}

// --- Init ---
function app() {
  if (!localStorage.getItem("dataWestern")) {
    setWesternData(westernRegularSeason);
  }

  const data = getWesternData();

  // build standings table
  createTable(data, tableWestern);

  // initial chart (first team)
  const initialStats = westernStatsRegSeason[0];
  chartInit = createChart([
    initialStats.points,
    initialStats.threePoints,
    initialStats.homeWins,
    initialStats.awayWins,
  ]);

  createCalendar();
  attachChartButtons();
  attachScoreForm();
}

window.addEventListener("load", app);
