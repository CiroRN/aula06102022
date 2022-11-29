import React,{useState} from "react";
import * as S from './styled';

const LoginForm = () => {
    const [nome,setNome] = useState('');
    const [senha,setSenha] = useState('');

    const headlersubmit=(e)=>{
        e.preventDefault();
    }

/*     const Chek = async (e) => {
        const json = axios.post(
            'http:/www4.fag.edu.br/api_sumit/fag.php',
            JSON.stringify({
                login: login,
                senha: senha,
                PG: 'login'
            })
        )

        const { id_avaliador, tipo, nome } = (await json).data
        if (nome) {
            window.sessionStorage.setItem('nome', nome);
            window.sessionStorage.setItem('tipo', tipo);
            window.sessionStorage.setItem('id_avaliador', id_avaliador);
            window.sessionStorage.setItem('invisible', 'inicial');
            window.location.href = '/avaliacao'
        } else {
            alert("Login ou senha invalidos.");
        }
    } */

    return(
        <S.container>
            <S.Form onSubmit={headlersubmit}>
                <S.Input placeholder="Nome" value={nome} onChange={(e)=>{setNome(e.target.value)}}></S.Input>
                <S.Input placeholder="Senha" value={senha} onChange={(e)=>{setSenha(e.target.value)}}></S.Input>
                <S.Botao>Envia</S.Botao>
                <a href="/pedido">-  nunpod</a>
            </S.Form>
        </S.container>
    );
};

export default LoginForm;
