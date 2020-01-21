import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './reducers/rootReducer';
import Routes from './Routes';
import { Header } from './components/Header/Header';
import './App.css';

function App() {
	return (
		<div className="App">
			<Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
				<BrowserRouter>
					<Header />
					<Routes />
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
