import { useState } from "react";
import "./App.css";
import ProductCard from "./Componentes/cartas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="inicio">
        <header>
          <h1 id="logo">Paco´s</h1>
          <a href="session.html">
            <button class="Perfil">
              <img src="src/img/usuario.png" alt="Imagen" />
            </button>
          </a>
          <button class="notificacion">
            <img src="src/img/campana.png" alt="Imagen" />
          </button>
          <input
            type="text"
            id="buscadorP"
            placeholder="¿Que estás buscando?"
          />
        </header>
        <h1 id="oferta">Ofertas</h1>
        <div class="ofertas">
          <ProductCard></ProductCard>
        </div>
        <div>
          <h1 class="cartelProducto">Productos</h1>
        </div>
        <h1 id="categorias">Bebidas</h1>
        <div class="productos">
          <ProductCard></ProductCard>
        </div>
      </div>
    </>
  );
}

export default App;
