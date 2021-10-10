const typesOfTickets = document.querySelectorAll('input[name="type_ticket"]'),
  inputBasic = document.querySelector('.amount_ticket_input_basic'),
  inputBasicButtons = inputBasic.querySelectorAll('button'),
  inputBasicNumber = inputBasic.querySelector('input'),
  inputSenior = document.querySelector('.amount_ticket_input_senior'),
  inputSeniorButtons = inputSenior.querySelectorAll('button'),
  inputSeniorNumber = inputSenior.querySelector('input'),
  price = document.querySelector('.tickets_section_sale_price span');

let type = 'permanent_exhibition',
  countBasic = 1,
  countSenior = 1,
  priceCount = 30;

const typePrice = {
  'permanent_exhibition': 20,
  'temporary_exhibition': 25,
  'combined_admission': 40
};

const changePrice = () => {
  price.textContent = typePrice[type] * inputBasicNumber.value + (typePrice[type] * inputSeniorNumber.value) / 2;
}

typesOfTickets.forEach(input=>{
  input.addEventListener('change', ()=>{
    if(input.checked){
      type = input.value;
      changePrice();
    }
  })
})

inputBasicButtons[0].addEventListener('click', () => {
  if (inputBasicNumber.value > 0) {
    inputBasicNumber.setAttribute('value', Number(inputBasicNumber.value) - 1);
    inputBasicNumber.value = Number(inputBasicNumber.value) - 1;
    changePrice();
  }
  else {
    inputBasicNumber.value = 0;
  }
})

inputBasicButtons[1].addEventListener('click', ()=>{
  if (inputBasicNumber.value < 20) {
    inputBasicNumber.setAttribute('value', Number(inputBasicNumber.value) + 1);
    inputBasicNumber.value = Number(inputBasicNumber.value) + 1;
    changePrice();
  }
})

inputSeniorButtons[0].addEventListener('click', () => {
  if(inputSeniorNumber.value >= 1){
    inputSeniorNumber.setAttribute('value', Number(inputSeniorNumber.value) - 1);
    inputSeniorNumber.value = Number(inputSeniorNumber.value) - 1;
    changePrice();
  }
  else {
    inputSeniorNumber.value = 0;
  }  
})

inputSeniorButtons[1].addEventListener('click', () => {
  if(inputSeniorNumber.value < 20){
    inputSeniorNumber.setAttribute('value', Number(inputSeniorNumber.value) + 1);
    inputSeniorNumber.value = Number(inputSeniorNumber.value) + 1;
    changePrice();
  }  
})
