let lists = [];

window.addEventListener('DOMContentLoaded', () => {
	fetch('/api')
		.then((res) => res.json())
		.then((data) => {
			lists = data;
			let list = getList(lists);
			console.log(list);
			// return list.map((laura) => {
			// 	// here are all the variables i need !
			// 	// console.log(`${laura.name}  ${laura.year}`);
			// });
			function Header() {
				return `<div class="header">
							<li>Home</li>
							<li>Documentation</li>
							<li>About</li>
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
			function HomePage() {
				return `<div class="page">
						${Header()}
						<h1>Laura Dern API</h1>
						<p>Let's just say... gay rights!</p>
						${Cards(list)}
						</div>`;
			}

			document.getElementById('root').innerHTML = HomePage();
		})
		.catch((err) => {
			console.log(err);
		});
});

const getList = (lists) => {
	return lists.map((list) => {
		return list.list;
	});
};
