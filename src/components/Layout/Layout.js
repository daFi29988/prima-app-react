import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./Layout.css"

function Layout(){
    let titoloMain = "Titolo main"
    return(
        <div className="container">
            <Header/>
            <Main tema="light" titolo={titoloMain}/>
            <Footer>
                ciao, sono il footer
            </Footer>
        </div>
    )
}

export default Layout;

/* 
Componente genitore -> componente figlio -> componente nipote
     LAYOUT         ->      MAIN         ->     CARD

Layout abbiamo il componente main a cui passiamo l'attirbuto del tema=light
Main -> i nostri attributi vanno a finire nel parametro PROPS (props ha una struttura ad oggetto)
Card -> recuperare l'informazione dell'attributo tema=light tramite il parametro props

Layout ->  Main
in Layout ho titoloMain = "il mio titolo" -> attributo titolo nel Main

*/