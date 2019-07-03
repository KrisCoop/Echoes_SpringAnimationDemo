import React, { Component } from 'react';
// import { Spring } from 'react-spring';
// again, the code on line 2 (taken from the vid tutorial) didn't work, so I went with the code we used in component1; see line 4.
import { Spring } from 'react-spring/renderprops';


export class Component2 extends Component {
    render() {
        return (
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 1000 }}
            >
                { props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>( ( echoes ) )</h1>
                            <p>
                            And deep beneath the rolling waves
                            </p>
                            <p>
                            In labyrinths of coral caves...
                            </p>
                            {/* <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, recusandae! 
                                Perferendis, iusto. Earum expedita nostrum velit, repudiandae laborum recusandae iusto, 
                                dolor voluptates quam placeat neque nemo autem cumque quas ad?
                            </p> */}
                            <button style={btn} onClick={this.props.toggle}>An echo of a distant time...</button>
                            {/* <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button> */}
                        </div>   
                    </div>
                ) }
            </Spring>
        )
    }
}

const c2Style = {
    background: '#71eeb8',
    color: 'white',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const btn = {
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0'
}

export default Component2;