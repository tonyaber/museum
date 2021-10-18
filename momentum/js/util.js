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

export { getRandomNum, getTimeOfDay, formatTime };