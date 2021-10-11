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
  emailInput = form.querySelector('.form_tickets_date_email');

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

const createMessageValidation = (element, message) => {
  const child = document.createElement('div');
  element.parentNode.appendChild(child)
  child.textContent = message;
  
  child.style.color = '#FF0000';
  form.append(child);
}

emailInput.addEventListener('change', (evt) => {
  const pattern = /^([a-z\d_-]{3,15}@[a-z]{4,}\.[a-z]{2,})$/i;
  
  if (!pattern.test(evt.target.value)) {
    createMessageValidation(emailInput, 'invalid email')
  } else {
    console.log('2')
  }
})