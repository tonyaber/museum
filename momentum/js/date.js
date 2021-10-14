const dateContainer = document.querySelector('.date');

const showDate = (date) => {
  const options = { weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = date.toLocaleDateString('ru-RU', options);
  dateContainer.textContent = currentDate;
}

export {showDate}