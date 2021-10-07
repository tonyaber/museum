const burger = document.querySelector('.header_burger'),
  menuList = document.querySelector('.header_navigation_list'),
  links = menuList.querySelectorAll('a'),
  welcomeTitle = document.querySelector('.welcome_title');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuList.classList.toggle('active');
  welcomeTitle.classList.toggle('hide');
})

links.forEach(element => {
    element.addEventListener('click', () => {
        burger.classList.remove('active');
        menuList.classList.remove('active');
        welcomeTitle.classList.remove('hide');
    })
});