import React from 'react';
import sair from '../assets/icons/exit.svg';
import logo from '../assets/icons/logo.svg';
import sairDesktop from '../assets/icons/exit-desktop.svg';


export const Header = props =>{

    const nomeCompleto = localStorage.getItem('usuarioNome');
    const primeiroNome = nomeCompleto?.split(' ')[0] || '';

    return(
        <div className="container-header">
            <img className="logo" src={logo} alt="logo devaria"/>
            <button><span>+</span>Adicionar tarefa</button>
            <div className="mobile">
                <span>Olá, {primeiroNome}</span>
                <img className="sair" src={sair} alt="deslogar" onClick={props.sair}/>
            </div>
            <div className="desktop">
                <span>Olá, {primeiroNome}</span>
                <img className="sair" src={sairDesktop} alt="deslogar" onClick={props.sair} />
            </div>
        </div>
    )
}