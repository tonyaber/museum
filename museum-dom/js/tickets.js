const typesOfTickets = document.querySelectorAll('input[name="type_ticket"]'),
  inputBasic = document.querySelector('.amount_ticket_input_basic'),
  inputBasicButtons = inputBasic.querySelectorAll('button'),
  inputBasicNumber = inputBasic.querySelector('input'),
  inputSenior = document.querySelector('.amount_ticket_input_senior'),
  inputSeniorButtons = inputSenior.querySelectorAll('button'),
  inputSeniorNumber = inputSenior.querySelector('input'),
  price = document.querySelector('.tickets_section_sale_price span'),
  form = document.querySelector('form'),
  formInputBasic = form.querySelector('.form_tickets_count_grid .basic'),
  formInputBasicButtons = formInputBasic.querySelectorAll('button'),
  formInputBasicNumber = formInputBasic.querySelector('input'),
  formInputSenior = form.querySelector('.form_tickets_count_grid .senior'),
  formInputSeniorButtons = formInputSenior.querySelectorAll('button'),
  formInputSeniorNumber = formInputSenior.querySelector('input'),
  formPrice = form.querySelector('.form_tickets_card_total .price'),
  formTypeOfTickets = form.querySelector('.form_tickets_date select[name="select"]'),
  formTypeOfTicketsLabel = form.querySelector('.form_tickets_card_label_info .icons_check'),
  dateInput = form.querySelector('input[name="ticket_date"]'),
  dateLabel = form.querySelector('.form_tickets_card_label_info .icons_date'),
  timeInput = form.querySelector('.form_tickets_date_time'),
  timeLabel = form.querySelector('.form_tickets_card_label_info .icons_time'),
  nameInput = form.querySelector('.form_tickets_date_name'),
  emailInput = form.querySelector('.form_tickets_date_email'),
  phoneInput = form.querySelector('.form_tickets_date_phone'),
  btn = form.querySelector('.form_tickets_btn');

let type = 'permanent_exhibition',
  date = new Date(),
  time = '16:30';

const typePrice = {
  'permanent_exhibition': {
    'price': 20,
    'name': 'Permanent exhibition'
  },
  'temporary_exhibition': {
    'price': 25,
    'name': 'Temporary exhibition'
  },
  'combined_admission': {
    'price': 40,
    'name': 'Combined Admission'
  }
};

const validation = {
  name: true,
  email: true,
  phone: true,
}

const options = { weekday: 'long', month: 'long', day: 'numeric' };

inputBasicNumber.value = 1;
inputSeniorNumber.value = 1;
formInputBasicNumber.value = 1;
formInputSeniorNumber.value = 1;
dateLabel.textContent = date.toLocaleDateString("en-US", options);
dateInput.setAttribute('min', date.toISOString().split('T')[0]);

const changePrice = () => {
  price.textContent = typePrice[type]['price'] * inputBasicNumber.value + (typePrice[type]['price'] * inputSeniorNumber.value) / 2;
  formPrice.textContent = typePrice[type]['price'] * inputBasicNumber.value + (typePrice[type]['price'] * inputSeniorNumber.value) / 2 + ' €';
  formTypeOfTicketsLabel.textContent = typePrice[type]['name'];
  form.querySelectorAll('.price_basic').forEach(item => item.textContent = typePrice[type]['price']);
  form.querySelectorAll('.price_senior').forEach(item => item.textContent = typePrice[type]['price'] / 2);
  form.querySelector('.price_basic_sum span').textContent = typePrice[type]['price'] * inputBasicNumber.value;
  form.querySelector('.price_senior_sum span').textContent = typePrice[type]['price'] * inputSeniorNumber.value / 2;
  form.querySelector('.basic .count').textContent = inputBasicNumber.value;
  form.querySelector('.senior .count').textContent = inputSeniorNumber.value;
  dateLabel.textContent = date.toLocaleDateString("en-US", options);
  timeLabel.textContent = time;
}

const changeCount = (inputNumber, inputFormNumber, operation) => {
  if (operation == 'addition' && inputNumber.value < 20) {    
    inputNumber.setAttribute('value', Number(inputNumber.value) + 1);
    inputNumber.value = Number(inputNumber.value) + 1;
    inputFormNumber.setAttribute('value', Number(inputFormNumber.value) + 1);
    inputFormNumber.value = Number(inputFormNumber.value) + 1;
    changePrice();    
  }
  else if (operation == 'subtraction' && inputNumber.value > 0) {
    inputNumber.setAttribute('value', Number(inputNumber.value) - 1);
    inputNumber.value = Number(inputNumber.value) - 1;
    inputFormNumber.setAttribute('value', Number(inputFormNumber.value) - 1);
    inputFormNumber.value = Number(inputFormNumber.value) - 1;
    changePrice();
  }
}

