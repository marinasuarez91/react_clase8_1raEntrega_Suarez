import Details from "../components/ItemDetailContainer/ItemDetail";
import { useNavigate } from "react-router-dom";

const TiendaDetails = () => {

    let navigate = useNavigate();

    const goToTienda = () => {
        navigate ("/Tienda");
    }

    return (
    <>
        <Details />
        <button onClick= {goToTienda} >Volver a tienda</button>
    </>
    )
};

export default TiendaDetails;