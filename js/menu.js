const sideMenu = document.querySelector('.list');
const menuIcons = document.querySelectorAll('.menu-icon');
const closeIcon = document.querySelectorAll('#close')

function openMenu() {
    sideMenu.style.transition = '0.5s';
    sideMenu.style.right = "0";
    sideMenu.style.background = '#ff004f';
    if (window.innerWidth < 600) {
        sideMenu.style.background = 'transparent';
        closeIcon.style.background = 'transparent'
    }
}

function closeMenu() {
    sideMenu.style.right = "-250px";
    sideMenu.style.background = 'transparent';
    closeIcon.style.backgroung = 'transparent';
}

const externalLinks = {
    weatherApp: "https://just1cup.github.io/WeatherApp/",
    dateApp: console.log('Under development, please try again next time!'),
    login: "just1cup.github.io/Login/"
};

document.getElementById("work1").addEventListener("click", function() {
    window.location.href = externalLinks.weatherApp;
});

document.getElementById("work2").addEventListener("click", function() {
    window.location.href = externalLinks.dateApp;
});

document.getElementById("work3").addEventListener("click", function() {
    window.location.href = externalLinks.login;
});



// Event listener to open the menu
menuIcons[1].addEventListener('click', openMenu); // Index 1 corresponds to the 'fa-bars' icon

// Event listener to close the menu
menuIcons[0].addEventListener('click', closeMenu); // Index 0 corresponds to the 'fa-xmark' icon
