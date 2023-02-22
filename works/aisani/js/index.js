// JavaScript Document

let imageArray = new Array();
let burger = "images/index/main_japanese_hamburger.jpg";
imageArray[0] = burger;

let pilaf = "images/index/main_seasonal_pilaf.jpg";
imageArray[1] = pilaf;

let pork = "images/index/main_shio_koji_pork.jpg";
imageArray[2] = pork;

let macaroni = "images/index/main_macaroni.jpg";
imageArray[3] = macaroni;

function image_loop() {
	let food_card = document.getElementById("food-card_image");
	for(let i = 0; i < imageArray.length; i++) {
		task(i);
	}
	
	function task(i) {
		setTimeout(function() {
			food_card.style.backgroundImage = `url(${imageArray[i]})`;
		}, 7000 * i);
	}
}

image_loop();
setInterval(image_loop, 28000);


let jpArray = new Array();
let burgerText = "和風おろし\nハンバーグ";
jpArray[0] = burgerText;

let pilafText =  "季節の土鍋ピラフ";
jpArray[1] = pilafText;

let porkText = "塩こうじ豚のグリル";
jpArray[2] = porkText;

let macaroniText = "カニとキノコの\n白みそグラタン";
jpArray[3] = macaroniText;

function text_loop() {
	let card_text = document.getElementById("food-card_description-japanese");
	for(let i = 0; i < jpArray.length; i++) {
		task(i);
	}
	
	function task(i) {
		setTimeout(function() {
			card_text.innerHTML =  jpArray[i];
		}, 7000 * i);
	}
}

text_loop();
setInterval(text_loop, 28000);

let engArray = new Array();
let burgerEng = "Japanese Hamburger";
engArray[0] = burgerEng;

let pilafEng =  "Seasonal pilaf \nin an earthen pot";
engArray[1] = pilafEng;

let porkEng = "Grilled shio-koji pork";
engArray[2] = porkEng;

let macaroniEng = "Macaroni au gratin \nwith crab and mushrooms";
engArray[3] = macaroniEng;

function textEng_loop() {
//	let card_textEng = document.getElementById("food-card_description-english");
	let pNode = document.getElementById("pNode");
	
	for(let i = 0; i < engArray.length; i++) {
		task(i);
	}
	
	function task(i) {
		setTimeout(function() {		
			pNode.innerHTML = engArray[i];
		}, 7000 * i);
	}
}

textEng_loop();
setInterval(textEng_loop, 28000);
