window.addEventListener('DOMContentLoaded', (event) => {
	const form = document.getElementById('submit-form');
	form.onsubmit = (event) => {
		// this prevents the url from being changed and moving to a different page
		event.preventDefault();
		const typeInput = event.target.elements['type'];
		const nameInput = event.target.elements['name'];
		const yearInput = event.target.elements['year'];
		const charInput = event.target.elements['character'];
		const imgInput = event.target.elements['image'];

		const submitBody = {
			type      : typeInput.value,
			name      : nameInput.value,
			year      : yearInput.value,
			character : charInput.value,
			image     : imgInput.value
		};

		console.log(JSON.stringify(submitBody));
		fetch('/api', {
			method  : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			},
			body    : JSON.stringify(submitBody)
		});

		window.location.replace('/submit');
		return false;
	};
});
