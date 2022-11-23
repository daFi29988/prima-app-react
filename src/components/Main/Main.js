import Card from "../Card/Card";
import datiCard from "../Card/datiCard.json"

function Main(props){
    let array = [1, 2, 3, 4]
    let arrayStringhe = ["prova1", "prova2", "prova3", "prova4"]
    return(
        <main>
            <h2>{props.titolo}</h2>
            {arrayStringhe}
            {datiCard.cards.map((elementi) => (
              /*   <Card key={elementi.id} id={elementi.id} colore={props.tema} etichette={elementi.etichette} titolo={elementi.title} price={elementi.price} titoloPulsante={elementi.buttonTitle} immagine={elementi.cover}/> */
              <Card key={elementi.id} colore={props.tema} dati={elementi}/> 
            ))}
            {/* <Card colore={props.tema}/>
            <Card colore="dark"/> */}
        </main>
    )
}

export default Main;  