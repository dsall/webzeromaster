import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Card />
				<Card />
				, document.getElementById('root'));
registerServiceWorker();
