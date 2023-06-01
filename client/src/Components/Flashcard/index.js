import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_DECK } from '../../utils/queries';
import TinderCard from 'react-tinder-card';
import '../Flashcard/flashcard.css';

function Flashcard() {
	const [flashcardContent, setFlashcardContent] = useState([]);
	const deckName = 'languageFlashcards';
	let cardCount = 1;

	const [showAnswerSelected, setShowAnswerSelected] = useState(false);

	const { data } = useQuery(GET_DECK, {
		variables: { deckName: deckName },
	});

	console.log(data?.getDeck.contents);

	useEffect(() => {
		setFlashcardContent(data?.getDeck.contents);
		console.log(flashcardContent);
	}, [data]);

	// const handleShowAnswerClick = (event) => {
	// 	event.preventDefault();

	// 	setShowAnswerSelected(true);
	// };

	const handleNext = (event) => {
		event.preventDefault();

		cardCount++;
	};

	return (
		<div className='container'>
			{flashcardContent?.map((flashcard) => (
				<TinderCard className='flashcard'>
					<h2>Flashcard</h2>
					<h5>{flashcard.deck}</h5>
					<p>{flashcard.spanishTranslation}</p>
					<p>{flashcard.englishTranslation}</p>
					<p>{flashcard.frenchTranslation}</p>
				</TinderCard>
			))}
		</div>
	);
}

export default Flashcard;
