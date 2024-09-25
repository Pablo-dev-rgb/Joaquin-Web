import React from "react";
const product = [];

const ProductCard = ({ product }) => {
  return (
    <div class="cartaProd">
      <img class="imgCart" src="src/img/imagen.png" alt="imagen" />
      <div>
        <h3 class="nombreProd">Prod nombre</h3>
        <p class="descripcionProd">Descripción Producto</p>
        <p class="precioProd">$10.000</p>
        <button class="agregarProd">+</button>
        <button class="eliminarProd">-</button>
      </div>
    </div>
  );
};

export default ProductCard;
