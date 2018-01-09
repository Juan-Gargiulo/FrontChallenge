export const fetchCardsApi = () => {
				return fetch('cards.json')
				.then( cards =>  cards.json())	
}

