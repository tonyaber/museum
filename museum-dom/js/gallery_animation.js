const sliderImages = document.querySelectorAll('.gallery_list_inner img');
const parentSlider = document.querySelector('.gallery_list');
function debounce (func, wait = 20, immediate = true) {
  let timeout;
  return function(){
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }
}
const checkSlide = (evt) => {
  sliderImages.forEach(image => {
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    const imageBottom = parentSlider.offsetTop + 1900;
  
    const isHalfShown = slideInAt > parentSlider.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
  
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
  
    } else {
      image.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));