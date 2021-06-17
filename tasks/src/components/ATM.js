import { useState } from 'react';

function ATM() {

    const [balance, setBalance] = useState(0);

    const minus5 = () => {
        setBalance(balance - 5);
    }
    const minus1 = () => {
        setBalance(balance - 1);
    }
    const plus5 = () => {
        setBalance(balance + 5);
    }
    const plus1 = () => {
        setBalance(balance + 1);
    }

    return (
        <div>
            <h1>Task 3</h1>
            <p>ATM - press buttons to add or subtract</p>
            <button onClick={minus5}>-5</button><button onClick={minus1}>-1</button><input value={balance}/><button onClick={plus1}>+1</button><button onClick={plus5}>+5</button>
        </div>
    )
}

export default ATM;