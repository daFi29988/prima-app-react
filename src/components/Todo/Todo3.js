import "./Todo.css"
import { useState } from "react";
import Button from "../Button/Button";


function Todo1(){
   /* const arrayToDo=["prova1"] */
   const [arrayToDo, setArrayToDo] = useState(["Inizio lista"]) //
   let stringa = ""
   
   const stampa = () => {
    console.log("stampa");
   }
   const change = (event) => {
    console.log(event.target.value)
    stringa = event.target.value
   }
   const submit = (event) => {
    event.preventDefault() // Non fa ricaricare la pagina al click del bottone
    console.log("submit")
    /* arrayToDo.push(stringa) */
    let arrayTemporaneo = [...arrayToDo,stringa] 
    console.log(arrayToDo)
    setArrayToDo(arrayTemporaneo)
   }
    return (
        <>
        <div className="container">
            <form onSubmit={submit}>
                <input type="text" className="inputText" onChange={change} name=""/>
                <button className="button" onClick={stampa} type="submit">
                     Aggiungi
                </button>
                <Button stampa={stampa}>Aggiungi2</Button>
            </form>
            <ul>
                {arrayToDo.map((elemento, indice)=>
                <li key={indice}>{elemento}</li>
            )}
                
            </ul>
        </div>
        </>
    )
}
/* export default Todo; */