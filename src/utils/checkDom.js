export function checkDOMExists(selector) {
	if (document.querySelector(selector)) {
		return console.log(`${selector} is valid`);
	}
	else {
		return console.log(`${selector} is not valid`);
	}
}
