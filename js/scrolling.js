document.addEventListener('DOMContentLoaded', function () {
	// Select all links with hashes
	const navLinks = document.querySelectorAll('a[href*="#"]');
	
	// Iterate over each link
	navLinks.forEach(function (link) {
		// Listen for click event
		link.addEventListener('click', function (e) {
			// Prevent default behavior
			e.preventDefault();

			// Get the target section's ID from the href attribute
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			// Scroll smoothly to the target section
			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth'
				});
			}

			// Close the menu if it's open
			closeMenu();
		});
	});
});