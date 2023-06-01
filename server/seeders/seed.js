const db = require('../config/connection');
const { Flashcard, Deck } = require('../models');
const deckSeeds = require('./deckSeeds.json');

db.once('open', async () => {
	try {
		await Deck.deleteMany({});
		await Deck.create(deckSeeds);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log('done seeding flashcard');
	process.exit(0);
});
