import './scss/app.scss';

const burger = document.querySelector('.header__burger');
const navMob = document.querySelector('.nav-mob');
let example = 'example';

burger.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('header__burger--active');
    navMob.classList.toggle('nav-mob--active');
});

document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13){
        prompt(example);
    };
    console.log(e);
});

console.log(example.toUpperCase());