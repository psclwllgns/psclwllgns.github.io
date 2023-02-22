// JavaScript Document

let hamburgerButton = document.getElementById('hamburger-button');
hamburgerButton.addEventListener('click', wrap);

function wrap() {
	toggleClass();
	fadeMenu();
}

function toggleClass() {
    let hamburgerLines = document.querySelectorAll('.hamburger-line');
    for (let line of hamburgerLines) {
        line.classList.toggle('open-test');
    }
}

function fadeMenu() {
	let fadeMenu = document.getElementById('hamburger-menu');
	fadeMenu.classList.toggle('slide-down');
}