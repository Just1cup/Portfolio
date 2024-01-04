const sideMenu = document.querySelector('.list')

function openMenu() {
    sideMenu.style.transition ='0.5s'
    sideMenu.style.right = "0";
    sideMenu.style.background = '#ff004f'
    if(device-innerWidth < '600px'){
        sideMenu.style.background = 'transparent'
    }
    
}
function closeMenu() {
    sideMenu.style.right = "-250px";
}
