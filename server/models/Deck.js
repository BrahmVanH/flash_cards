const { Schema, model } = require('mongoose');
const flashcardSchema = require('./Flashcard');

const deckSchema = new Schema(
	{
		deckName: {
			type: String,
			required: true,
		},
		contents: [
			{
				type: Schema.Types.ObjectId,
				ref: 'flashcard',
			},
		],
		description: [flashcardSchema],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

deckSchema.virtual('cardCount').get(function () {
	return this.contents.length;
});

const Deck = model('deck', deckSchema);

module.exports = Deck;
