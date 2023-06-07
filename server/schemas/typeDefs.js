const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Flashcard {
		_id: ID!
		englishTranslation: String
		spanishTranslation: String
		frenchTranslation: String
		deck: String
	}

	type Deck {
		deckName: String
		contents: [Flashcard]
		description: String
	}

	type Query {
		getDeck(deckName: String!): Deck
	}
`;

module.exports = typeDefs;
