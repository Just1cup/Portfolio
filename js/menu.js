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


// Email to me 

(function() {
    emailjs.init("service_ehzvu0k");  
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Collect form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'your-email@example.com'  // This is your email where you'll receive the message
    }).then(function(response) {
       alert("Message sent successfully!");
    }, function(error) {
       alert("Failed to send the message. Please try again.");
    });
  });