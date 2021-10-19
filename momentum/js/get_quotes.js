import { getRandomNum } from "./util.js";

const quotes = 'js/data.json',
  quote = document.querySelector('.quote'),
  author = document.querySelector('.author'),
  btnQuote = document.querySelector('.change-quote');

async function getQuotes() {
  const res = await fetch(quotes);
  const data = await res.json();
  const index = getRandomNum(0, data.length - 1);
  quote.textContent = data[index].text;
  author.textContent = data[index].author;
}

btnQuote.addEventListener('click', getQuotes);

export { getQuotes };