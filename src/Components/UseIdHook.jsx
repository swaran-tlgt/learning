import {React} from "react";
import { useId } from "react";


export default function UseIdHook() {
    const value = useId()
    console.log(value)
    return (
        <>
        <input type="text" id={value} name="pwd" value={value} />
        <input type="text" id={value} name="pwd111" value={value} />
        </>
    )
}