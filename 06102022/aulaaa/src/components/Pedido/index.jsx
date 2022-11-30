import React,{useState} from "react";
import * as S from './styled';

const Pedido = () => {
    const [pedido,setPedido] = useState('');

    const headlersubmit=(e)=>{
        e.preventDefault();
    }

    return(
        <S.container>
            <S.Form onSubmit={headlersubmit}>
                <S.Input placeholder="Pedido" value={pedido} onChange={(e)=>{setPedido(e.target.value)}}></S.Input>
                <S.Botao>Envia</S.Botao>
            </S.Form>
        </S.container>
    );
};

export default Pedido;
