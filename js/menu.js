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


function redirectToExternalLink() {
    window.location.href = "https://just1cup.github.io/WeatherApp/";
}

document.getElementById("work1").addEventListener("click", redirectToExternalLink);


// Event listener to open the menu
menuIcons[1].addEventListener('click', openMenu); // Index 1 corresponds to the 'fa-bars' icon

// Event listener to close the menu
menuIcons[0].addEventListener('click', closeMenu); // Index 0 corresponds to the 'fa-xmark' icon
