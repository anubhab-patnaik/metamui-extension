import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function MainApp() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hellllooooooooo
				</p>

				<a
					className="App-link"
					href="https://anubhavp.me/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Good stuff here
				</a>
			</header>
		</div>
	);
}

export default MainApp;
