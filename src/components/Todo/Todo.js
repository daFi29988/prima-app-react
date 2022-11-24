import Button from "../Button/Button";
import "./Todo.css";
import { useState } from "react";

function Todo (){
    let listaReset = ["Task1","Task2"]
    const [lista, setLista] = useState(listaReset)
    const [valore, setValore] = useState('')

    const handleChange=(e)=> {
         setValore (e.target.value)
    }
    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log(lista)
        /* 
        UN'ALTRA SINTASSI DI setLista( [...lista, valore] )
        let arrayMomentaneo = [...lista,valore]
        setLista(arrayMomentaneo)
        */ 
        setLista( [...lista,valore] )
        setValore('')

    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={valore}/>
                <button type="submit">
                    Aggiungi
                </button>
            </form>
                <ul>
                    {lista.map((elemento, indice) => 
                        <li key={indice}>{elemento}</li>
                    )}
                </ul>
        </>
        
    )
}

export default Todo;