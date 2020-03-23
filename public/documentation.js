window.addEventListener('DOMContentLoaded', () => {
	fetch('/api')
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			let json_data = JSON.stringify(data, null, ' ');
			console.log(json_data);
			// document.getElementById('json_code').innerHTML = `
			// <code>${json_data}</code>
			// `;
			document.getElementById('documentation').innerHTML = Dynamic(json_data);
		})
		.catch((err) => {
			console.log(err);
		});
});

function JsonText(data) {
	return `
	<h4>Json</h4>
	<pre id="json_code">
	<code>${data}</code>
	</pre>
	`;
}

function EndPoint() {
	return `
		<div class="endpoints">
		<h4>EndPoints</h4>
		<ul>
		<li> <a href="/documentation"> List all cards </a></li>
		<li> <a href="/documentation/movie">Movie Only</a></li>
		<li> <a href="/documentation/tv">TV Show Only</a></li>
		<li> <a href="/documentation/random"> Random Card </a></li>
		</ul>
		</div>`;
}

function Content(data) {
	return `
	<div class="content">
	<h4>LIST EVERYTHING</h4>
	<pre>
		<code>https://zeyao-laura-dern-api.com/api</code>
	</pre>
	${JsonText(data)}
	`;
}

function Dynamic(data) {
	return `
		${EndPoint()}
		${Content(data)}
	`;
}
