import React from 'react';

export const Input = props =>{
    return (
        <div className="input">
            <img src={mail} alt="icone e-mail"/>
            <input type="text" name="login" placeholder="Informe seu e-mail" 
                value={login} onChange={evento => setLogin(evento.target.value)}></input>
        </div>
    );
}