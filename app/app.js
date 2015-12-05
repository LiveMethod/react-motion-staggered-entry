// =========================================
// App
// ----
// Showcases transitions for multiple DOM elements
// =========================================

import React from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';


const App = React.createClass ({
	render: function(){
		const message = "hello world";

		return(
			<h1>{message}</h1>
		)
	}
});

ReactDOM.render(
  <App/>,
  document.getElementById('appContainer')
);