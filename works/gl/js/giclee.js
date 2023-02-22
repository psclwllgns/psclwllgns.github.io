// JavaScript Document

const hamburger_button = document.querySelector("#js-hamburger");
const menu = document.querySelector("#menu");

hamburger_button.addEventListener("click", function() {
	menu.classList.toggle("hidden-menu");
})