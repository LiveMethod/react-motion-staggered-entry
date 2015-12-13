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
    const pageW = document.body.offsetWidth;
		return(
			<StaggeredMotion
        defaultStyles={[
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)},
          {x: -(pageW)}
        ]}
        styles={prevStyles => prevStyles.map((_, i) => { 
          // don't launch until last panel is 1/4 in
          var threshold = -(pageW*0.75);
          var readyToLaunch = false;
          if(i===0 || (i!==0 && prevStyles[i-1].x > threshold)){
            readyToLaunch = true;
             // console.log(i + ' inside ' + prevStyles[i-1].x);
             // destination={x: prevStyles[i-1].x};
          }
          return readyToLaunch ? {x: spring(0, [100,12])} : prevStyles[i];
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