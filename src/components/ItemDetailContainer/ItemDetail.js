import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemListContainer/ItemCount";

const Details = () => {

    const {id} = useParams ();
    const [product, setProduct] = useState ();
    const [isLoading, setIsLoading] = useState (false);

    useEffect (() => {
        const URL = `http://localhost:3001/productos/${id}`;
        setIsLoading (true);
        fetch (URL)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading || !product) return <p>Cargando...</p>;

    return (<div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Color: {product.color}</p>
        <p>Medidas: {product.medidas}</p>
        <p>{product.price}</p>
        <img src={product.img}></img>
        <ItemCount />
    </div>
    )
};

export default Details;