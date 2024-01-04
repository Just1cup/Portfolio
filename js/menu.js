const sideMenu = document.querySelector('.list');
const menuIcons = document.querySelectorAll('.menu-icon');

function openMenu() {
    sideMenu.style.transition = '0.5s';
    sideMenu.style.right = "0";
    sideMenu.style.background = '#ff004f';
    if (window.innerWidth < 600) {
        sideMenu.style.background = 'transparent';
    }
}

function closeMenu() {
    sideMenu.style.right = "-250px";
    sideMenu.style.background = 'transparent';
}

// Event listener to open the menu
menuIcons[1].addEventListener('click', openMenu); 

// Event listener to close the menu
menuIcons[0].addEventListener('click', closeMenu); 
