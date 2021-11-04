import { getRandomNum } from "./util.js";
import { QUOTES } from "./const.js";

const quote = document.querySelector('.quote'),
  author = document.querySelector('.author');

async function getQuotes(lang) {
  const res = await fetch(QUOTES[lang]);
  const data = await res.json();
  const index = getRandomNum(0, data.length - 1);
  quote.textContent = data[index].text;
  author.textContent = data[index].author;
}

export { getQuotes };