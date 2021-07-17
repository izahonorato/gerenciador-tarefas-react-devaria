import React from 'react'

export const Home = props => {
    return (
        <>
        <h1>Gerenciador de tarefas - Home</h1>
        <a onClick={e => {
            localStorage.removesetItem('accessToken');
            localStorage.removesetItem('usuarioNome');
            localStorage.removesetItem('usuarioEmail');
            props.setAccessToken('');
        }}>Sair</a>
        </>
    );
}