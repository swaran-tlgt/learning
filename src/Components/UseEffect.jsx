import React from "react";
import { useEffect,useState } from "react";

function UseEffect() {
    const [counter, setCounter] = useState(0);
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log(counter,state);
    },[state]);// it will be run when there is change in dependency

    function handleClick(){
        setCounter(counter+1);
    }
    return (
        <div>
            {counter}
            <button onClick={handleClick}>Add More Count</button>
            <button onClick={()=> setState(state+10)}>Add More Count</button>
        </div>
    );
}

export default UseEffect;