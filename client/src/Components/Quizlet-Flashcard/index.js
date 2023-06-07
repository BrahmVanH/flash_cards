import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DECK } from '../../utils/queries';
import { Flashcard } from 'react-quizlet-flashcard';
import cards from '../../assets/flashcardContent/js/languageCards'
import FlashcardArray from '../FlashcardArray/FlashcardArray';

function FlashcardComponent() {
	// const [cards, setCards] = useState(null);

	const deckName = 'languageFlashcards';

	const { data } = useQuery(GET_DECK, {
		variables: { deckName: deckName },
	});

	console.log(data?.getDeck.contents);

	// useEffect(() => {
	// 	setCards(data?.getDeck.contents[0]);
	// 	console.log(cards);
	// }, [data]);

	return (
		<>
			{cards ? (
				<FlashcardArray cards={cards} />
			) : (
				<div>Loading Deck</div>
			)}
		</>
	);
}

export default FlashcardComponent;
