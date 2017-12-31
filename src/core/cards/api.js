export const fetchCards = () => {
				return fetch('cards.json')
				.then( cards =>  new Promise(resolve => setTimeout(() => resolve(cards.json()), 3000)))	
}

