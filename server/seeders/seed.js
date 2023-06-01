const db = require('../config/connection');
const { Flashcard, Deck } = require('../models');
const flashcardSeeds = require('./flashcardSeeds.json');

db.once('open', async () => {
	try {
		await Flashcard.deleteMany({});
		await Flashcard.create(flashcardSeeds);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log('done seeding flashcard');
	process.exit(0);
});
