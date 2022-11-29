import React,{useState} from "react";
import * as S from './styled';

const Pedido = () => {
    const [pedido,setPedido] = useState('');

    const headlersubmit=(e)=>{
        e.preventDefault();
    }

    return(
        <S.container>
            <S.h1>Cardapio</S.h1>
            <S.h11>
                1.comida
                2.cumida
            </S.h11>
            <S.Form onSubmit={headlersubmit}>
                <S.Input placeholder="Numero do pedido" value={pedido} onChange={(e)=>{setPedido(e.target.value)}}></S.Input>
                <S.Botao>Envia</S.Botao>
            </S.Form>
        </S.container>
    );
};

export default Pedido;
