function shoot(index) {
	let shooter = document.getElementById(`hole${index}`);
	return shooter
}

dead = 0;
noooo = 0;

for (let i = 0; i <= 9; i++) {
	shoot(i).onclick = function () {
		if (shoot(i).classList.contains('ddd')) {
			dead += 1;
			document.getElementById(`fff`).textContent = dead;
		}
	}
}