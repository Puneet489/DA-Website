burger = document.querySelector('.burger')
navBar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', () => {

    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navBar.classList.toggle('h-class');
    document.getElementsByClassName('navbar')[0].style.height = "461px";
})