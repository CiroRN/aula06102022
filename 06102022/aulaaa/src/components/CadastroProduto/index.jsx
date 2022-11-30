import React,{useState} from "react";
import * as S from './styled';

const ProdutoForm = () => {
    const [nome,setNome] = useState('');
    const [preco,setPreco] = useState('');
    const [ingrediente,setIngrediente] = useState('');
    const [descricao,setDescricao] = useState('');

    const headlersubmit=(e)=>{
        e.preventDefault();
    }


    return(
        <S.container>
            <S.Form onSubmit={headlersubmit}>
                <S.Input placeholder="Nome" value={nome} onChange={(e)=>{setNome(e.target.value)}}></S.Input>
                <S.Input placeholder="Preco" value={preco} onChange={(e)=>{setPreco(e.target.value)}}></S.Input>
                <S.Input placeholder="Ingrediente" value={ingrediente} onChange={(e)=>{setIngrediente(e.target.value)}}></S.Input>
                <S.Input placeholder="Descricao" value={descricao} onChange={(e)=>{setDescricao(e.target.value)}}></S.Input>
                <S.Botao>Envia</S.Botao>
            </S.Form>
        </S.container>
    );
};

export default ProdutoForm;
