let monthEl = document.querySelector(".date h1");
let fullDateEl = document.querySelector(".date p");
let daysEl = document.querySelector(".days");

let monthIndex = new Date().getMonth();
let lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
let firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerText = months[monthIndex];
fullDateEl.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty">${i}</div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if ((i = new Date().getDate())) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;
