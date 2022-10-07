import React,{useState} from "react";
import * as S from './styled';

const LoginForm = () => {
    const [nome,setNome] = useState('');
    const [senha,setSenha] = useState('');
    const headlersubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <S.container>
            <S.Form onSubmit={headlersubmit}>
                <S.Input placeholder="Nome" value={nome} onChange={(e)=>{setNome(e.target.value)}}></S.Input>
                <S.Input placeholder="Senha" value={senha} onChange={(e)=>{setSenha(e.target.value)}}></S.Input>
                <S.Botao>Envia</S.Botao>
            </S.Form>
        </S.container>
    );
};

export default LoginForm;
