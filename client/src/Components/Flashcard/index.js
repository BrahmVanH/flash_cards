import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_DECK } from '../../utils/queries';
import TinderCard from 'react-tinder-card';
import '../Flashcard/flashcard.css';

function Flashcard() {
	const [flashcardContent, setFlashcardContent] = useState([]);
	const [spanishTranslation, setSpanishTranslation] = useState('');
	const [frenchTranslation, setFrenchTranslation] = useState('');
	const [removeStyles, setRemoveStyles] = useState(false);
	const [cardCountIndex, setCardCountIndex] = useState(0);
	const [endOfDeck, setEndOfDeck] = useState(false);

	const deckName = 'languageFlashcards';

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

	const hiddenStyle = {
		display: 'none',
	};

	function showTranslation(id) {
		setRemoveStyles(true);
		let clickedFlashcard = {};
		flashcardContent?.map((flashcard) => {
			if (flashcard._id === id) {
				clickedFlashcard = flashcard;
			}
			return clickedFlashcard;
		});
		setFrenchTranslation(clickedFlashcard.frenchTranslation);
		console.log(clickedFlashcard.frenchTranslation);
		setSpanishTranslation(clickedFlashcard.spanishTranslation);
		console.log(clickedFlashcard.spanishTranslation);
	}

	useEffect(() => {
		console.log(frenchTranslation);
	}, [frenchTranslation]);

	useEffect(() => {
		console.log(spanishTranslation);
	}, [spanishTranslation]);

	function swiped() {
		if (cardCountIndex < flashcardContent.length) {
			setCardCountIndex(cardCountIndex + 1);
			setRemoveStyles(false);
		} else {
			alert("You've reached the end of the deck!");
			setEndOfDeck(true);
		}
	}

	useEffect(() => {
		setFrenchTranslation(flashcardContent[cardCountIndex]);
	}, [cardCountIndex]);

	useEffect(() => {
		console.log(cardCountIndex);
	}, [cardCountIndex]);

	return (
		<div className='swiper-container'>
			<div className='flashcard-container'>
				{endOfDeck ? (
					<div>
						<p>More decks coming soon...</p>
					</div>
				) : (
					<>
						{flashcardContent?.map((flashcard) => (
							<TinderCard
								className='flashcard swipe'
								key={flashcard._id}
								onSwipe={(direction) => swiped(direction)}>
								<div className='flashcard-content'>
									<div
										className='header-container'
										onClick={() => showTranslation(flashcard._id)}>
										<h2>{flashcard.englishTranslation}</h2>
									</div>

									<div
										style={removeStyles ? {} : hiddenStyle}
										className='translations'>
										<p
											style={{ display: 'hidden' }}
											className='translation-label'>
											French:
											<span className='translation-text'>
												{flashcard.frenchTranslation}
											</span>
										</p>
										<p
											style={{ display: 'hidden' }}
											className='translation-label'>
											Spanish:
											<span className='translation-text'>
												{flashcard.spanishTranslation}
											</span>
										</p>
									</div>

									<h4 style={removeStyles ? hiddenStyle : {}}>Tap the English phrase to reveal the translation</h4>
								</div>
							</TinderCard>
						))}
					</>
				)}
			</div>
		</div>
	);
}

export default Flashcard;
