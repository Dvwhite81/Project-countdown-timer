const topContainer = document.getElementById("top-container");
const dateContainer = document.getElementById("date-container");
const timeContainer = document.getElementById("time-container");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");


const hideDisplays = () => {
  topContainer.style.display = "none";
  dateContainer.style.display = "none";
  timeContainer.style.display = "none";
};

const showDisplay = (container) => {
  topContainer.style.display = "grid";
  container.style.display = "grid";
};

const resetInputs = () => {
  dateInput.value = '';
  timeInput.value = '';
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', (e) => handleInput(e));

const handleInput = (e) => {
  e.preventDefault();
  const dateValue = dateInput.value;
  const timeValue = timeInput.value;

  if (!dateValue && !timeValue) {
    // nothing
  }
  else if (dateValue && timeValue) {

  }
  else if (!dateValue) handleTimeInput(timeValue);
  else if (!timeValue) handleDateInput(dateValue);
}

const handleBoth = () => {
  
}

const handleDateInput = (e) => {
  const dateInput = document.getElementById("date-input");
  const value = dateInput.value;
  if (value) {
    getDateLeft(value);
  }
};

const handleTimeInput = (e) => {
  const timeInput = document.getElementById("time-input");
  const value = timeInput.value;
  if (value) {
    setInterval(getTimeLeft, 1000);
  }
};
