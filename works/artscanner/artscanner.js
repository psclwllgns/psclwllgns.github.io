// JavaScript Document

// Load Screen

let loaded = document.getElementById("loading");
window.onload = function () {
    let timeNow = new Date().getTime()
    let pageLoadTime = timeNow - performance.timing.navigationStart;
    if (3000 - pageLoadTime > 0 && pageLoadTime < 3000) {
        var intervalID = setInterval(() => {
            loaded.style.animation = "fade-out 1s forwards";
            document.querySelector("html").style.overflow = "scroll";
            clearInterval(intervalID)
        }, 3000 - pageLoadTime); // guarantee 3s of loading

    } else {
        loaded.style.animation = "fade-out 1s forwards";
        document.querySelector("html").style.overflow = "scroll";
    }
}

// Hamburger Menu
const hamburger_button = document.querySelector("#js-hamburger");
const menu = document.querySelector("#menu");
/*const links = document.querySelector("#menu li")*/

hamburger_button.addEventListener("click", function() {
	menu.classList.toggle("hidden-menu");
/*	links.classList.toggle("hidden-menu")*/
})


// Sample Modal
const samples = document.querySelectorAll(".sample-img");
const modals = document.querySelectorAll(".modal-sample");
const close = document.querySelectorAll(".close");

for(let i = 0; i < samples.length; i++) {
	samples[i].addEventListener("click", function() {
		modals[i].classList.toggle("modal-show");
	});
}

for(let i = 0; i < close.length; i++) {
	close[i].addEventListener("click", function() {
		modals[i].classList.toggle("modal-show");
	});
}


window.addEventListener("click", function(e) {
	for(let i = 0; i < modals.length; i++) {
		if(e.target === modals[i]) {
			modals[i].classList.toggle("modal-show");
		}
	}
})