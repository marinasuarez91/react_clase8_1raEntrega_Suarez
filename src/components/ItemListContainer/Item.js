import "./ItemListContainer.css"
import ItemCount from "./ItemCount"
import { useNavigate } from "react-router-dom"


const Item = ({ product }) => {
    const navigate = useNavigate();
     
    return (
      <div className="ItemCard">
        <p>{product.name}</p>
        <p>Precio: {product.price}</p>
        <img src={product.img}></img>
        <ItemCount />
        <button onClick={() => navigate (`/Tienda/${product.id}`)}>Ver más</button>
      </div>
    );
};

export default Item;
