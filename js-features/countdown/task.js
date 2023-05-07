
let seconds = 5;
let minutes = 1;
let hours = 1;
const countdownTimer = setInterval(() => {
	if (seconds < 10 && seconds >= 0) {
		seconds = '0' + seconds;
	}
	if (minutes < 10 && minutes[0] !== '0') {
		minutes = '0' + minutes;
	}
	if (hours < 10 && hours[0] !== '0') {
		hours = '0' + hours;
	}
	document.getElementById('timer').textContent = hours + ':' + minutes + ':' + seconds;
	seconds--;
	if (seconds < 0 && minutes <= 0 && hours > 0) {
		hours -= 1;
		minutes = 59
		seconds = 59;
	}
	if (seconds < 0 && minutes > 0) {
		minutes -= 1;
		seconds = 59;
	}
	if (seconds < 0 && minutes === '0' + 0 && hours === '0' + 0) {
		clearInterval(countdownTimer);
		alert('Вы победили в конкурсе!')
	}
}, 1000)

