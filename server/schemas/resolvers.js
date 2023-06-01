const { AuthenticationError } = require('apollo-server-express');
const { Flashcard, Deck } = require('../models');

const resolvers = {
	Query: {
		getDeck: async (parent, { deckName }) => {
			if (deckName != '') {
				const deck = Deck.find({ deckName: deckName });
			} else {
				throw new Error('search parameter empty');
			}

			if (!deck) {
				throw new Error('No deck found with that name');
			}
			return deck;
		},
	},
};

module.exports = resolvers;