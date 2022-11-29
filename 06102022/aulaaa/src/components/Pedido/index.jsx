import React,{useState} from "react";
import './Filtro.css'

const Pedido = () => {

    return(
        <div>
            <div className="tab">
                <h1>Escreva o numero do pedido:</h1>
                <input className="search"></input>
                <button className="pedir">Pedir</button>
            </div>
            <div className="tab">
                <h1 className="car">Cardapio:</h1>
                <h1 className="des">Numero - Prato   - Preço</h1>
                <h1 className="itn">1      - Lasanha - R$12</h1>
                <h1 className="itn">2      - Espaget - R$8</h1>
            </div>
        </div>
    );
};

export default Pedido;
