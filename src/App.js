import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";
import TiendaDetails from "./pages/TiendaDetails";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/Tienda">
              <Route index element ={<Tienda />} />
              <Route path=":id" element={<TiendaDetails />} />
            </Route>  
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>           
      </BrowserRouter>

      {/* <NavBar />
      <ItemListContainer /> */}
    </>
  );
}

export default App;
