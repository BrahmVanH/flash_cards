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

	const showTranslation = (event) => {
		event.preventDefault();

		const translationEls = document.querySelectorAll('.hidden');
    
    for (const element of translationEls) {

      element.classList.remove('hidden');
    }
	};

	return (
		<div className='swiper-container'>
			<div className='flashcard-container'>
				{flashcardContent?.map((flashcard) => (
					<TinderCard className='flashcard swipe' key={flashcard._id}>
						<div className='flashcard-content'>
							<div className='header-container'>
								<h2>{flashcard.englishTranslation}</h2>
							</div>
							<p className='hidden'>Spanish: {flashcard.spanishTranslation}</p>
							<p className='hidden'>French: {flashcard.frenchTranslation}</p>
							<Button onClick={showTranslation}>Show Translations</Button>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default Flashcard;
