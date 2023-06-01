import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { words } from '../../assets/flashcardContent/englishSpanishFlashcards';

function Flashcard() {

  const [flashcardContent, setFlashcardContent] = useState([{
    spanish: '',
    english: '',
  }]);
	let cardCount = 1;

	const [showAnswerSelected, setShowAnswerSelected] = useState(false);

	const getEnglishSpanishFlashcards = (englishSpanishFlashcards) => {
		
    const flashcards = englishSpanishFlashcards.map(({ spanish, english }) => ({ spanish, english }));
    return flashcards;

	};

  console.log(words);

  useEffect(() => { 
    const retrievedContent = getEnglishSpanishFlashcards(words);
    setFlashcardContent(retrievedContent);
    console.log(retrievedContent);
    console.log(flashcardContent);
  }, [])

	const handleShowAnswerClick = (event) => {
		event.preventDefault();

		setShowAnswerSelected(true);
	};

  const handleNext = (event) => {
    event.preventDefault();

    cardCount++
  }

	return (
    


<div id="carousel-1" className="carousel slide" data-bs-ride="false">
    <div className="carousel-inner">
        {for (const word of words ) {
        <Card className='carousel-item'>
			<h5>{cardCount}</h5>
			<p>{word.spanish}</p>
			{showAnswerSelected ? <p>{word.english}</p> : <></>}
			<Button onClick={handleShowAnswerClick}>Show Answer</Button>
		</Card>
    }}
    </div>
    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></a></div>
    <ol className="carousel-indicators">
        <li className="active" data-bs-target="#carousel-1" data-bs-slide-to="0"></li>
        <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
        <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
    </ol>
</div>
	);
}

export default Flashcard;
