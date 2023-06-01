import React from 'react';
import logo from './logo.svg';
import Flashcard from './Components/Flashcard';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';

import './App.css';

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Flashcard />
		</ApolloProvider>
	);
}

export default App;