const changeSelected = (select, index) => {
  const option = select.querySelectorAll('option');
  for (let i = 0; i < option.length; i++) {
    option[i].removeAttribute('selected', '');
  }
  option[index].setAttribute('selected', '');
}

const changeRadio = (radioSelector, index) => {
  radioSelector.forEach(item => item.removeAttribute('checked'));
  radioSelector[index].setAttribute('checked', '');
}

typesOfTickets.forEach((input, index) => {
  input.addEventListener('change', () => {
    if (input.checked) {
      type = input.value;
      changeSelected(formTypeOfTickets, index);
      changeRadio(typesOfTickets, index)
      changePrice();      
    }
  })
})

formTypeOfTickets.addEventListener('change', (evt) => {
  type = formTypeOfTickets.value;
  changeSelected(formTypeOfTickets, formTypeOfTickets.selectedIndex);
  changeRadio(typesOfTickets, formTypeOfTickets.selectedIndex);
  changePrice();
})

inputBasicButtons[0].addEventListener('click', () => changeCount(inputBasicNumber, formInputBasicNumber, 'subtraction'));
inputBasicButtons[1].addEventListener('click', () => changeCount(inputBasicNumber, formInputBasicNumber, 'addition'));

inputSeniorButtons[0].addEventListener('click', () => changeCount(inputSeniorNumber, formInputSeniorNumber, 'subtraction'));
inputSeniorButtons[1].addEventListener('click', () => changeCount(inputSeniorNumber, formInputSeniorNumber, 'addition'));


formInputBasicButtons[0].addEventListener('click', () => changeCount(inputBasicNumber, formInputBasicNumber, 'subtraction'));
formInputBasicButtons[1].addEventListener('click', () => changeCount(inputBasicNumber, formInputBasicNumber, 'addition'));

formInputSeniorButtons[0].addEventListener('click', () => changeCount(inputSeniorNumber, formInputSeniorNumber, 'subtraction'));
formInputSeniorButtons[1].addEventListener('click', () => changeCount(inputSeniorNumber, formInputSeniorNumber, 'addition'));


dateInput.addEventListener('change', (evt) => {
  date = new Date(evt.target.value);
  changePrice();
})

timeInput.addEventListener('change', () => {
  time = timeInput.value;
  changeSelected(timeInput, timeInput.selectedIndex);
  changePrice();
})
const child = document.createElement('div');

const createMessageValidation = (element, message, condition) => {  
  child.style.marginTop = '-20px';
  child.textContent = message;  
  child.style.color = '#FF0000';
  child.textContent = message;
  element.parentNode.append(child);
  if (condition) {
    child.style.marginTop = '-20px';
    child.textContent = message;
  } else {
    child.style.marginTop = '0';
    child.textContent = '';
  }  
}

nameInput.addEventListener('change', (evt) => {
  const pattern = /^[a-zа-яё\s]+$/iu;

  if (!pattern.test(evt.target.value)) {
    createMessageValidation(nameInput, 'Invalid name, please use only letters', true);
    validation.name = false;
  }
  else {
    createMessageValidation(nameInput, 'Invalid email, please use only letters', false);
    validation.name = true;
  }
})

emailInput.addEventListener('change', (evt) => {
  const pattern = /^([a-z\d_-]{3,15}@[a-z]{4,}\.[a-z]{2,})$/i;
  
  if (!pattern.test(evt.target.value)) {
    createMessageValidation(emailInput, 'Invalid email, please use format username@example.com', true);
    validation.email = false;
  }
  else {
    createMessageValidation(emailInput, 'Invalid email, please use format username@example.com', false);
    validation.email = true;
  }
})

phoneInput.addEventListener('change', (evt) => {
  
  if ( /^([\d]{1,10})$/.test(evt.target.value)
    || /^([\d]{2,3}-[\d]{2,3}-[\d]{2,3})$/.test(evt.target.value)
    || /^([\d]{2,3}\s[\d]{2,3}\s[\d]{2,3})$/.test(evt.target.value)) {
    
    createMessageValidation(phoneInput, 'Invalid phone, please use format 888-888-888', false);
    validation.phone = true;
  }
  else {
    createMessageValidation(phoneInput, 'Invalid phone, please use format 888-888-888', true);
    validation.phone = false;
  }
})

btn.addEventListener('click', (evt) => {
   
  if (!Object.values(validation).every(item => item==true)) {
   evt.preventDefault();
    createMessageValidation(btn, 'Some invalid data', true);
  }
})

console.log('Score 150/150, с дополнительных возможностей - кпопка вверх');