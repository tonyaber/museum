const getRandomNum = (min, max, randomNumber) => {
  return Math.round(Math.random() * (max - min) + min);
}

const getTimeOfDay = (date) => {
  const hours = date.getHours();
  return Math.floor(hours / 6);
}

const formatTime = (time) => {
  let minutes = Math.floor((time / 60));
  let seconds = Math.floor(time - (minutes * 60));
  if (seconds < 10) {
    seconds = `0${seconds}`;
  };
  return `${minutes}:${seconds}`;
};

const setLocalStorage = (id, input) => {
  localStorage.setItem(id, input.value);
}

const getLocalStorage = (id, input) => {  
  if (localStorage.getItem(String(id))) {
    input.value = localStorage.getItem(id);
  }
}

export { getRandomNum, getTimeOfDay, formatTime, setLocalStorage, getLocalStorage};