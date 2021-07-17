import React from 'react'
import {Header} from '../components/Header';

export const Home = props => {

    const sair = () =>{
        localStorage.removesetItem('accessToken');
        localStorage.removesetItem('usuarioNome');
        localStorage.removesetItem('usuarioEmail');
        props.setAccessToken('');
    }

    return (
        <>
            <Header sair={sair}/>
        </>
    );
}