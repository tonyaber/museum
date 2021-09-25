const animationTime = 4,
  scrollBy = 30;

document.querySelectorAll('.header_navigation a[href*="#"').forEach(anchor => {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();

    const anchorY = document.querySelector(anchor.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    const scroll = setInterval(() => {
      if (scrollBy >= window.pageYOffset - anchorY + 30 && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      }
      else if (scrollBy <= window.pageYOffset - anchorY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, -scrollBy);
      }
      else {
        clearInterval(scroll);
      }
    }, animationTime);
  })
});

document.querySelectorAll('.footer_navigation a[href*="#"').forEach(anchor => {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();

    const anchorY = document.querySelector(anchor.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    const scroll = setInterval(() => {
      if (scrollBy >= window.pageYOffset - anchorY + 30 && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      }
      else if (scrollBy <= window.pageYOffset - anchorY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, -scrollBy);
      }
      else {
        clearInterval(scroll);
      }
    }, animationTime);
  })
});