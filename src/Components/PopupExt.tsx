import '../Assets/styles/PopupExt.css';
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import MainApp from './Mainpage';


function PopupApp() {
	return (
		<div className="App popupapp">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hoiii
				</p>
				<a
					className="App-link"
					href="/mainapp"
					target="_blank"
					rel="noopener noreferrer"
				>
					Good stuff here
				</a>
				<a href="/mainapp">Expand view</a>
			</header>
		</div>
	);

}

export default PopupApp;
