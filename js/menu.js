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


menuIcons[1].addEventListener('click', openMenu); // Index 1 corresponds to the 'fa-bars' icon

// Event listener to close the menu
menuIcons[0].addEventListener('click', closeMenu); // Index 0 corresponds to the 'fa-xmark' icon


function sendEmail() {
    console.log("Button clicked");  // 
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log("Form values - Name:", name, "Email:", email, "Message:", message); 

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    console.log("Mailto link:", mailtoLink);  

  
    window.location.href = mailtoLink;
}
