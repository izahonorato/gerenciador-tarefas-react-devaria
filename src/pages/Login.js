import React, {useState} from 'react';
import logo from '../assets/icons/logo.svg'; //importando o arquivo svg e jogando numa variável chamada logo
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';
import { Input } from '../components/Input';
import { executaRequisicao } from '../services/api';

export const Login = () => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [msgErro, setMsgErro] = useState('Olá');
    const [isLoading, setLoading] = useState(false);

    const executaLogin = async evento =>{

        try{
            evento.preventDefault();
        setLoading(true);
        
        const body = {
            login,
            senha
        };

        const resultado = await executaRequisicao('login', 'POST', body);
        console.log(resultado);

        }catch(e){
            if(e?.response?.data?.erro){
                setMsgErro(e.response.data.erro);
            }
            console.log(e)
        }
        setLoading(false);
    }

    return(
        <div className="container-login">
            <img
                src={logo}
                alt="logo Devaria"
                className="logo"
            />
            <form>
                {msgErro && <p>{msgErro}</p>}
                <Input
                    srcImg={mail} 
                    altImg="Icone email"
                    inputType="text"
                    inputName="login"
                    inputPlaceholder="Informe seu e-mail" 
                    value={login}
                    setValue={setLogin}
                />
                <Input
                    srcImg={lock} 
                    altImg="Icone senha"
                    inputType="password"
                    inputName="senha"
                    inputPlaceholder="Informe sua senha" 
                    value={senha}
                    setValue={setSenha}
                />
                               
                <button onClick={executaLogin} disabled={isLoading === true}>{isLoading === true ? '...Carregando' : 'Entrar'}</button>
            </form>
        </div>
    );
}