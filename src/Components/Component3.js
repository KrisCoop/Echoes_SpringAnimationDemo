import React from 'react';
import image1 from './../images/Echoes_005white.png';
export default function Component3() {
    return (
        <div style={c3Style}>
            <h1>( echoes )</h1>
            <p>
            Comes willowing across the sand
            </p>
            <p>
            And everything is green and submarine.
            </p>
            {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sint veritatis 
                praesentium suscipit, neque reiciendis libero iusto possimus commodi cumque ad 
                voluptate aut odit nulla doloribus impedit quasi enim maiores :)
            </p> */}
            <img src={image1}/>
        </div>
    )
}

const c3Style = {
    background: '#01786F',
    color: 'white',
    padding: '1.5rem 1.5rem 1.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};