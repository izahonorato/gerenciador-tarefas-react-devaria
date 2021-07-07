import React, {useState} from 'react';
import logo from '../assets/icons/logo.svg'; //importando o arquivo svg e jogando numa variável chamada logo
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';

export const Login = () => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setLoading] = useState(false);

    const executaLogin = evento =>{
        evento.preventDefault();
        setLoading(true);
        console.log('login', login);
        console.log('senha', senha);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    return(
        <div className="container-login">
            <img
                src={logo}
                alt="logo Devaria"
                className="logo"
            />
            <form>
                <div className="input">
                    <img src={mail} alt="icone e-mail"/>
                    <input type="text" name="login" placeholder="Informe seu e-mail" 
                    value={login} onChange={evento => setLogin(evento.target.value)}></input>
                </div>
                <div className="input">
                    <img src={lock} alt="icone senha"/>
                    <input type="password" name="senha" placeholder="Informe sua senha"
                    value={senha} onChange={evento => setSenha(evento.target.value)}></input>
                </div>
                
                <button onClick={executaLogin} disabled={isLoading === true}>{isLoading === true ? '...Carregando' : 'Entrar'}</button>
            </form>
        </div>
    );
}