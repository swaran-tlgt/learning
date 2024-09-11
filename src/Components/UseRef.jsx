import { useRef ,useState} from "react";

export default function UseRef(){
    const [name, setName] = useState('Swaran');
    const RefElement = useRef("")

    function resetForm() {
        setName('')
        RefElement.current.focus()
    }

    function handleClick() {
        setName(RefElement.current.value);
    }

    return (
        <>
            <input type="text" onChange={handleClick} value={name} ref={RefElement} />
            <button>{name ? name :'Enter Name'}</button>
            <button onClick={resetForm}> Reset </button>    
        </>
    )
}