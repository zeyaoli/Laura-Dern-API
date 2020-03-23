let lists = [];

window.addEventListener('DOMContentLoaded', () => {
	fetch('/api')
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			document.getElementById('page').innerHTML = HomePage(data);
			// getMovie();
			// getTV();
		})
		.catch((err) => {
			console.log(err);
		});
});

function getMovie() {
	document.getElementById('clickMovie').onclick = () => {
		fetch('/api/type/movie')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				document.getElementById('page').innerHTML = HomePage(data);
				getMovie();
				getTV();
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

function getTV() {
	document.getElementById('clickTV').onclick = () => {
		fetch('/api/type/tv')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				document.getElementById('page').innerHTML = HomePage(data);
				getMovie();
				getTV();
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

// function Header() {
// 	return `<div class="header">
// 				<li>Home</li>
// 				<li>Documentation</li>
// 				<li><a href="/about">About</a></li>
// 			</div>`;
// }

function Card(cardData) {
	return `<div class="card">
				<img src="${cardData.image}" width="300px"/>
				<h2>${cardData.name}</h2>
				<p>${cardData.year}</p>
				<h4>${cardData.character}</h4>
			</div>`;
}

function Cards(posts) {
	return `<div class="cards">
		${posts.map(Card).join('')}
	</div>`;
}

function Footer() {
	return `<footer> Developed by <a href="https://zeyaoli.com">Zeyao Li</a> 2020 </footer>`;
}
function HomePage(cardData) {
	return `
			<p id="subtitle">🏳️‍🌈Let's just say... gay rights!!🏳️‍🌈</p>
			${Cards(cardData)}
			${Footer()}`;
}

// function AboutPage(){
// 	return
// }
