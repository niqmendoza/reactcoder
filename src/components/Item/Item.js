function Item(props){
    const {title, img, price} = props;
    return (
    <div>
        <h1>{title}</h1>
        <img src={img}/>
        <p>$ {price}</p>
        <button>Ver Producto</button>
    </div>)
}

export default Item;