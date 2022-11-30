import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProdutoForm from './components/CadastroProduto';
import LoginForm from "./components/LoginForm";
import Pedido from "./components/Pedido";


const Routa = () => {
    return(
        <Routes>
            <Route exact path="/" element={<LoginForm/>}></Route>
            <Route path="/pedido" element={<Pedido/>}></Route>
            <Route path="/cadastroproduto" element={<ProdutoForm/>}></Route>
        </Routes>
    );
}

export default Routa;