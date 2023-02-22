// JavaScript Document

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


/* SWITCH LANGUAGES ON MAIN MENU */

let japaneseMenu = document.getElementById("japanese-menu");
let englishMenu = document.getElementById("english-menu");
let switchToEN = document.getElementById("lang-en");
let switchToJP = document.getElementById("lang-jp");

switchToEN.addEventListener("click", function() {
	japaneseMenu.style.display = "none";
	englishMenu.style.display = "block"
})

switchToJP.addEventListener("click", function() {
	englishMenu.style.display = "none"
	japaneseMenu.style.display = "block";
})

/* temporary */

function drinkOrSide(button) {
		if (button.classList.contains("drink-buttons")) {
			return "drink";
		}
		else {
			return "side";
		}
}

function hideInactiveElements(buttons, drink_or_side) {
	for(let x = 0; x < buttons.length; x++) {
		let buttonID_innerLoop = buttons[x].id.replace("-button", "");
		let inactiveSort = document.getElementById(buttonID_innerLoop);
		let inactiveTitle = document.getElementById(buttonID_innerLoop + "-title");

		hideSortOrTitle(inactiveSort, drink_or_side, "");
		hideSortOrTitle(inactiveTitle, drink_or_side, "-bg");
	}
}

function hideSortOrTitle(inactiveVar, drink_or_side, bg) {
	if(inactiveVar.classList.contains("active-" + drink_or_side + bg)) {
		inactiveVar.classList.add("element-transparent");				
		inactiveVar.classList.remove("active-" + drink_or_side + bg);
	}
}

function showActiveElements(activeSort, activeTitle, drink_or_side) {
	activeSort.classList.remove("element-transparent");				
	activeSort.classList.add("active-" + drink_or_side);

	activeTitle.classList.remove("element-transparent");				
	activeTitle.classList.add("active-" + drink_or_side + "-bg");
}

/* DRINK MENU SORTS SWITCH BUTTON */

function switchDrinkSorts() {
	let buttons = document.getElementsByClassName('side-drink-buttons');
	for(let i = 0; i < buttons.length; i++) {
		let buttonID = buttons[i].id.replace("-button", "");
		let activeSort = document.getElementById(buttonID);
		let activeTitle = document.getElementById(buttonID + "-title");
		let drink_or_side;
		
		drink_or_side = drinkOrSide(buttons[i]); // Check whether the current iteration of side-drink-buttons has drink-buttons classbuttonID

		document.getElementById(buttonID + "-button").addEventListener('click', function() {
			hideInactiveElements(buttons, drink_or_side);
			showActiveElements(activeSort, activeTitle, drink_or_side);
		})
	}
}

switchDrinkSorts();

/* SWITCH BETWEEN DRINK AND FOOD MENU */

let switchToDrinkMenu = document.getElementById("food-drink-switch");
let switchToFoodMenu = document.getElementById("drink-food-switch");

let highlightButtonFood  = document.getElementById("food-food-switch");
let highlightButtonDrink  = document.getElementById("drink-drink-switch");

let drinkMenu = document.getElementById("drink-section");
let foodMenu = document.getElementById("food-section");

switchToDrinkMenu.addEventListener("click", function() {
	foodMenu.style.display = "none";
	drinkMenu.style.display = "block";
	highlightButtonDrink.classList.add("active-menu-highlight");
	highlightButtonFood.classList.remove("active-menu-highlight");
})

switchToFoodMenu.addEventListener("click", function() {
	foodMenu.style.display = "block";
	drinkMenu.style.display = "none";
	highlightButtonDrink.classList.remove("active-menu-highlight");
	highlightButtonFood.classList.add("active-menu-highlight");
})


/* EXPAND MENU HEIGHT DEPENDING ON ACTIVE MENU CHOICE */

let expButtons = document.getElementsByClassName('side-drink-buttons');

for(let i = 0; i < expButtons.length; i++) { // last element causes TypeError in (let i in expButtons)
	expButtons[i].addEventListener("click", function() {
		let active = document.getElementsByClassName("active-side");
		let menuHeight = document.getElementById("side-section_menu");
		menuHeight.style.height = `${520 + active[0].clientHeight}px`;

	}
)}

/* Changing text for sample menu description of food */

let jpArray = new Array();
let obanzaiText = "五種盛り合わせ 1,130円";
jpArray[0] = obanzaiText;

let pilafText = "季節の土鍋ピラフ 850円";
jpArray[1] = pilafText;

let dashiText = "京風だし巻き 580円";
jpArray[2] = dashiText;

let baconText = "ベーコンとチーズの湯葉巻き 750円";
jpArray[3] = baconText;

let sakeText = "酒有夢 850円";
jpArray[4] = sakeText;

let kojiText = "塩こうじ豚のグリル 1,100円";
jpArray[5] = kojiText;

function text_loop() {
	let card_text = document.getElementById("changing-description");
	for(let i = 0; i < jpArray.length; i++) {
		task(i);
	}
	
	function task(i) {
		setTimeout(function() {
			card_text.innerHTML =  jpArray[i];
		}, 5000 * i);
	}
}

text_loop();
setInterval(text_loop, 30000);