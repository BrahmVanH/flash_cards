const { AuthenticationError } = require('apollo-server-express');
const { Flashcard, Deck } = require('../models');

const resolvers = {
	Query: {
		getDeck: async (parent, { deckName }) => {
			console.log('getting deck');
			try {
				let retrievedDeck = {};
				if (deckName != '') {
					const deck = await Deck.findOne({ deckName: deckName });
					console.log(deck);
					// deck.map((flashcard) => {
					// 	console.log(flashcard);
					// });
					retrievedDeck = deck;
					console.log(retrievedDeck);
				} else {
					throw new Error('search parameter empty');
				}

				if (!retrievedDeck) {
					throw new Error('No deck found with that name');
				}
				return retrievedDeck;
			} catch (err) {
				console.error(`there was an error in finding that collection` + err);
			}
		},
	},
};

module.exports = resolvers;
