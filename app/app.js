// =========================================
// App
// ----
// Showcases transitions for multiple DOM elements
// =========================================

import React from 'react';
import ReactDOM from 'react-dom';
import {Motion, StaggeredMotion, spring} from 'react-motion';


const Slice = React.createClass({
	render: function(){

    var sliceStyle = {
      display: 'block',
      position: 'relative',
      color: 'red', 
      background: 'yellow',
      border: '1px solid red',
      width: '100%',
      height: '100px'
    }

    // give this slice the styles passed in when its called by the app.
    // this is a very hacky handling that will override default styles,
    // might cause collisions, and other stuff.
    // Improve it if you want to do anything serious.
    for (var key in this.props.style){sliceStyle[key] = this.props.style[key]}
		return(<div style={sliceStyle}>
            {this.props.children}
  				</div>)
	}
});

const App = React.createClass ({
	render: function(){
		const message = "hello world";

		return(
			<StaggeredMotion
        defaultStyles={[{x: 0}, {x: 10}, {x: 20}]}
        styles={prevStyles => prevStyles.map((_, i) => {
          return i === 0
            ? {x: 40}
            : prevStyles[i - 1];
        })}>
        {interpolatedStyles =>
          <div>
            {interpolatedStyles.map((style, i) =>
              <Slice key={i} style={{left: style.x}} />
            )}
          </div>
        }
      </StaggeredMotion>
		)
	}
});

ReactDOM.render(
  <App/>,
  document.getElementById('appContainer')
);