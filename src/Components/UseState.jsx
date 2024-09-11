import React from "react";
import { useState } from "react";

//useState is used to manage or initialize the state
function UseState() {
    const [counter, setCounter] = useState(0);

    function addCounter() {
        setCounter(counter+1);
    }

    function subCounter() {
        if(counter!=0) {
            setCounter(counter-1)
        }
    }
    return (
        <div>
            Updated Count is {counter}
            <button onClick={addCounter}>Add</button>
            <button onClick={subCounter}>Reduce</button>
        </div>
    )
}

export default UseState;