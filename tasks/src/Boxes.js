import { useState } from 'react';

function Boxes() {
    const [color] = useState('blue');
    const [height] = useState('100px');
    const [width] = useState('100px');
    const [inline] = useState('inline-flex');
    const [margin] = useState('3px')

    const blueStyle = {
        display: inline,
        backgroundColor: color, 
        height: height, 
        width: width,
        margin: margin,
    }

    const redStyle = {
        display: inline,
        backgroundColor: 'red', 
        height: height, 
        width: width,
        margin: margin,
    }

    return (
        <div>
            <h1>Task 4</h1>
            <p>Click buttons to move red box</p>
            <div style={redStyle}></div>
            <div style={blueStyle}></div>
            <div style={blueStyle}></div>
            <div style={blueStyle}></div>
            <div style={blueStyle}></div>
            <br />
            <button>Left</button>
            <button>Right</button>
        </div>
    )
}

export default Boxes;