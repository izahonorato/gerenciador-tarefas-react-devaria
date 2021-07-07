import React from 'react';
import logo from '../assets/icons/logo.svg'; //importando o arquivo svg e jogando numa variável chamada logo

export const Login = () => {
    return(
        <div>
            <img
                src={logo}
                alt="logo Devaria"
            />
            <form>
                <input type="text" name="login" placeholder="Informe seu e-mail"></input>
                <input type="password" name="senha" placeholder="Informe sua senha"></input>
                <button>Entrar</button>
            </form>
        </div>
    );
}