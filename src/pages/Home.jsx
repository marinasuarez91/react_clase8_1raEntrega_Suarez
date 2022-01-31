import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();

    const goToTienda = () => {
        navigate ("/Tienda");
    }

    const goToFAQ = () => {
        navigate ("/FAQ");
    }

    return (<div>
        <h1>Home</h1>
        <button onClick= {goToTienda} >Quiero mi .nina</button>
        <button onClick= {goToFAQ} >Conocé más</button>


    </div>)
};

export default Home;