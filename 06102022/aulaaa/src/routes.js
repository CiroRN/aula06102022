import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import Pedido from "./components/Pedido";


const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<LoginForm/>}></Route>
            <Route path="/pedido" element={<Pedido/>}></Route>
        </Routes>
    );
}

export default Router;