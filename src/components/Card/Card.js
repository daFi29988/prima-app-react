import "./Card.css"
import imgEspresso from "./imgEspresso.jpg"
import Button from "../Button/Button";


/* function Card ({ colore, titolo, etichette, price, titoloPulsante, immagine }){ */
    function Card ({ colore, dati}){
    // 1) "card "+props.tema
    // 2) 'card ${props.tema}'
    /* 1 e 2 è la stessa cosa con un'altra sintassi, il nostro obbiettivo
    è recuperare la card con tema light (carda+tema)  */
    return(
        <div className={"card "+colore}>
        <div className="card-body">
            {/* Metodo 1 -> Fare l'import dell'immagine nella cartella SRC */}
            <img src={dati.cover.src} alt={dati.cover.alt}/>
            {/* Metodo 2 -> Inserire l'immagine nell cartella PUBBLIC */}
            {/* <img src="./assets/pubblicEspresso.png" alt="espresso"/> */}
            <div>
                <h1>{dati.title}</h1>
                <p>{dati.price}</p>
            </div>
        </div>
        <div className="card-footer">
            <div className="etichette">
                {/* <span>Hot</span>
                <span>Cold</span> */}
                {dati.etichette && dati.etichette.map((valore, indice) => <span key={indice}>{valore}</span>)}
            </div>
            <Button>{dati.buttonTitle}</Button>
            {/* <button>{dati.titoloPulsante}</button> */}
        </div>
    </div>
    )
}

export default Card;