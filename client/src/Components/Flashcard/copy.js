// import React, { useState, useEffect } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { useQuery } from '@apollo/client';
// import { GET_DECK } from '../../utils/queries';

// function Flashcard() {
// 	const [flashcardContent, setFlashcardContent] = useState([
// 		{
// 			englishTranslation: '',
// 			spanishTranslation: '',
// 			frenchTranslation: '',
// 			deck: '',
// 		},
// 	]);
// 	const deckName = 'languageFlashcards';
// 	let cardCount = 1;

// 	const [showAnswerSelected, setShowAnswerSelected] = useState(false);

// 	const deck = useQuery(GET_DECK, {
// 		variables: { deckName: deckName },
// 	});

// 	console.log(deck.data?.getDeck.contents);

// 	useEffect(() => {
// 		setFlashcardContent(deck?.data?.getDeck.contents);
// 		console.log(flashcardContent);
// 	}, [deck]);

// 	// const handleShowAnswerClick = (event) => {
// 	// 	event.preventDefault();

// 	// 	setShowAnswerSelected(true);
// 	// };

// 	const handleNext = (event) => {
// 		event.preventDefault();

// 		cardCount++;
// 	};

// 	return (
// 		<div id='carousel-1' className='carousel slide' data-bs-ride='false'>
// 			Flashcards
// 			<div className='carousel-inner'>
// 				{flashcardContent.map((flashcard) => (
// 					<Card className='carousel-item'>
// 						<h5>{cardCount}</h5>
// 						<p>{flashcard.spanishTranslation}</p>
// 						<p>{flashcard.englishTranslation}</p>
// 						<p>{flashcard.frenchTranslation}</p>
// 					</Card>
// 				))}
// 			</div>
// 			<div>
// 				<a
// 					className='carousel-control-prev'
// 					href='#carousel-1'
// 					role='button'
// 					data-bs-slide='prev'>
// 					<span
// 						className='carousel-control-prev-icon'
// 						aria-hidden='true'></span>
// 					<span className='visually-hidden'>Previous</span>
// 				</a>
// 				<a
// 					className='carousel-control-next'
// 					href='#carousel-1'
// 					role='button'
// 					data-bs-slide='next'>
// 					<span
// 						className='carousel-control-next-icon'
// 						aria-hidden='true'></span>
// 					<span className='visually-hidden'>Next</span>
// 				</a>
// 			</div>
// 			<ol className='carousel-indicators'>
// 				<li
// 					className='active'
// 					data-bs-target='#carousel-1'
// 					data-bs-slide-to='0'></li>
// 				<li data-bs-target='#carousel-1' data-bs-slide-to='1'></li>
// 				<li data-bs-target='#carousel-1' data-bs-slide-to='2'></li>
// 			</ol>
// 		</div>
// 	);
// }

// export default Flashcard;
