import "./Button.css"

function Button({children, stampa}){
    return (
        <button onClick={stampa}>{children}</button>
    )
}

export default Button;