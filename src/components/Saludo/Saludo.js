import './saludo.css'
function Saludo(props){
    const stylebienv = {
        backgroundColor: props.colorbienv,
    }
    
    return(
        <div>
            <h2 style={stylebienv} className='colorbienv'>Bienvenido {props.username}</h2>
        </div>
    )
}

export default Saludo;