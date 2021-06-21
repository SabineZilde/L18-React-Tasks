import { useState } from "react";


function ChangeColorAndText() {

    const [text, setText] = useState('Foo');
    const [color, setColor] = useState('purple');

    const changeText = () => {
        if (text === 'Foo') {
            setText('Bar');
            setColor('brown');
        } else {
            setText('Foo');
            setColor('purple');
        }
    }

    return (
        <div>
            <h1>Task 1</h1>
            <p>Click on the button and change the text and color</p>
            <h2 style={{color}}>{text}</h2> 
            {/* {{color}} = {{color: color}} */}
            <button onClick={changeText}>Click me</button>
        </div>
    )
}

export default ChangeColorAndText;