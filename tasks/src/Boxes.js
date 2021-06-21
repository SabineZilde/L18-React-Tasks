import { useState } from 'react';
import './Boxes.css';

function Boxes() {
    const [activeBlockNumber, setActiveBlockNumber] = useState(1);
    
    let bg1 = 'blue';
    let bg2 = 'blue';
    let bg3 = 'blue';
    let bg4 = 'blue';
    let bg5 = 'blue';

    switch (activeBlockNumber) {
        case 1:
            bg1 = 'red';
            break;
        case 2:
            bg2 = 'red';
            break;
        case 3:
            bg3 = 'red';
            break;
        case 4:
            bg4 = 'red';
            break;
        default:
            bg5 = 'red';
            break;
    }

    const handleLeftBtnClick = () => {
        let number = activeBlockNumber - 1;
        if (number < 1) {
            number = 1;
        }

        setActiveBlockNumber(number);
    }

    const handleRightBtnClick = () => {
        let number = activeBlockNumber + 1;
        if (number > 5) {
            number = 5;
        }

        setActiveBlockNumber(number);
    }
    
    return (
        <div>
            <h1>Task 4</h1>
            <p>Click buttons to move red box</p>
            <div className="box-wraper">
                <div className="blue-box" style={{ background: bg1 }}></div>
                <div className="blue-box" style={{ background: bg2 }}></div>
                <div className="blue-box" style={{ background: bg3 }}></div>
                <div className="blue-box" style={{ background: bg4 }}></div>
                <div className="blue-box" style={{ background: bg5 }}></div>
            </div>
            <div>
                <button onClick={handleLeftBtnClick}>Left</button>
                <button onClick={handleRightBtnClick}>Right</button>
            </div>
        </div>
    )
}

export default Boxes;