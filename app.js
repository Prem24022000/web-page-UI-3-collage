const burger = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-times');
const navBar = document.querySelector('.header nav');


burger.addEventListener('click', (e)=>{

    navBar.classList.add('active')

    e.preventDefault();
});

cross.addEventListener('click', (e)=>{

    navBar.classList.remove('active')

    e.preventDefault();
});