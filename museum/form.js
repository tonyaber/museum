const buttonBuy = document.querySelector('.tickets_section_sale_button'),
  form = document.querySelector('.form_tickets'),
  closeBtn = document.querySelector('.form_tickets_closed');

buttonBuy.addEventListener('click', () => {
  form.classList.remove('hidden');
  form.classList.add('visible')
})

form.addEventListener('click', (evt) => {
  if (evt.target === form) {
    form.classList.add('hidden');
    form.classList.remove('visible');
  }  
})

closeBtn.addEventListener('click', () => {
  form.classList.add('hidden');
  form.classList.remove('visible');
})