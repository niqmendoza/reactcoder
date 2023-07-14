import './button.css';

function ButtonComponent(props){ //con props llamo al label que puse en app.js
    const styleButton = {
        backgroundColor: props.colorFondo,
    };

    return(
        <div>
            <button style={styleButton}>Click me</button>
            <small className='colorTexto'>Soy un boton</small>
        </div>
    )
}

export default ButtonComponent;