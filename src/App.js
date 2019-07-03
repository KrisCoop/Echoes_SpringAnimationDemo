import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';


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



////////Abby text
// import React from 'react'
// import { useSpring, animated } from 'react-spring';
    

// const HookedComponent = () => {
//     const props = useSpring({
//         opacity: 1,
//         color: 'white',
//         from: { opacity: 0 },
//         delay: '2000'
//     })
//     return <animated.div style={props}>This text Faded in Using hooks</animated.div>
// }

 
// export default HookedComponent;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Spring  } from 'react-spring';

// class App extends Component {
//   render() {
//     return (

//         <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
//           { props => (
//             <div  className="App" style={ props }>
//               <div >
//                 <header className="App-header" >
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <p>
//                       Edit <code>src/App.js</code> and save to reload.
//                     </p>
//                       <a
//                         className="App-link"
//                         href="https://reactjs.org"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                       Learn React
//                     </a>
//                   </header>
//                 </div>
//               </div>
//             )
//           }
//         </Spring>
//     );
//   }
// }

// export default App;
