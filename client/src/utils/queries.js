import { gql } from '@apollo/client';

export const GET_DECK = gql`
	query GetDeck($deckName: String!) {
		getDeck(deckName: $deckName) {
			contents {
				deck
				englishTranslation
				frenchTranslation
				spanishTranslation
			}
			deckName
			description
		}
	}
`;
