import ToDoList from "../Todo/Todo";

function Footer(props){
    return(
        <footer>
            {props.children}
        <ToDoList/>
        </footer>
    )
}

export default Footer;