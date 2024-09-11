import {React, useDeferredValue,useState} from "react";

export default function UseDeferredValue() {
    const [number,setNumber] =useState(0)
    const old = useDeferredValue(number)

    function handleClick(){
        setNumber(number+1)
    }

    return (
        <>
            <p>Old : {old}</p>
            <p>New : {number}</p>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}