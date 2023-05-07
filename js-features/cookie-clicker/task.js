
let clicks = 0;
let cookiesStyle = true;
const clickCookies = document.getElementById('cookie');
clickCookies.onclick = function () {
	clicks++;
	if (cookiesStyle === false) {
		clickCookies.width *= 1.2;
		cookiesStyle = true;
	} else {
		clickCookies.width /= 1.2;
		cookiesStyle = false;
	}
	document.getElementById('clicker__counter').textContent = clicks;
}

