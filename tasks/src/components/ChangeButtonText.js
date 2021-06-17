import { useState } from "react";

function ChangeButtonText() {
    const [text, setText] = useState('Foo');

    const changeText = () => {
        if (text === 'Foo') {
            setText('Bar'); 
        } else if (text === 'Bar') {
            setText('Baz');
        } else {
            setText('Foo');
        }
    }

    return (
        <div>
            <h1>Task 2</h1>
            <p>Click on the button and change the text</p>
            <button onClick={changeText}>{text}</button>
        </div>
    )
}

export default ChangeButtonText;