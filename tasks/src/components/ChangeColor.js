import { useState } from "react";


function ChangeColor() {

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
            <h2 style={{color: color}}>{text}</h2>
            <button onClick={changeText}>Click me</button>
        </div>
    )
}

export default ChangeColor;