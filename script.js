const topContainer = document.getElementById("top-container");
const dateContainer = document.getElementById("date-container");
const timeContainer = document.getElementById("time-container");

const hideDisplays = () => {
  topContainer.style.display = "none";
  dateContainer.style.display = "none";
  timeContainer.style.display = "none";
};

const showDisplay = (container) => {
  topContainer.style.display = "grid";
  container.style.display = "grid";
};

const addListeners = () => {
  const dateSubmit = document.getElementById("date-submit");
  const timeSubmit = document.getElementById("time-submit");
  dateSubmit.addEventListener("click", (e) => handleDateInput(e));
  timeSubmit.addEventListener("click", (e) => handleTimeInput(e));
};

const handleDateInput = (e) => {
  e.preventDefault();
  const dateInput = document.getElementById("date-input");
  const value = dateInput.value;
  if (value) {
    getDateLeft(value);
  }
};

const handleTimeInput = (e) => {
  e.preventDefault();
  const timeInput = document.getElementById("time-input");
  const value = timeInput.value;
  if (value) {
    setInterval(getTimeLeft, 1000);
  }
};

const getDateLeft = (value) => {
  const currentDate = new Date();
  const futureDate = new Date(value);
  const difference = new Date(futureDate - currentDate);
  const years = difference.getFullYear();
  const months = difference.getMonth() + 1;
  const days = difference.getDate();
  const yearsLeft = Number(Math.abs(years - 1970));
  const monthsLeft = Number(Math.abs(months - 1));
  const daysLeft = Number(Math.abs(days - 1));
  updateDateDisplay(yearsLeft, monthsLeft, daysLeft);
};

const getTimeLeft = (value) => {
  const timeInput = document.getElementById("time-input");
  const value = timeInput.value;
  const str = new Date().toDateString();
  let date = str.split(" ");
  date.shift();
  date = date.join(" ");
  const currentTime = new Date().getTime();
  const futureTime = new Date(`${date} ${value}`).getTime();
  const difference = futureTime - currentTime;
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  updateTimeDisplay(hours, minutes, seconds);
};

const updateDateDisplay = (years, months, days) => {
  const yearEl = document.getElementById("years-left");
  const monthEl = document.getElementById("months-left");
  const dayEl = document.getElementById("days-left");
  yearEl.textContent = "";
  monthEl.textContent = "";
  dayEl.textContent = "";
  yearEl.textContent = years;
  monthEl.textContent = months;
  dayEl.textContent = days;
  hideDisplays();
  showDisplay(dateContainer);
};

const updateTimeDisplay = (hours, minutes, seconds) => {
  const hourEl = document.getElementById("hours-left");
  const minuteEl = document.getElementById("minutes-left");
  const secondEl = document.getElementById("seconds-left");
  hourEl.textContent = "";
  minuteEl.textContent = "";
  secondEl.textContent = "";
  hourEl.textContent = hours;
  minuteEl.textContent = minutes;
  secondEl.textContent = seconds;
  hideDisplays();
  showDisplay(timeContainer);
};

hideDisplays();
addListeners();
