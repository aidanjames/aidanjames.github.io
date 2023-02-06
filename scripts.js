const URL =
  "https://sheets.googleapis.com/v4/spreadsheets/1R6Jq_46UkAQ27lEESnZGn0eLEDvLz-JKWaujPOhMCo0/values/LEADERBOARD!H2:N4?key=AIzaSyA-4MMMlX2toMlimwQwckyqAitapVAMlTM";
const tableData = document.querySelector("#dynamic-content");

setInterval(refreshLeaderboard, 30000);

function refreshLeaderboard() {
  var count = 1;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      clearTable();
      data["values"].forEach((record) => {
        tableData.appendChild(createTableRow(record));
      });
      const currentDate = Date.now();
      const dateFormatted = new Date(currentDate).toUTCString();
      document.querySelector(
        "#updated-time"
      ).innerHTML = `Last updated: ${dateFormatted}`;
    });
}

function createTableRow(record) {
  // Create the row
  const tableRow = document.createElement("tr");
  // Create the table header column
  const headerDiv = document.createElement("th");
  headerDiv.setAttribute("scope", "row");
  const headerText = document.createTextNode(record[0]);
  headerDiv.appendChild(headerText);
  // Add th to tr
  tableRow.appendChild(headerDiv);
  // Iterate through remaining items and add td elements and add to tr
  for (let i = 1; i < record.length; i += 1) {
    let newRow = document.createElement("td");
    const rowText = document.createTextNode(record[i]);
    newRow.appendChild(rowText);
    tableRow.appendChild(newRow);
  }
  return tableRow;
}

function clearTable() {
  const tableLoadingPlaceholder = Array.from(
    document.querySelector("#dynamic-content").children
  );
  tableLoadingPlaceholder.forEach((element) => {
    element.remove();
  });
}

refreshLeaderboard();
