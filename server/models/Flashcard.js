const { Schema, model } = require('mongoose');

const flashcardSchema = new Schema(
	{
		englishTranslation: {
			type: String,
			required: true,
		},
		spanishTranslation: {
			type: String,
			required: true,
		},
		frenchTranslation: {
			type: String,
			required: true,
		},
		deck: {
			type: String,
			required: true,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);



module.exports = flashcardSchema;
