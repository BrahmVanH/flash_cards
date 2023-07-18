import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_DECK } from '../../utils/queries';
import TinderCard from 'react-tinder-card';
import MediaQuery from 'react-responsive';
import '../Flashcard/flashcard.css';

function Flashcard() {
	const [flashcardContent, setFlashcardContent] = useState({});
	const [removeStyles, setRemoveStyles] = useState(false);
	const [cardCountIndex, setCardCountIndex] = useState(0);
	const [endOfDeck, setEndOfDeck] = useState(false);
	const [side, setSide] = useState();

	function handleClick() {
		console.log('clicked!');
		setSide(!side);
		console.log(side);
	}

	const deckName = 'languageFlashcards';

	const { loading, data } = useQuery(GET_DECK, {
		variables: { deckName: deckName },
	});

	console.log(data?.getDeck.contents);

	useEffect(() => {
		setFlashcardContent(data?.getDeck.contents);
		console.log(flashcardContent);
	}, [data]);

	// useEffect(() => {
	// 	flashcardContent?.map((flashcard) => {
	// 		console.log(flashcard);
	// 	});
	// }, [flashcardContent]);

	// const handleShowAnswerClick = (event) => {
	// 	event.preventDefault();
	// 	event.stopPropagation();

	// 	setRemoveStyles(true);
	// };

	const hiddenStyle = {
		display: 'none',
	};

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
		console.log(cardCountIndex);
	}, [cardCountIndex]);

	return (
		<div className='container'>
			<div className='row'>
				{flashcardContent !== {} && !loading ? (
					<>
						{flashcardContent?.map((flashcard) => (
							<TinderCard
								className='flashcard-item col-md-3 swipe d-flex justify-content-center align-content-center'
								key={flashcard._id}
								onSwipe={(direction) => swiped(direction)}>
								<div
									className={`flashcard-content flashcard ${
										side ? 'side' : ''
									}`}
									onClick={handleClick}>
									<div className='front'>
										<h2>{flashcard.englishTranslation}</h2>
									</div>

									<div className='back translations'>
										<h2>{flashcard.frenchTranslation}</h2>
									</div>
								</div>
							</TinderCard>
						))}
					</>
				) : (
					<div> Loading deck </div>
				)}
			</div>
		</div>
	);
}

export default Flashcard;
