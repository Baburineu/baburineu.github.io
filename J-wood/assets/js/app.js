// Add grey color to .nav__links
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener("scroll", checkScroll );
window.addEventListener('DOMContentLoaded', checkScroll );

function checkScroll() {
	let scrollPos = window.scrollY;

	if (scrollPos > 0) {
		for(let navLink of navLinks) {
			navLink.classList.add('grey');
		}
	} else {
		for(let navLink of navLinks) {
			navLink.classList.remove('grey');
		}
	}
}

// Show/hide menu on click menu button
const menuBtn = document.querySelector('.menu-btn');
const menuIco = document.querySelector('.menu-btn__ico');
const nav = document.querySelector('.nav');

menuBtn.onclick = function () {
	menuIco.classList.toggle('active');
	nav.classList.toggle('nav--active');
};

// Smooth scroll
$('[data-scroll]').on('click', function (event) {
	event.preventDefault();

	let elementId = $(this).data('scroll');
	let elementOffset = $(elementId).offset().top;

	// Hide menu
	nav.classList.remove('nav--active');
	menuIco.classList.remove('active');

	$('html, body').animate({
		scrollTop: elementOffset - 0
	},1000)
});