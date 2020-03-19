let lists = [];

window.addEventListener('DOMContentLoaded', () => {
	fetch('/api')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			// let list = getList(lists);
			// console.log(list);
			// return list.map((laura) => {
			// 	// here are all the variables i need !
			// 	// console.log(`${laura.name}  ${laura.year}`);
			// });

			document.getElementById('root').innerHTML = HomePage(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

// const getList = (lists) => {
// 	return lists.map((list) => {
// 		return list.list;
// 	});
// };

function Header() {
	return `<div class="header">
				<li>Home</li>
				<li>Documentation</li>
				<li><a href="/about">About</a></li>
			</div>`;
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
	return `<div class="cards">
		${posts.map(Card).join('')}
	</div>`;
}

function Footer() {
	return `<footer> Developed by <a href="https://zeyaoli.com">Zeyao Li</a> 2020 </footer>`;
}
function HomePage(cardData) {
	return `<div class="page">
			${Header()}
			<h1 id="title">Laura Dern API</h1>
			<p id="subtitle">🏳️‍🌈Let's just say... gay rights!!🏳️‍🌈</p>
			${Cards(cardData)}
			${Footer()}
			</div>`;
}

// function AboutPage(){
// 	return
// }
