import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';


export class Component4 extends Component {
    render() {
        return (
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 4 }}
            config={{ delay: 3000, duration: 1000}}
            >
                {props => (
                    <div style={props}>
                        <div style={c4Style}>
                            <h1>Help! They are going to eat me!</h1>
                            
                            <Spring
                            from={{ number: 0 }}
                            to={{ number: 25 }}
                            config={{ duration: 10000}}
                        >
                            { props => (
                                <div style={props}>
                                    <h1 style={counter}>
                                        {props.number.toFixed()}
                                    </h1>
                                </div>
                            ) }
                        </Spring>
                    </div>
                    
                    </div>
                    
                ) }
            </Spring>
        )
    }
}

const c4Style = {
    background: '#168431',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
};

export default Component4;