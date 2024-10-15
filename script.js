//your JS code here. If required.
const form = document.getElementById('ageForm');

form.addEventListener('submit', () => {
	event.preventDefault();
	const name = document.getElementById('name').value;
	let age = document.getElementById('age').value;
	age = parseInt(age);

	const agePromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if(age >= 18) {
				resolve();
			}
			else{
				reject();
			}
		}, 4000)
	});

	agePromise.then(() => {
		window.alert(`Welcome, ${name}. You can vote.`)
	})
	.catch(() => {
		window.alert(`Oh sorry ${name}. You aren't old enough.`)
	})
})