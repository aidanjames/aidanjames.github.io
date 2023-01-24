const URL =
  "https://sheets.googleapis.com/v4/spreadsheets/1R6Jq_46UkAQ27lEESnZGn0eLEDvLz-JKWaujPOhMCo0/values/LEADERBOARD!H2:N4?key=AIzaSyA-4MMMlX2toMlimwQwckyqAitapVAMlTM";
// const refreshButton = document.querySelector("#refresh-table-button");
const name1 = document.querySelector("#name-1");
const name2 = document.querySelector("#name-2");
const name3 = document.querySelector("#name-3");
const total1 = document.querySelector("#total-1");
const total2 = document.querySelector("#total-2");
const total3 = document.querySelector("#total-3");
const rounds1 = document.querySelector("#rounds-1");
const rounds2 = document.querySelector("#rounds-2");
const rounds3 = document.querySelector("#rounds-3");
const t51 = document.querySelector("#t5-1");
const t52 = document.querySelector("#t5-2");
const t53 = document.querySelector("#t5-3");
const avgAll1 = document.querySelector("#avg-all-1");
const avgAll2 = document.querySelector("#avg-all-2");
const avgAll3 = document.querySelector("#avg-all-3");
const avgT51 = document.querySelector("#avg-t5-1");
const avgT52 = document.querySelector("#avg-t5-2");
const avgT53 = document.querySelector("#avg-t5-3");
const updatedTime = document.querySelector("#updated-time")

// refreshButton.addEventListener("click", refreshLeaderboard);

setInterval(refreshLeaderboard, 30000); 

function refreshLeaderboard() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const leader = data["values"][0];
      const runnerUp = data["values"][1];
      const loser = data["values"][2];
      name1.innerHTML = leader[1];
      name2.innerHTML = runnerUp[1];
      name3.innerHTML = loser[1];
      total1.innerHTML = leader[2];
      total2.innerHTML = runnerUp[2];
      total3.innerHTML = loser[2];
      rounds1.innerHTML = leader[3];
      rounds2.innerHTML = runnerUp[3];
      rounds3.innerHTML = loser[3];
      t51.innerHTML = leader[4];
      t52.innerHTML = runnerUp[4];
      t53.innerHTML = loser[4];
      avgAll1.innerHTML = leader[5];
      avgAll2.innerHTML = runnerUp[5];
      avgAll3.innerHTML = loser[5];
      avgT51.innerHTML = leader[6];
      avgT52.innerHTML = runnerUp[6];
      avgT53.innerHTML = loser[6];
      const currentDate = Date.now()
      console.log(currentDate)
      const dateFormatted = new Date(currentDate).toUTCString()
      console.log(dateFormatted)
      updatedTime.innerHTML = `Last updated: ${dateFormatted}`
    });
}

refreshLeaderboard();