import React from 'react';
// import { Spring } from 'react-spring';
// in the video I followed, the guy was able to import Spring using the code on my line 2, but it wasn't working for me. Stack overflow peoples suggested the code on line 4, which works.
import { Spring } from 'react-spring/renderprops';


export default function Component1(){
    return(
        //the way this works is: whatever we want to animate we will return inside of <Spring></Spring>..
        //Inside of <Spring/>, create a container with props, set those props to an arrow function..
        //Then create a div container element that has a style; then pass in props to the style--->  <div style={props}></div>. 
        //Now, whatever we want to animate we can put inside the div. Is nice, high five.
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            { props => (
                <div style={props}>
                     <div style={c1Style}>
                        <h1>( echoes )</h1>
                        <p>
                        Overhead the albatross
                        </p>
                        <p>
                        Hangs motionless upon the air...
                        </p>
                        {/* <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, recusandae! 
                            Perferendis, iusto. Earum expedita nostrum velit, repudiandae laborum recusandae iusto, 
                            dolor voluptates quam placeat neque nemo autem cumque quas ad?
                        </p> */}
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            // with just the 'from' and 'to', it will go from 0 to 10, but will do it super fast, so let's add a 'config' property (set to ten seconds) on the line below..
                            config={{ duration: 10000 }}
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


const c1Style = {
    background: '#76D7EA',
    color: 'white',
    padding: '1.5rem',
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
