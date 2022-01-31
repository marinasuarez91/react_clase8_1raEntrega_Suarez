import React from "react";
import "./ItemListContainer.css";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>


function ItemCount () {
    const [counter, setCounter] = React.useState(0);

    const stock= 15

    const restarClick = () => {
        if (counter -1 >=0){
            setCounter(counter - 1);
        }
    }
    
    const sumarClick = () => {
        if (counter +1 < stock){
            setCounter(counter + 1);
        }
    }

    return (
        <div className="ItemCount">
            <button onClick={restarClick}>-</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16" className="IconCounterCard">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
            <p className="NumberCounterCard">{counter}</p>
            <button onClick={sumarClick}>+</button>
        </div>
    )

}

export default ItemCount