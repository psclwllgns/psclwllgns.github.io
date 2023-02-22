/* vvv Debug vvv */

function printWindowSize() {
	let windowWidth = window.innerWidth;
	document.getElementById('window-info').innerHTML = windowWidth + "px";
}

window.addEventListener('resize', print_and_truncate);

/* ^^^ Debug ^^^ */


/*function truncate() {
	let imageWidth = document.getElementById('testimg');
	imageWidth.style.width = imageWidth.width.toFixed(0);
}
*/
function print_and_truncate() {
	printWindowSize();
/*	truncate();*/
}

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

const sampleImages = ['url(data/images/main_shio_koji_pork.jpg)', 'url(data/images/main_japanese_hamburger.jpg)', 
					'url(data/images/main_seasonal_pilaf.jpg']

let foodCardImage = document.getElementById('food-card_image');

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


/* DRINK MENU SORTS SWITCH BUTTON */




function switchDrinkSorts() {
	let Buttons = document.getElementsByClassName('side-drink-buttons');
	for(let i in Buttons) {
		let IDS = Buttons[i].id.replace("-button", "");
		let Sort_add = document.getElementById(IDS);
		let BG_title_add = document.getElementById(IDS + "-title");

		document.getElementById(IDS + "-button").addEventListener('click', function() {


			for(let x in Buttons) {
				let IDS_two = Buttons[x].id.replace("-button", "");
				let Sort_remove = document.getElementById(IDS_two);
				let BG_title_remove = document.getElementById(IDS_two + "-title");

				if(Sort_remove.classList.contains("active-side-drink")) {
					Sort_remove.classList.add("element-transparent");				
					Sort_remove.classList.remove("active-side-drink");
				}
				if(BG_title_remove.classList.contains("active-bg")) {
					BG_title_remove.classList.add("element-transparent");				
					BG_title_remove.classList.remove("active-bg");
				}
				if(x == Buttons.length - 1) {
					break;
				}
			}

			Sort_add.classList.remove("element-transparent");				
			Sort_add.classList.add("active-side-drink");
			
			BG_title_add.classList.remove("element-transparent");				
			BG_title_add.classList.add("active-bg");
			
			
		})

		if(i == Buttons.length - 1) {
			break;
		}
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

/*function adjustMenuHeight() {*/
	let expButtons = document.getElementsByClassName('side-drink-buttons');

	for(let i = 0; i < expButtons.length; i++) { // last element causes TypeError in (let i in expButtons)
		expButtons[i].addEventListener("click", function() {
			let active = document.getElementsByClassName("active-side-drink");
			let menuHeight = document.getElementById("side-section_menu");
			menuHeight.style.height = `${520 + active[0].clientHeight}px`;

		}
)}
/*}*/


