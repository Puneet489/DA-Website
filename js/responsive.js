burger = document.querySelector('.burger')
navBar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', () => {

    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navBar.classList.toggle('h-nav');
})

function change500() {
    var txt = 500;
    document.getElementById("amount").value = txt;
}

function change1000() {
    var txt = 1000;
    document.getElementById("amount").value = txt;
}

function change10000() {
    var txt = 10000;
    document.getElementById("amount").value = txt;
}