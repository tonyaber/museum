const getRandomNum = (min, max, randomNumber) => {
  return Math.round(Math.random() * (max - min) + min);
}

const getTimeOfDay = (date) => {
  const hours = date.getHours();
  return Math.floor(hours / 6);
}

export { getRandomNum, getTimeOfDay };