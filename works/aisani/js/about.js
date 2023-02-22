// JavaScript Document

// Noren scroll darken/lighten

function lightenRoom() {
	let scrollY = window.scrollY;
	let blackOverlay = document.getElementById('black-overlay');
	if (scrollY > 250) {  // 540px curtain height

		blackOverlay.style.opacity = "0"; // Light up room when curtain is not visible			
		blackOverlay.style.zIndex = "-1"; // Put overlay behind everything to prevent clickable elements to become unclickable
	}
	
	if (scrollY < 250) {
		blackOverlay.style.opacity = "1"; // Darken room when curtain is visible

	}
}

window.addEventListener('scroll', lightenRoom);

// image fade ins

function fadeInUp() {
	let heightTrigger = window.innerHeight - 240;
	let element = document.getElementsByClassName('before-fadeIn');
	for(let i = 0; i < element.length; i++) {
		let elementRect = element[i].getBoundingClientRect();
		let elementY = Math.round(elementRect["top"])
/*		console.log(elementY + " " + heightTrigger); // Debugging purposes */
		
		if(elementY - heightTrigger < 0) {
			element[i].classList.add("fadeInUp");
			element[i].classList.remove("before-fadeIn");
		}
	}
}

window.addEventListener('scroll', fadeInUp);

// increase margins of food section images when device width shrinks

function increaseMarginTopFood() {
		let screenWidth = window.innerWidth;
		let subWidth = (1920 - screenWidth)/100;

		let imageTwoMarginTop = -7.8;
		let newImageTwoMarginTop = imageTwoMarginTop + subWidth;
		let foodImageTwo_marginTop = document.getElementById("food-image-2");
		foodImageTwo_marginTop.style.marginTop = `max(${imageTwoMarginTop}vw, ${newImageTwoMarginTop}vw`;	

		let imageThreeMarginTop = -5.7;
		let newImageThreeMarginTop = imageThreeMarginTop + subWidth;
		let foodImageThree_marginTop = document.getElementById("food-image-3");
		foodImageThree_marginTop.style.marginTop = `max(${imageThreeMarginTop}vw, ${newImageThreeMarginTop}vw`;
	
}



// increase margins of food section images when device width shrinks

function increaseMarginTopDrink() {
		let screenWidth = window.innerWidth;
		let subWidth = (1920 - screenWidth)/100;

		let imageTwoMarginTop = -24;
		let newImageTwoMarginTop = imageTwoMarginTop + subWidth*2.2;
		let drinkImageTwo_marginTop = document.getElementById("drink-image-2");
		drinkImageTwo_marginTop.style.marginTop = `max(${imageTwoMarginTop}vw, ${newImageTwoMarginTop}vw`;	

		let imageThreeMarginTop = -1.7;
		let newImageThreeMarginTop = imageThreeMarginTop + subWidth*0.85;
		let drinkImageThree_marginTop = document.getElementById("drink-image-3");
		drinkImageThree_marginTop.style.marginTop = `max(${imageThreeMarginTop}vw, ${newImageThreeMarginTop}vw`;
}

function onLoad() {
	
	increaseMarginTopFood();
	increaseMarginTopDrink();
	window.addEventListener('resize', eventListenerToggle);
	
}

function eventListenerToggle() {
	if(window.innerWidth < 376) {
		window.removeEventListener('resize', increaseMarginTopFood);
		window.removeEventListener('resize', increaseMarginTopDrink)
		
		document.getElementById("food-image-2").style.marginTop = "22px";
		document.getElementById("food-image-3").style.marginTop = "43px";
		
		document.getElementById("drink-image-2").style.marginTop = "41px";
		document.getElementById("drink-image-3").style.marginTop = "23px";
	}
	else {
		window.addEventListener('resize', increaseMarginTopFood);
		window.addEventListener('resize', increaseMarginTopDrink);
	}
} 

//window.addEventListener('resize', increaseMarginTopDrink);
onLoad();

