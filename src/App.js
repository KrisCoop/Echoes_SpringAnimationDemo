import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';
import Component5 from './Components/Component5';


class App extends Component{
  state = {
    showComponent3: false
  }

  // This toggle is meant to change the state of showComponent3
  toggle = e => this.setState({ showComponent3: !this.state.showComponent3 });

  render(){
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Component5/>
        <Component4/>
        <Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <Component3 />
            </animated.div>
          ))}
        </Transition>
      </div>
    );
  }
}

export default App;
