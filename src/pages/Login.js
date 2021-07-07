import React from 'react';
import logo from '../assets/icons/logo.svg'; //importando o arquivo svg e jogando numa variável chamada logo
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';

export const Login = () => {
    return(
        <div className="container-login">
            <img
                src={logo}
                alt="logo Devaria"
                className="logo"
            />
            <form>
                <div>
                    <img src={mail} alt="icone e-mail"/>
                    <input type="text" name="login" placeholder="Informe seu e-mail"></input>
                </div>
                <div>
                    <img src={lock} alt="icone senha"/>
                    <input type="password" name="senha" placeholder="Informe sua senha"></input>
                </div>
                
                <button>Entrar</button>
            </form>
        </div>
    );
}