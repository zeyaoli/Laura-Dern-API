window.addEventListener('DOMContentLoaded', () => {
	fetch('/api/type/tv')
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			let json_data = JSON.stringify(data, null, ' ');
			console.log(json_data);
			// document.getElementById('json_code').innerHTML = `
			// <code>${json_data}</code>
			// `;
			document.getElementById('documentation').innerHTML = Dynamic(json_data, data);
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
		<li><a href="/documentation/random">Random Card</a></li>
		</ul>
		</div>`;
}

function Content(data) {
	return `
	<div class="content">
	<h4>LIST MOVIE ONLY</h4>
	<pre>
		<code>https://zeyao-laura-dern-api.com/api/type/tv</code>
	</pre>
	${JsonText(data)}
	`;
}

function Card(cardData) {
	return `<div class="card">
				<img src="${cardData.image}" width="300px"/>
				<h2>${cardData.name}</h2>
				<p>${cardData.year}</p>
				<h4>${cardData.character}</h4>
			</div>`;
}

function Cards(posts) {
	return `<div class="moviecards">
		${posts.map(Card).join('')}
	</div>`;
}

function Dynamic(data, cardData) {
	return `
		${EndPoint()}
		${Content(data)}
		${Cards(cardData)}
	`;
}
