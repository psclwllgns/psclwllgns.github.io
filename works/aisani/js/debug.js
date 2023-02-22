/* vvv Debug vvv */

function printWindowSize() {
	let windowWidth = window.innerWidth;
	document.getElementById('window-info').innerHTML = windowWidth + "px";
}

window.addEventListener('resize', print);

/* ^^^ Debug ^^^ */

function print() {
	printWindowSize();
}




