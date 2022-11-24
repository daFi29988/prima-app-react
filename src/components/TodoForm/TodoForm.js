function TodoForm (){
    return (
    <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={valore}/>
            <button type="submit">
                Aggiungi
            </button>
    </form>
    )
}